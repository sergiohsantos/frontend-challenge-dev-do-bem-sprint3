export function AgendaPolishStyle() {
  return (
    <style>{`
      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 {
        background: radial-gradient(circle at 0% 0%, rgba(91, 191, 186, 0.52), transparent 20rem), radial-gradient(circle at 92% 58%, rgba(245, 132, 31, 0.42), transparent 18rem), linear-gradient(135deg, #06385e 0%, #07385f 58%, #16384f 100%) !important;
        color: #ffffff !important;
        border-color: rgba(255, 255, 255, 0.14) !important;
        box-shadow: 0 30px 72px rgba(16, 40, 66, 0.20) !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 h1,
      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 p {
        color: #ffffff !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 p {
        opacity: 0.84 !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:first-child::before {
        color: hsl(var(--accent)) !important;
        background: rgba(255, 255, 255, 0.10) !important;
        border-color: rgba(255, 255, 255, 0.18) !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:last-child a {
        background: hsl(var(--accent)) !important;
        color: hsl(var(--accent-foreground)) !important;
        border-color: transparent !important;
      }

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

      .bg-secondary main .grid.gap-4.sm\:grid-cols-2 > div,
      .bg-secondary main .grid.gap-4.xl\:grid-cols-5 > div {
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
