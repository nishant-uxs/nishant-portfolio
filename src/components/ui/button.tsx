import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nx-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-nx-accent text-white shadow-[0_0_30px_rgba(79,125,255,0.35)] hover:shadow-[0_0_50px_rgba(79,125,255,0.5)] hover:-translate-y-0.5",
        ghost:
          "border border-nx-border bg-nx-glass text-white backdrop-blur-xl hover:border-[rgba(79,125,255,0.35)] hover:bg-[rgba(79,125,255,0.08)]",
        link: "rounded-none bg-transparent px-0 text-nx-muted hover:text-white",
      },
      size: {
        default: "h-14 px-8 text-base",
        lg: "h-16 px-10 text-lg",
        sm: "h-11 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
