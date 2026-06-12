export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="nc-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent)]" />
    </div>
  )
}
