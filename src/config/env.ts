import { z } from 'zod';

/**
 * Zod schema to validate public environment variables exposed via Vite (import.meta.env).
 */
export const publicEnvSchema = z.object({
  PUBLIC_SITE_URL: z.string().url().default('http://localhost:5000'),
  PUBLIC_API_BASE_URL: z.string().url().default('http://localhost:8000/api'),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;

const rawEnv = {
  PUBLIC_SITE_URL:
    typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL
      ? import.meta.env.PUBLIC_SITE_URL
      : 'http://localhost:5000',
  PUBLIC_API_BASE_URL:
    typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_API_BASE_URL
      ? import.meta.env.PUBLIC_API_BASE_URL
      : 'http://localhost:8000/api',
};

export const env = publicEnvSchema.parse(rawEnv);
