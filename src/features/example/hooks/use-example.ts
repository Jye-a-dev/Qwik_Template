import { useSignal, useComputed$, $ } from '@builder.io/qwik';
import type { ExampleTask } from '../types';

export function useExampleTaskState(initialTasks: ExampleTask[]) {
  const tasksSignal = useSignal<ExampleTask[]>(initialTasks);
  const filterSignal = useSignal<'all' | 'active' | 'completed'>('all');

  const filteredTasks = useComputed$(() => {
    if (filterSignal.value === 'active') {
      return tasksSignal.value.filter((t) => !t.completed);
    }
    if (filterSignal.value === 'completed') {
      return tasksSignal.value.filter((t) => t.completed);
    }
    return tasksSignal.value;
  });

  const toggleTask$ = $((id: string) => {
    tasksSignal.value = tasksSignal.value.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
  });

  return {
    tasksSignal,
    filterSignal,
    filteredTasks,
    toggleTask$,
  };
}
