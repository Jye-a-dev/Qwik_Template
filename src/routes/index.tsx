import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/ui/button';
import { ExampleCard } from '~/features/example/components/example-card';
import { fetchTasksServer } from '~/features/example/api/example.service';
import { env } from '~/config/env';

export const useInitialTasks = routeLoader$(async () => {
  return await fetchTasksServer();
});

export default component$(() => {
  const initialTasks = useInitialTasks();

  return (
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Hero Section */}
      <section class="mb-14 text-center">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3.5 py-1 text-xs font-medium text-cyan-400 backdrop-blur">
          <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Production-Ready Architecture · Port 5000 Active
        </div>

        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Supercharge Full-Stack Apps with{' '}
          <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Qwik & Qwik City
          </span>
        </h1>

        <p class="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          Resumable, instant-on web apps with Tailwind CSS v4, feature-based modularity, strict
          TypeScript, and automated Git hooks for Solo and Team excellence.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick$={() => {
              window.open('/api/health', '_blank');
            }}
          >
            Check API Health
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick$={() => {
              window.open('https://github.com/BuilderIO/qwik', '_blank');
            }}
          >
            GitHub Repository
          </Button>
        </div>
      </section>

      {/* Feature Section Grid */}
      <div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Tech Highlights */}
        <div class="space-y-4 lg:col-span-5">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 class="mb-2 text-lg font-semibold text-white">Core Foundations</h3>
            <ul class="space-y-2 text-sm text-slate-300">
              <li class="flex items-center gap-2">
                <span class="font-mono text-cyan-400">⚡</span>
                <strong>Zero-JS Hydration:</strong> Qwik resumability.
              </li>
              <li class="flex items-center gap-2">
                <span class="font-mono text-cyan-400">🎨</span>
                <strong>Tailwind CSS v4:</strong> Lightning-fast compilation.
              </li>
              <li class="flex items-center gap-2">
                <span class="font-mono text-cyan-400">🔒</span>
                <strong>Validated Env:</strong> Zod-guaranteed config.
              </li>
              <li class="flex items-center gap-2">
                <span class="font-mono text-cyan-400">🚀</span>
                <strong>Port 5000:</strong> Controlled via .env.
              </li>
              <li class="flex items-center gap-2">
                <span class="font-mono text-cyan-400">🛡️</span>
                <strong>Quality Gates:</strong> ESLint 9, Prettier, Husky.
              </li>
            </ul>
          </div>

          <div class="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-xs text-slate-400">
            <div class="text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              Environment Info
            </div>
            <div class="space-y-1 rounded-lg border border-slate-800/80 bg-slate-950 p-3 font-mono">
              <div>
                PUBLIC_SITE_URL: <span class="text-cyan-300">{env.PUBLIC_SITE_URL}</span>
              </div>
              <div>
                PUBLIC_API_BASE_URL: <span class="text-cyan-300">{env.PUBLIC_API_BASE_URL}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Feature Component */}
        <div class="lg:col-span-7">
          <ExampleCard initialTasks={initialTasks.value} />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Template · Production Ready',
  meta: [
    {
      name: 'description',
      content:
        'Production-ready Qwik & Qwik City template with Tailwind CSS v4, feature-based architecture, and strict TypeScript.',
    },
  ],
};
