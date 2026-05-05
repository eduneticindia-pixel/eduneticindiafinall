'use client';

import { motion } from 'motion/react';
import { School, GraduationCap, CheckCircle2 } from 'lucide-react';

const solutions = [
  'CBSE-aligned skill modules',
  'Integrated student certification',
  'Teacher training & empowerment',
  'Future-ready curriculum mapping'
];

export function InstitutionalWing() {
  return (
    <section id="institutional" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-[#0B1B3D]/5 rounded-[2rem] flex flex-col items-center justify-center p-6 text-center space-y-4"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <School size={32} className="text-[#6A2CB0]" />
                </div>
                <div className="text-xl font-bold">Schools</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square bg-gradient-to-br from-[#4B2C85] to-[#6A2CB0] rounded-[2rem] flex flex-col items-center justify-center p-6 text-center space-y-4 text-white shadow-xl shadow-[#4B2C85]/20"
              >
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <GraduationCap size={32} />
                </div>
                <div className="text-xl font-bold">Colleges</div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-1 lg:order-2 space-y-8"
          >
            <span className="text-sm font-bold text-[#6A2CB0] tracking-widest uppercase">Institutional Wing</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3D]">
              Ready-to-integrate Skill Curriculum.
            </h2>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              We partner with educational institutions to enhance their existing curriculum with future-focused skill training. From secondary schools to universities, we provide seamless integration.
            </p>
            
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-center space-x-3 text-[#0B1B3D] font-medium">
                  <CheckCircle2 size={24} className="text-[#6A2CB0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="bg-[#0B1B3D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0B1B3D]/90 transition-all flex items-center space-x-2">
                <span>Partner with Us</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
