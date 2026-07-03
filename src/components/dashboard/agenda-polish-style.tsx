export function AgendaPolishStyle() {
  return (
    <style>{`
      .bg-secondary main .grid.grid-cols-7 button {
        min-height: 7rem;
        border-radius: 1.25rem;
        border-color: hsl(var(--border) / 0.72);
        background: hsl(var(--card));
      }

      .bg-secondary main .grid.grid-cols-7 button:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 32px rgba(16, 40, 66, 0.10);
      }

      .bg-secondary main .grid.grid-cols-7 button .truncate {
        border-radius: 0.85rem;
        border: 1px solid hsl(var(--border) / 0.45);
        background: hsl(var(--background) / 0.88);
        font-weight: 700;
      }

      .bg-secondary main .grid.grid-cols-7 button span {
        font-weight: 800;
      }

      .bg-secondary main .hidden.border-b {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        background: hsl(var(--primary) / 0.07);
        color: hsl(var(--primary));
        letter-spacing: 0.08em;
      }

      .bg-secondary main .rounded-lg.border.border-dashed {
        border-style: solid;
        border-radius: 2rem;
        background: hsl(var(--muted) / 0.34);
      }

      .bg-secondary main .rounded-lg.border.bg-card.shadow-sm,
      .bg-secondary main .grid.gap-4.border-b,
      .bg-secondary main .space-y-3 > div {
        transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
      }

      .bg-secondary main .rounded-lg.border.bg-card.shadow-sm:hover,
      .bg-secondary main .grid.gap-4.border-b:hover {
        transform: translateY(-2px);
        border-color: hsl(var(--primary) / 0.28);
        box-shadow: 0 18px 44px rgba(16, 40, 66, 0.12);
      }

      .bg-secondary main .grid.gap-4.border-b:hover {
        background: hsl(var(--muted) / 0.34);
      }

      .bg-secondary main .grid.gap-4.sm\\:grid-cols-2 > div,
      .bg-secondary main .grid.gap-4.xl\\:grid-cols-5 > div {
        border-radius: 2rem;
        background: hsl(var(--card));
        box-shadow: 0 18px 52px rgba(16, 40, 66, 0.08);
      }

      @media (max-width: 767px) {
        .bg-secondary main .grid.grid-cols-7 button {
          min-height: 4.5rem;
          padding: 0.45rem;
        }
      }
    `}</style>
  )
}
