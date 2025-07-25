'use client'

export default function IconMarquee() {
  return (
    <div className="overflow-hidden w-full bg-purple-800 py-4">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {/* Substitua por seus ícones, SVGs ou imagens */}
        <span className="text-3xl">💻</span>
        <span className="text-3xl">⚙️</span>
        <span className="text-3xl">🌐</span>
        <span className="text-3xl">🚀</span>
        <span className="text-3xl">📱</span>
        <span className="text-3xl">🛠️</span>
        <span className="text-3xl">💻</span>
        <span className="text-3xl">⚙️</span>
        <span className="text-3xl">🌐</span>
        <span className="text-3xl">🚀</span>
      </div>
    </div>
  )
}
