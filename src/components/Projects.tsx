import { useMemo, useState } from "preact/hooks";
import { getData, type DataLang } from "../i18n/data";
import { Reveal } from "./Reveal";

interface ProjectsProps {
  lang: DataLang;
}

type Project = ReturnType<typeof getData>["projects"][number];

function Row({ p, i }: { p: Project; i: number }) {
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setOpen(false);
    }
  };

  return (
    <article
      className={`border-t border-rule py-7 transition-all ${open ? "py-9" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-[40px_1fr_auto_40px] md:grid-cols-[50px_1.1fr_1fr_40px] gap-6 items-center">
        <div className="mono text-muted">{String(i + 1).padStart(2, "0")}</div>
        <div>
          <h3
            className={`serif text-[28px] md:text-[40px] leading-[1.1] m-0 tracking-[-0.02em] transition-colors ${open ? "text-accent" : ""}`}
          >
            {p.title}
          </h3>
          <div className="mono mt-1 text-muted">
            {p.tag} · {p.year}
          </div>
        </div>
        <div className="hidden md:flex flex-wrap gap-1.5 justify-self-start">
          {p.stack.slice(0, 5).map((s: string) => (
            <span key={s} className="chip-xs">
              {s}
            </span>
          ))}
          {p.stack.length > 5 && (
            <span className="chip-xs text-muted">+{p.stack.length - 5}</span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          aria-label={p.linkLabel}
          aria-expanded={open}
          className={`w-10 h-10 grid place-items-center border border-rule justify-self-end transition ${open ? "-rotate-45" : ""} hover:bg-ink hover:text-bg hover:border-ink`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M4 14L14 4M6 4h8v8"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
        </button>
      </div>
      <div
        className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[720px] text-base m-0 mb-4 pl-[64px] md:pl-[74px] text-ink-2">
            {p.summary}
          </p>
          <div className="flex flex-wrap justify-between gap-5 pl-[64px] md:pl-[74px] items-end">
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s: string) => (
                <span key={s} className="chip-xs">
                  {s}
                </span>
              ))}
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-sm border-b border-ink pb-0.5 hover:text-accent hover:border-accent"
              href={p.link}
              target="_blank"
              rel="noopener"
            >
              {p.linkLabel} →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects({ lang }: ProjectsProps) {
  const data = getData(lang);
  const [filter, setFilter] = useState<string>("all");
  const filters = [
    { id: "all", label: lang === "pt" ? "Todos" : "All" },
    { id: "product", label: lang === "pt" ? "Produtos" : "Products" },
    { id: "api", label: "APIs" },
    { id: "ai", label: lang === "pt" ? "IA Aplicada" : "Applied AI" },
  ];

  const list = useMemo(
    () =>
      filter === "all"
        ? data.projects
        : data.projects.filter((p) => p.kind === filter),
    [filter, data.projects],
  );

  return (
    <section id="work" className="py-24 md:py-14">
      <Reveal
        as="header"
        className="grid md:grid-cols-[1fr_2fr_1fr] gap-10 items-end mb-14"
      >
        <div className="flex flex-col gap-1">
          <span className="mono text-ink">01</span>
          <span className="mono">
            {lang === "pt"
              ? "Índice · Trabalhos selecionados"
              : "Index · Selected work"}
          </span>
        </div>
        <h2
          className="serif m-0 tracking-[-0.03em] leading-[1.02]"
          style={{ fontSize: "clamp(38px, 6vw, 72px)" }}
        >
          {lang === "pt" ? "Projetos." : "Projects."}
        </h2>
        <div className="flex-1 md:flex gap-1 justify-start md:justify-self-end">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`inline-flex items-center gap-1 md:gap-2 px-2 md:px-3.5 py-1.5 md:py-2 border text-xs md:text-sm ${filter === f.id ? "bg-ink text-bg border-ink" : "border-rule hover:border-ink"}`}
            >
              <span
                className="mono text-[10px] md:text-[12px]"
                style={{ color: filter === f.id ? "var(--bg)" : undefined }}
              >
                {f.label}
              </span>
              <span
                className="mono text-[10px] md:text-[12px]"
                style={{
                  color:
                    filter === f.id
                      ? "color-mix(in srgb, var(--bg) 70%, transparent)"
                      : "var(--muted)",
                }}
              >
                {f.id === "all"
                  ? data.projects.length
                  : data.projects.filter((p) => p.kind === f.id).length}
              </span>
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120} y={28}>
        <div>
          {list.map((p, i) => (
            <Row key={p.id} p={p} i={i} />
          ))}
        </div>
        <div className="mt-10 flex gap-4 items-baseline">
          <span className="mono">{lang === "pt" ? "Mais —" : "More —"}</span>
          <a
            href={data.contact.github}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 hover:text-accent hover:border-accent"
          >
            <span className="serif text-[28px] tracking-[-0.02em]">
              github.com/JeffSSC
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
