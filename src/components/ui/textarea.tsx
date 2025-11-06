import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "font-['Area_Normal',sans-serif] font-semibold resize-none border-[rgba(0,0,0,0.05)] placeholder:text-[rgba(28,28,28,0.5)] focus-visible:border-[rgba(0,0,0,0.1)] focus-visible:ring-0 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-24 w-full rounded-[8px] border bg-white px-[16px] py-[12px] text-[15px] leading-[24px] transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
