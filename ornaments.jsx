/* Decorative Moroccan-inspired SVG ornaments + a small line-icon set
   for travel info. All purely decorative geometry — no figurative drawing. */

function StarOrnament({ size = 18, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="0.8">
        <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14.5 L7 18 L9 12 L4 8 L10 8 Z" />
        <path d="M12 5 L13.2 9 L17 9 L14 11.5 L15.2 15 L12 12.8 L8.8 15 L10 11.5 L7 9 L10.8 9 Z" opacity="0.5" />
      </g>
    </svg>
  );
}

function HorizontalRule({ width = 240, color = 'currentColor', style = {} }) {
  return (
    <svg width={width} height="14" viewBox="0 0 240 14" style={style} aria-hidden="true">
      <line x1="0" y1="7" x2="105" y2="7" stroke={color} strokeWidth="0.6" />
      <line x1="135" y1="7" x2="240" y2="7" stroke={color} strokeWidth="0.6" />
      <g transform="translate(120 7)" fill="none" stroke={color} strokeWidth="0.6">
        <path d="M -8 0 L -4 -4 L 0 0 L 4 -4 L 8 0 L 4 4 L 0 0 L -4 4 Z" />
        <circle r="1.2" fill={color} />
      </g>
    </svg>
  );
}

function CornerOrnament({ size = 60, color = 'currentColor', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" style={style} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="0.5">
        <path d="M 0 30 Q 0 0 30 0" />
        <path d="M 4 30 Q 4 4 30 4" opacity="0.5" />
        <circle cx="6" cy="6" r="1.5" fill={color} stroke="none" />
      </g>
    </svg>
  );
}

/* Tiled zellige-inspired pattern as a backdrop */
function ZelligePattern({ color = '#C9A961', opacity = 0.08, style = {} }) {
  const tileId = `zellige-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity, ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={tileId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="0.5">
            <path d="M 30 5 L 35 15 L 45 15 L 38 23 L 41 33 L 30 27 L 19 33 L 22 23 L 15 15 L 25 15 Z" />
            <circle cx="30" cy="30" r="2" />
            <circle cx="0" cy="0" r="1.5" />
            <circle cx="60" cy="0" r="1.5" />
            <circle cx="0" cy="60" r="1.5" />
            <circle cx="60" cy="60" r="1.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${tileId})`} />
    </svg>
  );
}

/* Line icons for travel info */
const Icon = {
  Plane: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12 L22 6 L20 13 L9 14 L7 19 L5 19 L6 14 L2 13 Z" />
    </svg>
  ),
  Coin: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6 V 18 M 9 9 H 14 A 1.5 1.5 0 0 1 14 12 H 10 A 1.5 1.5 0 0 0 10 15 H 15" />
    </svg>
  ),
  Car: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14 L4 9 L7 7 L17 7 L20 9 L21 14 V 17 H 3 Z" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
      <path d="M3 14 H 21" />
    </svg>
  ),
  Wifi: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9 Q 12 1 21 9" />
      <path d="M6 12.5 Q 12 6.5 18 12.5" />
      <path d="M9 16 Q 12 13 15 16" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  ),
  Tea: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 9 H 17 V 15 A 4 4 0 0 1 13 19 H 9 A 4 4 0 0 1 5 15 Z" />
      <path d="M17 11 H 19 A 2 2 0 0 1 19 15 H 17" />
      <path d="M9 4 Q 8 6 9 7 M 12 4 Q 11 6 12 7 M 15 4 Q 14 6 15 7" />
    </svg>
  ),
  Sun: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2 V 4 M 12 20 V 22 M 2 12 H 4 M 20 12 H 22 M 4.5 4.5 L 6 6 M 18 18 L 19.5 19.5 M 4.5 19.5 L 6 18 M 18 6 L 19.5 4.5" />
    </svg>
  ),
  Pin: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22 C 6 15 4 12 4 9 A 8 8 0 0 1 20 9 C 20 12 18 15 12 22 Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  Calendar: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 9 H 21 M 8 3 V 7 M 16 3 V 7" />
    </svg>
  ),
  Clock: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V 12 L 15 14" />
    </svg>
  ),
  Sparkle: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 L 13 10 L 20 12 L 13 14 L 12 21 L 11 14 L 4 12 L 11 10 Z" />
    </svg>
  ),
  Arrow: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12 H 19 M 13 6 L 19 12 L 13 18" />
    </svg>
  ),
};

Object.assign(window, { StarOrnament, HorizontalRule, CornerOrnament, ZelligePattern, Icon });
