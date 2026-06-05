import { useEffect, useState } from "preact/hooks";
import { ACCENT_HUES, type Theme } from "../data/portfolio";
import type { DataLang } from "../i18n/data";

interface NavProps {
  lang: DataLang;
  isBlog?: boolean;
}

export function Nav({ lang: initialLang, isBlog = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<DataLang>(initialLang);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;

    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      setScrolled(window.scrollY > 24);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    const h = ACCENT_HUES.green;
    document.documentElement.style.setProperty("--accent", `oklch(${next === "dark" ? "0.75" : "0.58"} 0.14 ${h})`);
    document.documentElement.style.setProperty("--accent-soft", `oklch(${next === "dark" ? "0.75" : "0.58"} 0.14 ${h} / 0.10)`);
  };

  const switchLang = (newLang: DataLang) => {
    if (newLang === lang) return;
    const currentPath = window.location.pathname;

    if (newLang === "en") {
      const newPath = currentPath.replace(/^\/pt(\/|$)/, "/");
      window.location.href = newPath || "/";
    } else {
      const newPath = `/pt${currentPath === "/" ? "" : currentPath}`;
      window.location.href = newPath;
    }
  };

  const base = lang === "en" ? "" : "/pt";

  return (
    <nav className={`sticky top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-6 backdrop-blur-xl transition-all ${scrolled ? "border-b border-rule py-3.5 px-10" : "py-5 px-10"} md:px-5`}
      style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <div className="absolute left-0 right-0 -bottom-px h-px bg-accent origin-left transition-transform duration-150" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <a href={`${base}/`} className="flex items-center gap-3">
          <span className="serif grid place-items-center w-[34px] h-[34px] border border-ink text-xl leading-none">JSC</span>
          {!isBlog && <span className="serif text-lg hidden sm:inline">Jefferson Silva Caires</span>}
        </a>
      </div>

      {/* Middle - Empty */}
      <div className="hidden md:block"></div>

      {/* Right Side */}
      <div className="flex items-center gap-4 justify-self-end">
        {!isBlog && (
          <div className="flex gap-1.5 font-mono text-xs mr-2" aria-label="Language selection">
            <button
              className={lang === "en" ? "text-ink" : "text-muted"}
              onClick={() => switchLang("en")}
            >
              EN
            </button>
            <span className="text-muted" aria-hidden>/</span>
            <button
              className={lang === "pt" ? "text-ink" : "text-muted"}
              onClick={() => switchLang("pt")}
            >
              PT
            </button>
          </div>
        )}

        <button
          onClick={toggleTheme}
          className="p-2 border border-rule rounded-full hover:border-ink hover:bg-card transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>

        <a 
          href={isBlog ? (base || "/") : "/blog"} 
          className="mono text-xs border border-rule px-4 py-2 rounded-full hover:border-ink hover:bg-card transition"
        >
          {isBlog 
            ? (lang === "pt" ? "Portfólio" : "Portfolio") 
            : "Blog"
          }
        </a>
      </div>
    </nav>
  );
}
