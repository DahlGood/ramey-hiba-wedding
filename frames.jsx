/* Moroccan-themed photo frame system.
   Renders SVG clipPath defs once, exposes a <Frame> component
   that draws an image inside one of several arch/geometric shapes
   with a cream key-line and soft shadow. */

const FRAME_DEFS = (
  <svg
    aria-hidden="true"
    width="0"
    height="0"
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
  >
    <defs>
      {/* Keyhole / Moorish arch — pointed top, slight foot inset. viewBox 100x140 */}
      <clipPath id="frame-keyhole" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.08 1
          L 0.08 0.45
          C 0.08 0.20, 0.30 0.02, 0.50 0.02
          C 0.70 0.02, 0.92 0.20, 0.92 0.45
          L 0.92 1
          Z" />
      </clipPath>

      {/* Horseshoe arch — wider rounded top that curves inward at base of arch */}
      <clipPath id="frame-horseshoe" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.06 1
          L 0.06 0.50
          C 0.06 0.42, 0.10 0.36, 0.16 0.34
          C 0.10 0.28, 0.10 0.20, 0.16 0.14
          C 0.24 0.05, 0.38 0.02, 0.50 0.02
          C 0.62 0.02, 0.76 0.05, 0.84 0.14
          C 0.90 0.20, 0.90 0.28, 0.84 0.34
          C 0.90 0.36, 0.94 0.42, 0.94 0.50
          L 0.94 1
          Z" />
      </clipPath>

      {/* Ogee / multifoil arch — three lobes at top */}
      <clipPath id="frame-multifoil" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.05 1
          L 0.05 0.55
          C 0.05 0.42, 0.12 0.34, 0.22 0.34
          C 0.28 0.34, 0.32 0.32, 0.32 0.26
          C 0.32 0.14, 0.40 0.04, 0.50 0.04
          C 0.60 0.04, 0.68 0.14, 0.68 0.26
          C 0.68 0.32, 0.72 0.34, 0.78 0.34
          C 0.88 0.34, 0.95 0.42, 0.95 0.55
          L 0.95 1
          Z" />
      </clipPath>

      {/* Pointed lancet arch — tall and slender */}
      <clipPath id="frame-lancet" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.10 1
          L 0.10 0.50
          C 0.10 0.30, 0.30 0.02, 0.50 0.02
          C 0.70 0.02, 0.90 0.30, 0.90 0.50
          L 0.90 1
          Z" />
      </clipPath>

      {/* Eight-point star (Zellige khatim) */}
      <clipPath id="frame-star" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.50 0.02
          L 0.60 0.18
          L 0.78 0.10
          L 0.78 0.28
          L 0.95 0.36
          L 0.82 0.50
          L 0.95 0.64
          L 0.78 0.72
          L 0.78 0.90
          L 0.60 0.82
          L 0.50 0.98
          L 0.40 0.82
          L 0.22 0.90
          L 0.22 0.72
          L 0.05 0.64
          L 0.18 0.50
          L 0.05 0.36
          L 0.22 0.28
          L 0.22 0.10
          L 0.40 0.18
          Z" />
      </clipPath>

      {/* Soft rounded rectangle — gentle ornamental */}
      <clipPath id="frame-soft" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.04 0.50
          C 0.04 0.10, 0.12 0.02, 0.50 0.02
          C 0.88 0.02, 0.96 0.10, 0.96 0.50
          C 0.96 0.90, 0.88 0.98, 0.50 0.98
          C 0.12 0.98, 0.04 0.90, 0.04 0.50
          Z" />
      </clipPath>

      {/* Square — plain rectangle with subtle rounding */}
      <clipPath id="frame-square" clipPathUnits="objectBoundingBox">
        <rect x="0.02" y="0.02" width="0.96" height="0.96" rx="0.03" ry="0.03" />
      </clipPath>
    </defs>
  </svg>
);

