import { useEffect, useRef, useState } from "preact/hooks";
import { getData, type DataLang } from "../i18n/data";

interface HeroProps {
  lang: DataLang;
}

export function Hero({ lang }: HeroProps) {
  const data = getData(lang);
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0.5, y: 0.5 });
  const [time, setTime] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setP({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    el.addEventListener("mousemove", onMove);
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString(lang === "pt" ? "pt-BR" : "en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/Sao_Paulo",
        }),
      );
    };
    updateTime();
    const id = setInterval(updateTime, 60_000);
    return () => {
      el.removeEventListener("mousemove", onMove);
      clearInterval(id);
    };
  }, [lang]);

  return (
    <div
      ref={ref}
      id="top"
      className="relative overflow-hidden flex flex-col justify-between py-20 md:py-10 min-h-[88vh] md:min-h-0"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 transition-opacity"
        style={
          {
            backgroundImage:
              "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            WebkitMaskImage: `radial-gradient(circle at ${(p.x * 100).toFixed(1)}% ${(p.y * 100).toFixed(1)}%, black 0%, transparent 60%)`,
            maskImage: `radial-gradient(circle at ${(p.x * 100).toFixed(1)}% ${(p.y * 100).toFixed(1)}%, black 0%, transparent 60%)`,
          } as any
        }
      />
      <div className="relative z-[1] flex flex-wrap justify-between gap-2 md:gap-4 m-4 md:m-10">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 0 4px var(--accent-soft)" }}
            />
            <span className="mono">{data.available}</span>
          </div>
          <span className="mono">{data.location} · {time}</span>
        </div>
      </div>
      <h1
        className="serif relative z-[1] leading-[0.92] tracking-[-0.04em] m-0 pl-[0.03em]"
        style={{ fontSize: "clamp(80px, 16vw, 240px)" }}
      >
        <span className="anim-line block pl-[0.08em]">
          <span style={{ "--i": 0 } as any}>Jefferson</span>
        </span>
        <span className="anim-line block">
          <span style={{ "--i": 1 } as any}>
            {" "}
            Silva <em className="italic text-accent">Caires.</em>
          </span>
        </span>
      </h1>
      <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-end mt-14 pt-7 border-t border-rule">
        <div className="flex flex-col gap-1">
          <span className="mono">
            {lang === "pt" ? "Atualmente —" : "Currently —"}
          </span>
          <span className="serif text-2xl">{data.role}</span>
        </div>
        <p className="text-ink-2 max-w-[420px] m-0 text-[15px]">
          {data.tagline}
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-ink text-bg text-sm hover:bg-accent transition"
            href={`mailto:${data.contact.email}`}
            target="_blank"
            rel="noopener"
          >
            <span>{lang === "pt" ? "Entre em contato" : "Get in touch"}</span>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>
      </div>
    </div >
  );
}
