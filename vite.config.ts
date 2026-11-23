import { defineConfig, loadEnv, type UserConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.PORT) || 5000;

  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), tailwindcss()],
    server: {
      port,
      host: true,
      headers: {
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      port,
      host: true,
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
