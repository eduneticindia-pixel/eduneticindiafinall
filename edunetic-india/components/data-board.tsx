'use client';

import * as React from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function DataBoard() {
  return (
    <section className="py-24 bg-[#0B1B3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Impact So Far</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4B2C85] to-[#6A2CB0] mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-5xl font-extrabold text-[#6A2CB0]">
              <Counter value={40} suffix="+" />
            </div>
            <p className="text-white/60 font-medium tracking-wide uppercase text-xs">Students Taught</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl font-extrabold text-[#6A2CB0]">
              <Counter value={1} />
            </div>
            <p className="text-white/60 font-medium tracking-wide uppercase text-xs">Successful Session in University</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl font-extrabold text-[#6A2CB0]">
              100%
            </div>
            <p className="text-white/60 font-medium tracking-wide uppercase text-xs">India Centric</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4B2C85] to-[#6A2CB0]">
              <Counter value={1} suffix="M+" />
            </div>
            <p className="text-white/60 font-medium tracking-wide uppercase text-xs">Goal: Educate by 2030</p>
          </div>
        </div>
      </div>
    </section>
  );
}
