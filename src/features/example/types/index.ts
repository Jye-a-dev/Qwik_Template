export type TaskPriority = 'low' | 'medium' | 'high';

export interface ExampleTask {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
}

export type CreateTaskInput = Omit<ExampleTask, 'id' | 'createdAt'>;
