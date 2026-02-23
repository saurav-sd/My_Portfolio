export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center">
        <span className="text-base font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent tracking-wide">
          SD
        </span>
      </div>

      <span className="text-lg font-semibold tracking-tight">
        Saurav Daware
      </span>
    </div>
  );
}