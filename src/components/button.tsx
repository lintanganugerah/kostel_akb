import React from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';
import {Loader2} from 'lucide-react';

//Variant Button CVA
const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                fillPrimary: 'bg-accent-primary text-white hover:text-gray-200 hover:bg-black/20',
                fillSecondary: 'bg-accent-secondary text-black hover:',
                transparentPrimary: 'bg-accent-primary/20 text-gray-400 hover:text-gray-200 hover:bg-accent-primary/80',
                transparentSecondary: 'bg-accent-secondary/20 text-gray-200 hover:text-gray-700 hover:bg-accent-secondary/80',
                outlinePrimary: 'border border-accent-primary text-black',
                outlineSecondary: 'border border-accent-secondary text-white',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                destructive: 'bg-red-500 text-destructive-foreground hover:bg-red-600',
            },
            size: {
                sm: 'h-9 rounded-md px-3',
                md: 'h-9 px-3 md:h-10 md:px-4 md:py-2',
                lg: 'h-10 px-4 py-2 md:h-11 md:px-8',
                icon: 'h-9 w-9 md:h-10 md:w-10',
            },
        },
        defaultVariants: {
            variant: 'fillPrimary',
            size: 'md',
        },
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, isLoading, children, ...props}, ref) => {
        return (
            <button
                className={twMerge(buttonVariants({variant, size, className}))}
                ref={ref}
                disabled={isLoading}
                {...props}
            >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export {Button, buttonVariants};