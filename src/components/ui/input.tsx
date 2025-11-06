import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "font-['Area_Normal',sans-serif] font-semibold file:text-[#1C1C1C] placeholder:text-[rgba(28,28,28,0.5)] selection:bg-[#1C1C1C] selection:text-white flex h-auto w-full min-w-0 rounded-[8px] border border-[rgba(0,0,0,0.05)] px-[16px] py-[12px] text-[15px] leading-[24px] bg-white transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-bold disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-[rgba(0,0,0,0.1)] focus-visible:ring-0",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
