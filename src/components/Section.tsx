import { PropsWithChildren } from "react";
import { cn, wrap } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
}>;

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn(wrap, "scroll-mt-24", className)}>
      {title && (
        <div className="reveal mb-10 flex max-w-[600px] flex-col gap-2.5">
          <h2 className="m-0 text-[40px] leading-[1.1] font-bold tracking-[-0.035em] max-nav:text-[32px]">{title}</h2>
          {subtitle && <p className="m-0 text-[17px] leading-[1.6] text-muted">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
