import * as React from "react"
import { cn } from "@/lib/utils"

const NeonCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glow" | "highlight"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
      {
        "neon-border hover:glow-blue": variant === "default",
        "neon-border glow-blue": variant === "glow",
        "border-neon-purple bg-gradient-to-br from-card to-card/50 hover:glow-purple": variant === "highlight"
      },
      className
    )}
    {...props}
  />
))
NeonCard.displayName = "NeonCard"

const NeonCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
NeonCardHeader.displayName = "NeonCardHeader"

const NeonCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
NeonCardTitle.displayName = "NeonCardTitle"

const NeonCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
NeonCardDescription.displayName = "NeonCardDescription"

const NeonCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
NeonCardContent.displayName = "NeonCardContent"

const NeonCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
NeonCardFooter.displayName = "NeonCardFooter"

export { NeonCard, NeonCardHeader, NeonCardFooter, NeonCardTitle, NeonCardDescription, NeonCardContent }