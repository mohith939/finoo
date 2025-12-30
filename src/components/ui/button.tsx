import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-border bg-background hover:bg-accent/10 hover:border-accent/50 hover:text-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-accent underline-offset-4 hover:underline",
        // FINSTICS custom variants - Enhanced visual appearance
        calm: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        calmOutline: "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        subtle: "bg-secondary/80 text-foreground hover:bg-secondary border border-border/50 hover:border-accent/30",
        whatsapp: "bg-[hsl(142,70%,45%)] text-white hover:bg-[hsl(142,70%,40%)] shadow-lg shadow-[hsl(142,70%,45%)]/25 hover:shadow-xl hover:shadow-[hsl(142,70%,45%)]/35 hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-7 py-2.5",
        sm: "h-10 rounded-lg px-5 text-sm",
        lg: "h-14 rounded-xl px-9 text-lg",
        xl: "h-16 rounded-2xl px-12 text-lg",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
