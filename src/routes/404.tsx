import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/ui/button';

export default component$(() => {
  return (
    <div class="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div class="mb-6 rounded-full bg-cyan-950/60 p-4 ring-1 ring-cyan-800">
        <span class="text-3xl font-black text-cyan-400">404</span>
      </div>
      <h1 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Page Not Found</h1>
      <p class="mt-3 max-w-md text-sm text-slate-400">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div class="mt-8 flex gap-3">
        <Button
          onClick$={() => {
            window.location.href = '/';
          }}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: '404 - Not Found',
  meta: [
    {
      name: 'description',
      content: 'The page you requested could not be found.',
    },
  ],
};
