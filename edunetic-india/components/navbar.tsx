'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(248, 250, 252, 0)', 'rgba(248, 250, 252, 0.9)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ['rgba(11, 27, 61, 0)', 'rgba(11, 27, 61, 0.1)']
  );

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottomColor: borderOpacity,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://ik.imagekit.io/nwe8kioyz/edufull-removebg-preview.png"
              alt="Edunetic India Logo"
              width={350}
              height={100}
              className="h-20 w-auto object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#0B1B3D] hover:text-[#6A2CB0] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://app.eduneticindia.in/login.php"
              className="px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg shadow-[#4B2C85]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #4B2C85 0%, #6A2CB0 100%)' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0B1B3D] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#F8FAFC] border-b border-[#0B1B3D]/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-[#0B1B3D] hover:bg-[#0B1B3D]/5 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="https://www.app.eduneticindia.in/login.php"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg shadow-[#4B2C85]/10"
                style={{ background: 'linear-gradient(135deg, #4B2C85 0%, #6A2CB0 100%)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
