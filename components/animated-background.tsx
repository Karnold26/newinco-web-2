export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Drifting sage / navy blobs — subtle and slow for a professional feel */}
      <div
        className="nc-blob"
        style={{
          top: '-10%',
          left: '-8%',
          width: '45vw',
          height: '45vw',
          background:
            'radial-gradient(circle at center, oklch(0.8 0.09 160 / 0.7), transparent 70%)',
          animation: 'nc-drift-a 26s ease-in-out infinite',
        }}
      />
      <div
        className="nc-blob"
        style={{
          top: '20%',
          right: '-12%',
          width: '40vw',
          height: '40vw',
          background:
            'radial-gradient(circle at center, oklch(0.58 0.1 165 / 0.4), transparent 70%)',
          animation: 'nc-drift-b 32s ease-in-out infinite',
        }}
      />
      <div
        className="nc-blob"
        style={{
          bottom: '-15%',
          left: '25%',
          width: '38vw',
          height: '38vw',
          background:
            'radial-gradient(circle at center, oklch(0.36 0.095 258 / 0.28), transparent 70%)',
          animation: 'nc-drift-c 38s ease-in-out infinite',
        }}
      />

      {/* Fine grid texture to keep it grounded and serious */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.34 0.055 252) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.34 0.055 252) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft vignette so content stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>
  )
}
