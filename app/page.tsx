export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020617] text-white relative overflow-hidden selection:bg-teal-500/30">
      <div className="relative flex flex-col items-start justify-center group cursor-default">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-neutral-500 transition-all duration-1000 ease-out group-hover:text-white group-hover:scale-[1.05] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          Reimagening...
        </h1>
        <p className="text-xs text-neutral-600 font-mono tracking-widest mt-4 ml-2 transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:text-neutral-400">
          Under maintenance.
        </p>
      </div>
    </main>
  );
}
