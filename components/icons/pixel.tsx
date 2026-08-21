export function PixelTypewriter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 10"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {/* paper */}
      <rect x="4" y="0" width="6" height="4" fill="#1c1712" />
      <rect x="5" y="1" width="4" height="2" fill="#ffffff" />
      {/* carriage + knobs */}
      <rect x="3" y="4" width="8" height="1" fill="#1c1712" />
      <rect x="1" y="4" width="2" height="1" fill="#1c1712" />
      <rect x="11" y="4" width="2" height="1" fill="#1c1712" />
      {/* body */}
      <rect x="2" y="5" width="10" height="3" fill="#1c1712" />
      <rect x="5" y="5" width="4" height="1" fill="#2e5d8a" />
      {/* keys */}
      <rect x="3" y="6" width="1" height="1" fill="#f6f5f3" />
      <rect x="5" y="6" width="1" height="1" fill="#f6f5f3" />
      <rect x="7" y="6" width="1" height="1" fill="#f6f5f3" />
      <rect x="9" y="6" width="2" height="1" fill="#2e5d8a" />
      <rect x="3" y="7" width="2" height="1" fill="#f6f5f3" />
      <rect x="6" y="7" width="1" height="1" fill="#f6f5f3" />
      <rect x="8" y="7" width="1" height="1" fill="#f6f5f3" />
      <rect x="10" y="7" width="1" height="1" fill="#f6f5f3" />
      {/* base + feet */}
      <rect x="1" y="8" width="12" height="1" fill="#1c1712" />
      <rect x="2" y="9" width="1" height="1" fill="#1c1712" />
      <rect x="11" y="9" width="1" height="1" fill="#1c1712" />
    </svg>
  );
}

export function PixelDesktop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 11"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {/* monitor */}
      <rect x="2" y="0" width="10" height="8" fill="#1c1712" />
      {/* screen */}
      <rect x="3" y="1" width="8" height="6" fill="#ffffff" />
      {/* terminal cursor + lines */}
      <rect x="4" y="2" width="2" height="1" fill="#2e5d8a" />
      <rect x="4" y="4" width="5" height="1" fill="#7fa3c6" />
      <rect x="4" y="5" width="3" height="1" fill="#7fa3c6" opacity="0.55" />
      {/* stand + base */}
      <rect x="6" y="8" width="2" height="1" fill="#1c1712" />
      <rect x="4" y="9" width="6" height="1" fill="#1c1712" />
      {/* keyboard */}
      <rect x="3" y="10" width="8" height="1" fill="#1c1712" />
      <rect x="4" y="10" width="1" height="1" fill="#f6f5f3" />
      <rect x="6" y="10" width="1" height="1" fill="#f6f5f3" />
    </svg>
  );
}
