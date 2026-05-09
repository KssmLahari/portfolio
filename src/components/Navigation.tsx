'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from './MotionDiv';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/connect', label: 'Connect' },
];

const navEyebrowClass =
  'text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-400 sm:text-xs';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkIsActive = (href: string) =>
    href === '/' ? pathname === '/' || pathname === '' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 rounded-full border border-gray-200 bg-white/90 p-2 shadow-md backdrop-blur-sm transition-all hover:scale-110 dark:border-gray-700 dark:bg-gray-800/90 sm:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {/* Desktop: eyebrow + floating pill */}
      <nav
        className="fixed top-5 left-1/2 z-50 hidden w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 sm:block"
        aria-label="Main navigation"
      >
        <div className="flex flex-col items-center gap-1.5">
          <p className={navEyebrowClass}>Lahari Karrotu</p>
          <div className="rounded-full border border-gray-200 bg-white/90 p-2 shadow-md backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/90">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => {
              const active = linkIsActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-full px-3 py-2 text-sm font-medium transition-all md:px-4 ${
                      active
                        ? 'bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
            >
              <div
                className="absolute inset-0"
                onClick={() => setIsOpen(false)}
                role="button"
                tabIndex={0}
                aria-label="Close menu"
                onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
              />
            </MotionDiv>

            <MotionDiv
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 bottom-0 left-0 z-50 w-3/4 max-w-xs bg-white shadow-2xl dark:bg-gray-800 sm:hidden"
            >
              <div className="flex h-full flex-col overflow-y-auto pt-20">
                <div className="p-6">
                  <p className={`${navEyebrowClass} mb-2 text-left`}>Lahari Karrotu</p>
                  <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Menu</h2>
                  <ul className="space-y-1">
                    {menuItems.map((item) => {
                      const active = linkIsActive(item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                              active
                                ? 'bg-cyan-50 text-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-200'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                            aria-current={active ? 'page' : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
