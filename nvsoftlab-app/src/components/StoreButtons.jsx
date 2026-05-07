import { Apple, Play } from "lucide-react";

export function AppStoreButton({ href, onClick, label = "App Store", subLabel = "Download on the" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white rounded-xl px-5 py-3 transition-colors border border-white/10"
    >
      <Apple className="w-7 h-7" strokeWidth={1.5} />
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wide text-white/70">{subLabel}</div>
        <div className="text-base font-semibold">{label}</div>
      </div>
    </a>
  );
}

export function PlayStoreButton({ href, onClick, label = "Google Play", subLabel = "Get it on" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white rounded-xl px-5 py-3 transition-colors border border-white/10"
    >
      <Play className="w-6 h-6 fill-white" strokeWidth={1.5} />
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wide text-white/70">{subLabel}</div>
        <div className="text-base font-semibold">{label}</div>
      </div>
    </a>
  );
}
