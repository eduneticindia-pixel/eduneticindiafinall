'use client';

import { motion } from 'motion/react';
import { IndianRupee, Users, TrendingUp, Network } from 'lucide-react';

const usps = [
  {
    icon: <IndianRupee size={32} className="text-[#6A2CB0]" />,
    title: 'Affordable Pricing',
    description: 'High-quality skill education that doesn’t break the bank. Made for every Indian student.'
  },
  {
    icon: <Users size={32} className="text-[#6A2CB0]" />,
    title: 'Top Mentors',
    description: 'Learn from industry experts across India who have been where you want to be.'
  },
  {
    icon: <TrendingUp size={32} className="text-[#6A2CB0]" />,
    title: '100% India Centric',
    description: 'Curriculum designed specifically for the Indian market and academic ecosystem.'
  },
  {
    icon: <Network size={32} className="text-[#6A2CB0]" />,
    title: 'Integrated Network',
    description: 'Strong connection with top-tier universities and companies for better opportunities.'
  }
];

export function USPGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#6A2CB0]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3D]">{usp.title}</h3>
              <p className="text-sm text-[#0F172A]/60 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
