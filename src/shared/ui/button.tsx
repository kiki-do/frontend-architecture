import { Loader2 } from 'lucide-react';
import { type ComponentProps, type ReactNode } from 'react';
import { forwardRef } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, ...props }, ref) => {
    return (
      <button ref={ref} disabled={isLoading || props.disabled} {...props}>
        {isLoading ? <Loader2 className="animate-spin" /> : children}
      </button>
    );
  },
);

Button.displayName = 'Button';
