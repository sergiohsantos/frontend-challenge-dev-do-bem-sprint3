export function AgendaPolishStyle() {
  return (
    <style>{`
      .bg-secondary main > .container {
        width: min(100%, 1536px) !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        align-items: center !important;
        gap: 2rem !important;
        min-height: 20.75rem !important;
        padding: 2rem !important;
        border-radius: 2.5rem !important;
        background: radial-gradient(circle at 0% 0%, rgba(91, 191, 186, 0.52), transparent 20rem), radial-gradient(circle at 92% 58%, rgba(245, 132, 31, 0.42), transparent 18rem), linear-gradient(135deg, #06385e 0%, #07385f 58%, #16384f 100%) !important;
        color: #ffffff !important;
        border-color: rgba(255, 255, 255, 0.14) !important;
        box-shadow: 0 26px 64px rgba(16, 40, 66, 0.18) !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4::before {
        background: none !important;
        background-image: none !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:first-child {
        display: flex !important;
        max-width: 48rem !important;
        flex-wrap: wrap !important;
        align-items: center !important;
        position: relative !important;
        z-index: 2 !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 h1 {
        order: 2 !important;
        flex-basis: 100% !important;
        max-width: 44rem !important;
        margin-top: 1rem !important;
        color: #ffffff !important;
        font-size: clamp(2.35rem, 3.45vw, 3.55rem) !important;
        line-height: 1 !important;
        letter-spacing: -0.04em !important;
        font-weight: 900 !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 p {
        order: 3 !important;
        flex-basis: 100% !important;
        max-width: 42rem !important;
        margin-top: 1.2rem !important;
        color: #ffffff !important;
        opacity: 0.84 !important;
        line-height: 1.75 !important;
        font-size: 1rem !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:first-child::before {
        order: 0 !important;
        display: inline-flex !important;
        width: fit-content !important;
        height: 2.5rem !important;
        align-items: center !important;
        margin-right: 0.65rem !important;
        margin-bottom: 0 !important;
        padding: 0 0.75rem 0 0 !important;
        border-radius: 9999px !important;
        content: "←  Voltar ao painel" !important;
        color: rgba(255, 255, 255, 0.86) !important;
        background: transparent !important;
        border: 0 !important;
        font-size: 0.9rem !important;
        font-weight: 800 !important;
        letter-spacing: 0 !important;
        vertical-align: middle !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:first-child::after {
        order: 1 !important;
        display: inline-flex !important;
        width: fit-content !important;
        height: 2.5rem !important;
        align-items: center !important;
        margin-bottom: 0 !important;
        padding: 0 1rem !important;
        border-radius: 9999px !important;
        content: "AGENDA" !important;
        color: hsl(var(--accent)) !important;
        background: rgba(255, 255, 255, 0.10) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        font-size: 0.78rem !important;
        font-weight: 900 !important;
        letter-spacing: 0.18em !important;
        vertical-align: middle !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:last-child {
        position: relative !important;
        z-index: 2 !important;
        min-width: 13rem !important;
        display: flex !important;
        justify-content: flex-end !important;
        align-self: center !important;
      }

      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:last-child a,
      .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 > div:last-child button {
        display: inline-flex !important;
        height: 3.5rem !important;
        min-height: 3.5rem !important;
        align-items: center !important;
        justify-content: center !important;
        padding-inline: 1.5rem !important;
        background: hsl(var(--accent)) !important;
        color: hsl(var(--accent-foreground)) !important;
        border-color: transparent !important;
        border-radius: 9999px !important;
        font-weight: 900 !important;
        white-space: nowrap !important;
        box-shadow: 0 18px 44px rgba(245, 132, 31, 0.25) !important;
      }

      .bg-secondary main > .container > .mb-6 {
        border-radius: 2rem !important;
        background: hsl(var(--card)) !important;
        border: 1px solid hsl(var(--border) / 0.75) !important;
        box-shadow: 0 18px 52px rgba(16, 40, 66, 0.08) !important;
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
        .bg-secondary main > .container > .mb-8.flex.flex-col.gap-4 {
          display: flex !important;
          min-height: auto !important;
          padding: 1.5rem !important;
          border-radius: 2rem !important;
        }

        .bg-secondary main .grid.grid-cols-7 button {
          min-height: 4.5rem;
          padding: 0.45rem;
        }
      }
    `}</style>
  )
}
