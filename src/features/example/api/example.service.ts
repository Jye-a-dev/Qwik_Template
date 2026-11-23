import { server$ } from '@builder.io/qwik-city';
import type { ExampleTask, CreateTaskInput } from '../types';

const initialTasks: ExampleTask[] = [
  {
    id: 'task-1',
    title: 'Setup Qwik & Qwik City Production Architecture',
    description: 'Thin routes, feature-based modules, and strict TypeScript.',
    priority: 'high',
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-2',
    title: 'Integrate Tailwind CSS v4 & @tailwindcss/vite',
    description: 'Lightning-fast compilation without legacy tailwind.config.js.',
    priority: 'high',
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-3',
    title: 'Verify Git Hooks & Quality Gate (Husky + Commitlint)',
    description: 'Ensure consistent code style across solo and team environments.',
    priority: 'medium',
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

/**
 * Server function to fetch mock tasks.
 * Executes exclusively on the server in production.
 */
export const fetchTasksServer = server$(async (): Promise<ExampleTask[]> => {
  return initialTasks;
});

/**
 * Server function to create a new task.
 */
export const createTaskServer = server$(async (input: CreateTaskInput): Promise<ExampleTask> => {
  const newTask: ExampleTask = {
    id: `task-${Date.now()}`,
    ...input,
    createdAt: new Date().toISOString(),
  };
  return newTask;
});
