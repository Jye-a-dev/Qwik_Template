import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <header class="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 font-bold text-slate-950 shadow-md">
              Q
            </div>
            <div>
              <span class="font-bold tracking-tight text-white">Qwik Template</span>
              <span class="ml-2 rounded bg-cyan-950 px-1.5 py-0.5 text-[11px] font-medium text-cyan-400 ring-1 ring-cyan-800">
                Production Ready
              </span>
            </div>
          </div>
          <nav class="flex items-center gap-4 text-sm text-slate-400">
            <a
              href="/api/health"
              target="_blank"
              class="rounded-md px-2.5 py-1 transition hover:text-cyan-400"
            >
              Health Check API
            </a>
            <a
              href="https://qwik.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-md px-2.5 py-1 transition hover:text-cyan-400"
            >
              Docs
            </a>
          </nav>
        </div>
      </header>

      <main class="flex-1">
        <Slot />
      </main>

      <footer class="border-t border-slate-800/80 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        <div class="mx-auto max-w-6xl px-4">
          Built with Qwik & Qwik City + Tailwind CSS v4 + TypeScript. Optimized for Solo & Team
          workflows.
        </div>
      </footer>
    </div>
  );
});
