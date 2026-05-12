import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-bold uppercase tracking-widest ring-offset-dark-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-dark-bg hover:bg-gold-light",
        destructive: "bg-red-900 text-white hover:bg-red-800 border border-red-800",
        outline: "border border-white/20 bg-transparent hover:bg-white/5 text-text-main",
        secondary: "bg-dark-surface-alt text-text-main hover:bg-dark-border border border-dark-border",
        ghost: "hover:bg-dark-surface-alt hover:text-gold",
        link: "text-gold underline-offset-4 hover:underline",
        luxury: "bg-gold text-dark-bg hover:bg-gold-light",
      },
      size: {
        default: "h-12 px-8 py-4 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
