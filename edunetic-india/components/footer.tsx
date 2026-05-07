import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1B3D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-xl">
              <Image
                src="https://ik.imagekit.io/nwe8kioyz/edufull-removebg-preview.png"
                alt="Edunetic India Logo"
                width={220}
                height={60}
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              India&apos;s affordable, mentor-led platform for Gen-Z to bridge the gap between academic learning and industry demands.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/eduneticindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1B3D] transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/courses" className="text-white/60 hover:text-white transition-colors text-sm">Courses</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">
                Email: contact@eduneticindia.com
              </li>
              <li className="text-white/60 text-sm">
                WhatsApp: +91 6394 397 986
              </li>
              <li className="text-white/60 text-sm">
                Instagram: @eduneticindia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Edunetic India. All rights reserved.
          </p>
          <div className="flex gap-6 uppercase font-bold tracking-widest text-[10px] text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://www.instagram.com/eduneticindia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram @eduneticindia</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
