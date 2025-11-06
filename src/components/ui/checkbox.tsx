"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox@1.1.4";
import { CheckIcon } from "lucide-react@0.487.0";

import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border bg-white data-[state=checked]:bg-[#1C1C1C] data-[state=checked]:text-white data-[state=checked]:border-[#1C1C1C] focus-visible:ring-[rgba(28,28,28,0.1)] aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-5 shrink-0 rounded-md border-[rgba(0,0,0,0.05)] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)] transition-all outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
