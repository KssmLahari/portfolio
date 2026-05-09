'use client';

import { useRef, useState, type ReactNode } from 'react';

type TiltMediaProps = {
  children: ReactNode;
  className?: string;
  /** Applied to the transformed inner box (e.g. `rounded-full overflow-hidden` for circular media). */
  innerClassName?: string;
  maxTilt?: number;
};

/** Gentle 3D tilt toward cursor; disabled when user prefers reduced motion. */
export function TiltMedia({ children, className = '', innerClassName = '', maxTilt = 10 }: TiltMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rotateY = px * 2 * maxTilt;
    const rotateX = -py * 2 * maxTilt;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
  };

  const onLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  };

  return (
    <div className={`tilt-media-perspective ${className}`.trim()} style={{ perspective: '1100px' }}>
      <div
        ref={ref}
        className={`tilt-media-inner will-change-transform ${innerClassName}`.trim()}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          transform,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}