// SVG paths used to draw the OUTLINE (key-line) around each frame.
// Same shape as the clipPath but rendered as stroke.
const FRAME_OUTLINE_PATHS = {
  keyhole:
    'M 8 100 L 8 45 C 8 20, 30 2, 50 2 C 70 2, 92 20, 92 45 L 92 100 Z',
  horseshoe:
    'M 6 100 L 6 50 C 6 42, 10 36, 16 34 C 10 28, 10 20, 16 14 C 24 5, 38 2, 50 2 C 62 2, 76 5, 84 14 C 90 20, 90 28, 84 34 C 90 36, 94 42, 94 50 L 94 100 Z',
  multifoil:
    'M 5 100 L 5 55 C 5 42, 12 34, 22 34 C 28 34, 32 32, 32 26 C 32 14, 40 4, 50 4 C 60 4, 68 14, 68 26 C 68 32, 72 34, 78 34 C 88 34, 95 42, 95 55 L 95 100 Z',
  lancet:
    'M 10 100 L 10 50 C 10 30, 30 2, 50 2 C 70 2, 90 30, 90 50 L 90 100 Z',
  star:
    'M 50 2 L 60 18 L 78 10 L 78 28 L 95 36 L 82 50 L 95 64 L 78 72 L 78 90 L 60 82 L 50 98 L 40 82 L 22 90 L 22 72 L 5 64 L 18 50 L 5 36 L 22 28 L 22 10 L 40 18 Z',
  soft:
    'M 4 50 C 4 10, 12 2, 50 2 C 88 2, 96 10, 96 50 C 96 90, 88 98, 50 98 C 12 98, 4 90, 4 50 Z',
  square:
    'M 5 5 L 95 5 L 95 95 L 5 95 Z',
};

const FRAME_VIEWBOX = { width: 100, height: 100 };

/**
 * <Frame variant="keyhole" src="..." alt="..." aspect={0.72} eager={false} />
 *
 * variant: keyhole | horseshoe | multifoil | lancet | star | soft
 * aspect:  width / height of the framed area (default 0.72 = arch portrait)
 * caption: optional small caption beneath the frame
 * tone:    'cream' | 'gold' | 'forest' — outline color
 */
function Frame({
  variant = 'keyhole',
  src,
  alt = '',
  caption,
  aspect = 0.72,
  tone = 'gold',
  className = '',
  style = {},
  eager = false,
  placeholder = null,
}) {
  const clipId = `frame-${variant}`;
  const outlinePath = FRAME_OUTLINE_PATHS[variant] || FRAME_OUTLINE_PATHS.keyhole;
  const outlineColor =
    tone === 'cream' ? 'rgba(242, 232, 208, 0.55)' :
    tone === 'forest' ? 'rgba(42, 58, 46, 0.5)' :
    'rgba(201, 169, 97, 0.85)';

  // Use 100x(100/aspect) viewBox for the outline to match the masked region
  const outlineHeight = 100 / aspect;

  return (
    <figure className={`mw-frame mw-frame--${variant} ${className}`} style={{ aspectRatio: aspect, ...style }}>
      <div className="mw-frame__shadow" aria-hidden="true" />
      <div className="mw-frame__clip" style={{ clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            className="mw-frame__img"
          />
        ) : (
          <div className="mw-frame__placeholder">
            {placeholder || <PlaceholderArt />}
          </div>
        )}
      </div>
      <svg
        className="mw-frame__outline"
        viewBox={`0 0 100 ${outlineHeight === Infinity ? 100 : 100}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={outlinePath} fill="none" stroke={outlineColor} strokeWidth="0.6" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.5 }} />
        {/* Inner gold hairline */}
        <path d={outlinePath} fill="none" stroke={outlineColor} strokeWidth="0.3" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 0.5, opacity: 0.6 }} transform="translate(2 2) scale(0.96 0.96)" />
      </svg>
      {caption && <figcaption className="mw-frame__caption">{caption}</figcaption>}
    </figure>
  );
}

/* Striped placeholder art used when no image is provided —
   honors the design-system rule of monospace placeholder + stripes. */
function PlaceholderArt({ label = 'photo' }) {
  return (
    <div className="mw-placeholder">
      <span className="mw-placeholder__label">[ {label} ]</span>
    </div>
  );
}

Object.assign(window, { FRAME_DEFS, Frame, PlaceholderArt });
