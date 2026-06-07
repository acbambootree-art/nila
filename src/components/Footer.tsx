export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-3 text-[11px] text-white/20 font-light tracking-wider text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <span className="font-serif tracking-[0.2em] text-white/25">NILA</span>
          <p>&copy; {new Date().getFullYear()} Tirama Pte Ltd. All rights reserved.</p>
          <p>Drink responsibly.</p>
        </div>
        <p className="text-white/15 mt-1 tracking-[0.05em]">
          Operated by Tirama Pte Ltd &middot; 5 Upper Aljunied Lane #01-34, Singapore 360005
        </p>
      </div>
    </footer>
  )
}
