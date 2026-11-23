import { component$, type ButtonHTMLAttributes, Slot } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  class?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    'bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 active:bg-cyan-600 focus-visible:ring-cyan-400 shadow-sm',
  secondary:
    'bg-slate-800 text-slate-100 hover:bg-slate-700 active:bg-slate-850 focus-visible:ring-slate-400 border border-slate-700',
  outline:
    'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/40 active:bg-cyan-950/60 focus-visible:ring-cyan-400',
  ghost:
    'text-slate-300 hover:bg-slate-800 hover:text-white active:bg-slate-700/60 focus-visible:ring-slate-400',
  destructive:
    'bg-rose-600 text-white font-medium hover:bg-rose-500 active:bg-rose-700 focus-visible:ring-rose-400 shadow-sm',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
  md: 'h-10 px-4 text-sm rounded-lg gap-2',
  lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
};

export const Button = component$<ButtonProps>(
  ({ variant = 'default', size = 'md', class: className, ...props }) => {
    return (
      <button
        {...props}
        class={cn(
          'inline-flex cursor-pointer items-center justify-center font-medium transition-colors',
          'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none',
          'select-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
      >
        <Slot />
      </button>
    );
  },
);
