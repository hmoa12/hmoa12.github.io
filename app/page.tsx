export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020617] text-white relative overflow-hidden selection:bg-teal-500/30">
      <div className="relative flex flex-col items-start justify-center group cursor-default">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-600 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:from-white group-hover:to-neutral-300 group-hover:tracking-widest">
          Reimagening...
        </h1>
        <p className="text-xs text-neutral-500 font-mono tracking-widest mt-2 ml-2 transition-colors duration-500 group-hover:text-neutral-400">
          Under maintenance.
        </p>
      </div>
    </main>
  );
}
