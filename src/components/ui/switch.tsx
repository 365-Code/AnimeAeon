"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    Icon?: { toggleOn: LucideIcon; toggleOff: LucideIcon };
  }
>(({ className, Icon, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        "relative",
      )}
    >
      {Icon && (
        <div className="absolute flex h-full w-full flex-col items-center justify-center">
          <Icon.toggleOn
            size={10}
            className={cn(
              "h-2 w-2",
              props.checked ? "absolute" : "opacity-0",
              "fill-primary stroke-primary",
            )}
          />
          <Icon.toggleOff
            size={10}
            className={cn(
              "h-2 w-2",
              props.checked ? "opacity-0" : "absolute",
              "fill-primary stroke-primary",
            )}
          />
        </div>
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
