import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border border-dark-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-dark-surface-alt text-gold border-gold/30",
        secondary:
          "bg-dark-surface text-text-muted border-dark-border",
        destructive:
          "bg-red-900 text-white border-red-800",
        outline: "text-text-main border-white/20",
        luxury: "bg-gold text-dark-bg border-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
