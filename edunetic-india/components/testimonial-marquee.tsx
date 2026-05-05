'use client';

import { motion } from 'motion/react';

const testimonialsRow1 = [
  { name: 'Utkarsh', text: 'The 7-Day Fix-a-thon completely shifted my mindset on industry productivity.' },
  { name: 'Aditya', text: 'Elite Alpha Squad is a must-join for anyone serious about real-world skills.' },
  { name: 'Ritik', text: 'Never thought 7 days could bridge years of academic gaps. Truly transformative.' },
  { name: 'Het', text: 'The mentor guidance during the Fix-a-thon was unparalleled. 10/10.' },
];

const testimonialsRow2 = [
  { name: 'Nayan', text: 'Being part of the Alpha Squad gave me the confidence to lead industry projects.' },
  { name: 'Mahid', text: 'Edunetic India is fixing exactly what is wrong with our current education.' },
  { name: 'Rohan', text: 'The fast-paced 7-day challenge was the highlight of my semester.' },
  { name: 'Hardik', text: 'Practical, meaningful, and intense. Elite Alpha Squad is the real deal.' },
];

export function TestimonialMarquee() {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-extrabold text-[#0B1B3D]">Testimonials</h2>
      </div>

      <div className="space-y-8">
        {/* Row 1: Left to Right */}
        <div className="flex">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...testimonialsRow1, ...testimonialsRow1].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="inline-block bg-white p-8 rounded-3xl border border-[#0B1B3D]/5 shadow-sm min-w-[350px]"
              >
                <div className="text-[#6A2CB0] font-bold mb-2">@{t.name}</div>
                <p className="text-[#0F172A]/70 text-sm italic whitespace-normal">&quot;{t.text}&quot;</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...testimonialsRow2, ...testimonialsRow2].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="inline-block bg-white p-8 rounded-3xl border border-[#0B1B3D]/5 shadow-sm min-w-[350px]"
              >
                <div className="text-[#6A2CB0] font-bold mb-2">@{t.name}</div>
                <p className="text-[#0F172A]/70 text-sm italic whitespace-normal">&quot;{t.text}&quot;</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
