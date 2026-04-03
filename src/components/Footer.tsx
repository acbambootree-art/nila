export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/15 font-light tracking-wider">
        <span className="font-serif tracking-[0.2em] text-white/20">NILA</span>
        <p>&copy; {new Date().getFullYear()} NILA Spirits Pte. Ltd. Singapore.</p>
        <p>Drink responsibly.</p>
      </div>
    </footer>
  )
}
