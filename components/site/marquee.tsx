import { Sparkles } from "lucide-react";

const ITEMS = [
  "Zahnarztpraxen",
  "Dachdecker",
  "Fahrschulen",
  "Bäder und Sanitär",
  "Photovoltaik",
  "Barbershops",
  "Kosmetikstudios",
  "Restaurants",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-surface py-4">
      <div className="flex w-max animate-marquee-x">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="flex items-center gap-2 px-7 text-[13px] font-medium whitespace-nowrap text-muted"
              >
                <Sparkles className="size-3.5 text-brand" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
    </div>
  );
}
