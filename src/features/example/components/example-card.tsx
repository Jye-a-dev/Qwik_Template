import { component$, useSignal, $ } from '@builder.io/qwik';
import { Button } from '~/components/ui/button';
import { createTaskServer } from '../api/example.service';
import { createTaskSchema } from '../schemas/example.schema';
import type { ExampleTask } from '../types';

export interface ExampleCardProps {
  initialTasks: ExampleTask[];
}

export const ExampleCard = component$<ExampleCardProps>(({ initialTasks }) => {
  const tasksSignal = useSignal<ExampleTask[]>(initialTasks);
  const newTitleSignal = useSignal('');
  const errorSignal = useSignal('');
  const isSubmittingSignal = useSignal(false);

  const handleToggle$ = $((id: string) => {
    tasksSignal.value = tasksSignal.value.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
  });

  const handleAddTask$ = $(async () => {
    errorSignal.value = '';
    const validation = createTaskSchema.safeParse({
      title: newTitleSignal.value,
      priority: 'medium',
      completed: false,
    });

    if (!validation.success) {
      errorSignal.value = validation.error.issues[0]?.message || 'Invalid input';
      return;
    }

    const title = validation.data.title;
    const priority = validation.data.priority;

    try {
      isSubmittingSignal.value = true;
      const created = await createTaskServer({
        title,
        priority,
        completed: false,
      });
      tasksSignal.value = [...tasksSignal.value, created];
      newTitleSignal.value = '';
    } catch {
      errorSignal.value = 'Failed to create task on server';
    } finally {
      isSubmittingSignal.value = false;
    }
  });

  return (
    <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-white">Feature Module: Example Tasks</h2>
          <p class="text-sm text-slate-400">
            Demonstrating server$ calls, Zod validation, and fine-grained signals.
          </p>
        </div>
        <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 ring-1 ring-cyan-500/30">
          {tasksSignal.value.filter((t) => t.completed).length}/{tasksSignal.value.length} done
        </span>
      </div>

      {/* Task input form */}
      <div class="mb-5 flex gap-2">
        <input
          type="text"
          placeholder="Add a new milestone..."
          value={newTitleSignal.value}
          onInput$={(e) => {
            newTitleSignal.value = (e.target as HTMLInputElement).value;
          }}
          onKeyDown$={(e) => {
            if (e.key === 'Enter') {
              handleAddTask$();
            }
          }}
          class="flex-1 rounded-lg border border-slate-700 bg-slate-950/70 px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
        />
        <Button
          onClick$={handleAddTask$}
          disabled={isSubmittingSignal.value || !newTitleSignal.value.trim()}
          size="sm"
        >
          {isSubmittingSignal.value ? 'Adding...' : 'Add Task'}
        </Button>
      </div>

      {errorSignal.value && (
        <div class="mb-4 rounded-lg bg-rose-950/40 p-2.5 text-xs text-rose-300 ring-1 ring-rose-800">
          {errorSignal.value}
        </div>
      )}

      {/* Tasks list */}
      <ul class="space-y-2.5">
        {tasksSignal.value.map((task) => (
          <li
            key={task.id}
            class="flex items-center justify-between gap-3 rounded-lg border border-slate-800/80 bg-slate-950/40 p-3 transition-colors hover:border-slate-700"
          >
            <div class="flex items-center gap-3">
              <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange$={() => handleToggle$(task.id)}
                class="h-4 w-4 cursor-pointer rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900"
              />
              <label
                for={`task-${task.id}`}
                class={`cursor-pointer text-sm select-none ${
                  task.completed ? 'text-slate-500 line-through' : 'text-slate-200'
                }`}
              >
                {task.title}
              </label>
            </div>
            <span
              class={`rounded px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase ${
                task.priority === 'high'
                  ? 'bg-rose-950/60 text-rose-400 ring-1 ring-rose-800/50'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {task.priority}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
});
