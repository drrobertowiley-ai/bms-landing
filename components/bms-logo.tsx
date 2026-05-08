interface BmsLogoProps {
  variant?: "light" | "dark";
  className?: string;
  withTagline?: boolean;
  compact?: boolean;
}

/**
 * BMS — Business Management System (inline SVG).
 *
 * API compatible con la migracion desde el logo legacy:
 * - variant="dark"  → wordmark slate-900 + acento azul (para fondos claros)
 * - variant="light" → wordmark blanco + linea acento azul-400 (para fondos oscuros)
 * - withTagline    → muestra "BUSINESS MANAGEMENT SYSTEM" debajo de "BMS"
 * - compact        → solo el icono cuadrado con la B y el punto KPI
 *
 * Brand tokens (BRAND.md):
 *   gradiente icono = #1E3A8A → #2563EB
 *   wordmark color  = #0F172A (slate-900) en claro / #FFFFFF en oscuro
 *   accent dot      = #60A5FA (blue-400)
 */
export function BmsLogo({
  variant = "dark",
  className = "",
  withTagline = true,
  compact = false,
}: BmsLogoProps) {
  const isDark = variant === "light"; // sobre fondo oscuro
  const wordmarkColor = isDark ? "#FFFFFF" : "#0F172A";
  const taglineColor = isDark ? "rgba(255,255,255,0.7)" : "#475569";
  const accentLine = isDark ? "#3B82F6" : "#2563EB";
  // En light variant (fondo oscuro), el icono sigue siendo el cuadrado con
  // gradiente azul, porque tiene contraste suficiente sobre navy. Sobre fondos
  // muy oscuros recomendamos usar la variante invertida (icon blanco con B
  // azul). Aqui mantenemos consistencia visual.

  // === Compact: solo el icono ===
  if (compact) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        role="img"
        aria-label="BMS"
        className={className}
      >
        <title>BMS</title>
        <defs>
          <linearGradient id="bmsCompactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#bmsCompactGrad)" />
        <rect x="30" y="26" width="12" height="68" rx="2" fill="#FFFFFF" />
        <path d="M 42 26 L 70 26 Q 88 26 88 43 Q 88 58 70 58 L 42 58 Z" fill="#FFFFFF" />
        <path d="M 42 58 L 76 58 Q 96 58 96 76 Q 96 94 76 94 L 42 94 Z" fill="#FFFFFF" />
        <circle cx="92" cy="32" r="6.5" fill="#60A5FA" />
      </svg>
    );
  }

  // === Lockup horizontal (icono + wordmark) ===
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 160"
      role="img"
      aria-label="BMS — Business Management System"
      className={className}
    >
      <title>BMS — Business Management System</title>
      <defs>
        <linearGradient id="bmsLockupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <g transform="translate(20, 20)">
        <rect width="120" height="120" rx="26" fill="url(#bmsLockupGrad)" />
        <rect x="30" y="26" width="12" height="68" rx="2" fill="#FFFFFF" />
        <path d="M 42 26 L 70 26 Q 88 26 88 43 Q 88 58 70 58 L 42 58 Z" fill="#FFFFFF" />
        <path d="M 42 58 L 76 58 Q 96 58 96 76 Q 96 94 76 94 L 42 94 Z" fill="#FFFFFF" />
        <circle cx="92" cy="32" r="6.5" fill="#60A5FA" />
      </g>
      <text
        x="170"
        y="92"
        fontFamily='-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", system-ui, sans-serif'
        fontSize="84"
        fontWeight="800"
        fill={wordmarkColor}
        letterSpacing="-3"
      >
        BMS
      </text>
      <rect x="172" y="110" width="56" height="4" rx="2" fill={accentLine} />
      {withTagline && (
        <text
          x="172"
          y="144"
          fontFamily='-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", system-ui, sans-serif'
          fontSize="13"
          fontWeight="500"
          fill={taglineColor}
          letterSpacing="3"
        >
          BUSINESS MANAGEMENT SYSTEM
        </text>
      )}
    </svg>
  );
}
