import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/utils/cn';

const variants = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer disaled:cursor-not-allowed',

  variants: {
    variant: {
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    },

    size: {
      lg: 'h-11 rounded-md px-8 text-lg',
      md: 'h-10 rounded-md px-4 text-base',
      sm: 'h-9 rounded-md px-3 text-sm',
    },
  },

  defaultVariants: {
    size: 'lg',
    variant: 'primary',
  },
});

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof variants> {
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, variant = 'primary', ...props }, ref) => {
    return (
      <button
        className={cn(variants({ variant }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <Loader2 className="animate-spin" /> : children}
      </button>
    );
  },
);

Button.displayName = 'Button';
