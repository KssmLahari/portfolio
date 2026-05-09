'use client';

import { useCallback, useRef, type CSSProperties, type ReactNode } from 'react';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/** Mouse-follow radial highlight for cards (subtle cyan / violet in dark). */
export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number, clientY: number) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((clientX - r.left) / Math.max(r.width, 1)) * 100;
    const y = ((clientY - r.top) / Math.max(r.height, 1)) * 100;
    el.style.setProperty('--sx', `${x}%`);
    el.style.setProperty('--sy', `${y}%`);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    update(e.clientX, e.clientY);
  };

  const onLeave = () => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--sx', '50%');
    el.style.setProperty('--sy', '50%');
  };

  const style = {
    '--sx': '50%',
    '--sy': '50%',
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`spotlight-card-root ${className}`.trim()}
    >
      {children}
    </div>
  );
}
