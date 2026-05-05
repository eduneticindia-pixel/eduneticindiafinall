'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Smartphone, Zap, Target, BookOpen } from 'lucide-react';

export function SkillForge() {
  return (
    <section id="skill-forge" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B3D]/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Accent blur */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6A2CB0]/20 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-[#0B1B3D]/10 text-xs font-bold text-[#6A2CB0]">
                <Smartphone size={14} />
                <span>UNIFIED LEARNING PLATFORM</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3D] leading-tight">
                Our Own <br />
                <span className="text-[#6A2CB0]">Learning App & Web</span>
              </h2>
              <p className="text-lg text-[#0F172A]/70 leading-relaxed">
                Experience the power of direct-to-student learning. Access our premium courses, track your progress, and join the community through our dedicated application and web portal.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-[#0B1B3D]/5">
                    <Zap size={20} className="text-[#6A2CB0]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1B3D]">Unified Sync</h4>
                    <p className="text-sm text-[#0F172A]/60">Switch seamlessly between mobile and web.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-[#0B1B3D]/5">
                    <Target size={20} className="text-[#6A2CB0]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1B3D]">Skill Tracking</h4>
                    <p className="text-sm text-[#0F172A]/60">Global ranking and performance metrics.</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/courses" 
                className="inline-block bg-white text-[#0B1B3D] px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md transition-all border border-[#0B1B3D]/10"
              >
                Explore Courses
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[2.5rem] shadow-2xl relative z-10 aspect-square flex flex-col justify-center items-center text-center">
                <div className="absolute -top-4 -right-4 bg-white p-3 px-4 rounded-2xl shadow-md border border-slate-100 hidden md:block">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Live Success</div>
                  <div className="text-xl font-extrabold text-green-600">100% Growth</div>
                </div>
                
                <div className="w-20 h-20 bg-purple-100 rounded-3xl mb-8 flex items-center justify-center text-[#6A2CB0] shadow-sm">
                  <Zap size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1B3D] mb-4">The Alpha Ecosystem</h3>
                <p className="text-slate-500 text-sm max-w-[200px] mb-8">Access mentors, courses, and community in one high-performance dashboard.</p>
                
                <div className="w-full h-32 bg-slate-100/50 rounded-2xl flex items-center justify-center border border-dashed border-slate-300">
                  <div className="text-slate-400 text-[10px] font-mono tracking-widest uppercase">[ Interactive Preview ]</div>
                </div>
              </div>
              
              {/* Outer floating circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#6A2CB0]/20 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
