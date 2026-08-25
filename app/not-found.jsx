import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.35em] text-violet-300">404 · Page not found</p>
      <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">This route drifted out of orbit.</h1>
      <p className="mt-5 max-w-xl text-zinc-400">The page may have moved, but the portfolio is still right where it should be.</p>
      <Link href="/" className="mt-9 rounded-full border border-white/20 px-6 py-3 transition-colors hover:border-violet-300">
        Return home
      </Link>
    </main>
  );
}
