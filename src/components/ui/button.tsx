import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[8px] whitespace-nowrap font-['Area_Normal',sans-serif] font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: "bg-[#1C1C1C] text-white hover:bg-[#1C1C1C]/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-[rgba(0,0,0,0.05)] bg-white text-[#1C1C1C] hover:bg-[rgba(251,251,251,0.75)]",
        secondary:
          "text-[rgba(28,28,28,0.5)] hover:text-[rgba(28,28,28,0.7)]",
        ghost:
          "text-[rgba(28,28,28,0.5)] hover:text-[rgba(28,28,28,0.7)]",
        link: "text-[#1C1C1C] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[24px] py-[12px] text-[14px] leading-[14px] rounded-[6px]",
        sm: "px-[16px] py-[8px] text-[12px] leading-[12px] rounded-[6px]",
        lg: "px-[32px] py-[16px] text-[14px] leading-[14px] rounded-[6px]",
        icon: "size-9 rounded-[6px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
