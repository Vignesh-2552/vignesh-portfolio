import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 pt-12 pb-28 sm:px-6 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-zinc-600">
          © {year} {personal.name}
        </p>
        <p className="text-sm text-zinc-600">Built with Next.js, Tailwind CSS &amp; Motion</p>
      </div>
      <p
        aria-hidden
        className="pointer-events-none mt-8 bg-linear-to-b from-white/10 to-transparent bg-clip-text text-center text-[22vw] leading-none font-bold tracking-tighter text-transparent select-none"
      >
        VIGNESH
      </p>
    </footer>
  );
}
