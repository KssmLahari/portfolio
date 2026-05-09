'use client';

import Image from 'next/image';
import { MotionDiv } from '@/components/MotionDiv';
import { TiltMedia } from '@/components/TiltMedia';
import { PROFILE_HERO_IMAGE } from '@/lib/site';

export default function HeroProfileBubble() {
  const src = PROFILE_HERO_IMAGE;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      <div className="profile-bubble-frame relative mx-auto h-40 w-40 shrink-0 sm:h-44 sm:w-44 md:h-52 md:w-52">
        <div className="profile-bubble-ambient" aria-hidden />
        <TiltMedia
          maxTilt={6}
          className="relative z-[1] mx-auto h-full w-full bg-transparent"
          innerClassName="h-full w-full overflow-hidden rounded-full bg-transparent [transform-style:preserve-3d]"
        >
          <div className="profile-bubble relative aspect-square h-full w-full">
            <div className="profile-bubble-underlay absolute inset-0 z-0 overflow-hidden rounded-full" aria-hidden>
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 208px, 176px"
                className="profile-bubble-underlay-img object-cover"
                unoptimized
                aria-hidden
              />
            </div>
            <div className="profile-bubble-main-photo absolute inset-0 z-[1] h-full w-full overflow-hidden rounded-full">
              <Image
                src={src}
                alt="Lahari Karrotu"
                fill
                sizes="(min-width: 768px) 208px, 176px"
                className="profile-bubble-main-img rounded-full object-cover object-center"
                priority
                unoptimized
              />
            </div>
            <div className="profile-bubble-edge-tint pointer-events-none absolute inset-0 z-[2] rounded-full" aria-hidden />
            <div className="profile-bubble-shine pointer-events-none absolute inset-0 z-[3] rounded-full opacity-90" aria-hidden />
            <div className="profile-bubble-rim pointer-events-none absolute inset-0 z-[4]" aria-hidden />
          </div>
        </TiltMedia>
      </div>
    </MotionDiv>
  );
}
