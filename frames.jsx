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
      {/* Moorish keyhole arch — circular arch above a narrow neck that widens to the jambs */}
      <clipPath id="frame-keyhole" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.08 1
          L 0.08 0.62
          L 0.26 0.58
          C 0.20 0.52, 0.17 0.44, 0.17 0.36
          C 0.17 0.17, 0.32 0.05, 0.50 0.05
          C 0.68 0.05, 0.83 0.17, 0.83 0.36
          C 0.83 0.44, 0.80 0.52, 0.74 0.58
          L 0.92 0.62
          L 0.92 1
          Z" />
      </clipPath>

      {/* Horseshoe arch — arch bulges outward past the jambs before returning, classic Moroccan */}
      <clipPath id="frame-horseshoe" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.10 1
          L 0.10 0.52
          C 0.04 0.46, 0.03 0.34, 0.07 0.26
          C 0.13 0.11, 0.30 0.04, 0.50 0.04
          C 0.70 0.04, 0.87 0.11, 0.93 0.26
          C 0.97 0.34, 0.96 0.46, 0.90 0.52
          L 0.90 1
          Z" />
      </clipPath>

      {/* Multifoil / trefoil arch — three distinct cusped lobes, Moroccan zellige style */}
      <clipPath id="frame-multifoil" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.06 1
          L 0.06 0.60
          C 0.06 0.52, 0.10 0.46, 0.18 0.44
          C 0.24 0.42, 0.28 0.46, 0.28 0.52
          C 0.30 0.46, 0.34 0.38, 0.40 0.32
          C 0.43 0.18, 0.46 0.07, 0.50 0.07
          C 0.54 0.07, 0.57 0.18, 0.60 0.32
          C 0.66 0.38, 0.70 0.46, 0.72 0.52
          C 0.72 0.46, 0.76 0.42, 0.82 0.44
          C 0.90 0.46, 0.94 0.52, 0.94 0.60
          L 0.94 1
          Z" />
      </clipPath>

      {/* Ogee / keel arch — S-curve rising to a sharp point, Moroccan muqarnas style */}
      <clipPath id="frame-lancet" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.10 1
          L 0.10 0.52
          C 0.10 0.40, 0.20 0.30, 0.30 0.26
          C 0.40 0.22, 0.44 0.14, 0.50 0.04
          C 0.56 0.14, 0.60 0.22, 0.70 0.26
          C 0.80 0.30, 0.90 0.40, 0.90 0.52
          L 0.90 1
          Z" />
      </clipPath>

      {/* Eight-point Zellige star (khatim) — Moroccan tilework geometry */}
      <clipPath id="frame-star" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.50 0.03
          L 0.58 0.20
          L 0.75 0.12
          L 0.74 0.30
          L 0.92 0.35
          L 0.80 0.50
          L 0.92 0.65
          L 0.74 0.70
          L 0.75 0.88
          L 0.58 0.80
          L 0.50 0.97
          L 0.42 0.80
          L 0.25 0.88
          L 0.26 0.70
          L 0.08 0.65
          L 0.20 0.50
          L 0.08 0.35
          L 0.26 0.30
          L 0.25 0.12
          L 0.42 0.20
          Z" />
      </clipPath>

      {/* Rounded arch — gentle Moroccan riad window shape */}
      <clipPath id="frame-soft" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.06 1
          L 0.06 0.46
          C 0.06 0.22, 0.24 0.04, 0.50 0.04
          C 0.76 0.04, 0.94 0.22, 0.94 0.46
          L 0.94 1
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
    'M 8 100 L 8 62 L 26 58 C 20 52, 17 44, 17 36 C 17 17, 32 5, 50 5 C 68 5, 83 17, 83 36 C 83 44, 80 52, 74 58 L 92 62 L 92 100 Z',
  horseshoe:
    'M 10 100 L 10 52 C 4 46, 3 34, 7 26 C 13 11, 30 4, 50 4 C 70 4, 87 11, 93 26 C 97 34, 96 46, 90 52 L 90 100 Z',
  multifoil:
    'M 6 100 L 6 60 C 6 52, 10 46, 18 44 C 24 42, 28 46, 28 52 C 30 46, 34 38, 40 32 C 43 18, 46 7, 50 7 C 54 7, 57 18, 60 32 C 66 38, 70 46, 72 52 C 72 46, 76 42, 82 44 C 90 46, 94 52, 94 60 L 94 100 Z',
  lancet:
    'M 10 100 L 10 52 C 10 40, 20 30, 30 26 C 40 22, 44 14, 50 4 C 56 14, 60 22, 70 26 C 80 30, 90 40, 90 52 L 90 100 Z',
  star:
    'M 50 3 L 58 20 L 75 12 L 74 30 L 92 35 L 80 50 L 92 65 L 74 70 L 75 88 L 58 80 L 50 97 L 42 80 L 25 88 L 26 70 L 8 65 L 20 50 L 8 35 L 26 30 L 25 12 L 42 20 Z',
  soft:
    'M 6 100 L 6 46 C 6 22, 24 4, 50 4 C 76 4, 94 22, 94 46 L 94 100 Z',
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
 *
 * horseshoe, keyhole, soft use CSS border-radius + conic tile border.
 * multifoil, lancet, star use SVG clipPath + SVG stroke outline.
 */

// Variants rendered with CSS border-radius instead of SVG clipPath
const CSS_ARCH_VARIANTS = new Set(['horseshoe', 'keyhole', 'soft']);

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
  const isCSSArch = CSS_ARCH_VARIANTS.has(variant);
  const clipId = `frame-${variant}`;
  const outlinePath = FRAME_OUTLINE_PATHS[variant] || FRAME_OUTLINE_PATHS.multifoil;
  const outlineColor =
    tone === 'cream' ? 'rgba(242, 232, 208, 0.55)' :
    tone === 'forest' ? 'rgba(42, 58, 46, 0.5)' :
    'rgba(201, 169, 97, 0.85)';

  return (
    <figure className={`mw-frame mw-frame--${variant} ${className}`} style={{ aspectRatio: aspect, ...style }}>
      {!isCSSArch && <div className="mw-frame__shadow" aria-hidden="true" />}
      <div
        className="mw-frame__clip"
        style={isCSSArch ? {} : { clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` }}
      >
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
      {isCSSArch ? (
        <div className="mw-frame__border" aria-hidden="true" />
      ) : (
        <svg
          className="mw-frame__outline"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={outlinePath} fill="none" stroke={outlineColor} strokeWidth="0.6" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.5 }} />
          <path d={outlinePath} fill="none" stroke={outlineColor} strokeWidth="0.3" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 0.5, opacity: 0.6 }} transform="translate(2 2) scale(0.96 0.96)" />
        </svg>
      )}
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
