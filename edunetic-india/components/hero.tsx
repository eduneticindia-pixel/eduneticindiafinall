'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[#6A2CB0]/5 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-[#4B2C85]/5 to-transparent blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="text-left max-w-2xl space-y-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.1]">
                Master the Skills <br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4B2C85, #6A2CB0)' }}>
                  That Matter Most.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#0F172A]/70 leading-relaxed"
            >
              India&apos;s affordable, mentor-led platform for Gen-Z to bridge the gap between academic learning and industry demands. Explore free and paid courses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link
                href="/courses"
                className="w-full sm:w-auto text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#4B2C85]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #4B2C85 0%, #6A2CB0 100%)' }}
              >
                Explore Courses <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - MacBook Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex-1 w-full max-w-[600px] perspective-[2000px]"
          >
            <div className="relative group">
              {/* Device Frame */}
              <div className="bg-[#1a1a1a] p-3 rounded-[1.5rem] shadow-[0_50px_100px_-20px_rgba(11,27,61,0.25)] border-[0.5px] border-white/20">
                {/* Screen Header / Toolbar */}
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" title="Close" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" title="Minimize" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" title="Maximize" />
                </div>
                
                {/* Screen Content */}
                <div className="bg-[#F8FAFC] aspect-[16/10] overflow-hidden rounded-b-[0.75rem] relative flex flex-col">
                  {/* Mock App Sidebar */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#0B1B3D] flex flex-col items-center py-6 gap-6">
                    <div className="w-8 h-8 rounded-lg bg-[#6A2CB0]/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-sm bg-[#6A2CB0]" />
                    </div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-1 rounded-full bg-white/10" />
                    ))}
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="ml-16 p-6 space-y-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-4 w-32 bg-[#0B1B3D]/10 rounded-full" />
                      <div className="w-8 h-8 rounded-full bg-[#0B1B3D]/5" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'UI Design 101', progress: '85%' },
                        { label: 'AI Prompting', progress: '42%' }
                      ].map((course) => (
                        <div key={course.label} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                          <div className="w-full aspect-video bg-indigo-50 rounded-lg flex items-center justify-center">
                             <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-[#6A2CB0]">▶</div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="text-[10px] font-bold text-[#0B1B3D]">{course.label}</div>
                            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#4B2C85] to-[#6A2CB0]" style={{ width: course.progress }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="h-3 w-20 bg-[#0B1B3D]/10 rounded-full" />
                      <div className="space-y-2">
                        {[1, 2].map(i => (
                          <div key={i} className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-6 h-6 rounded-lg bg-[#6A2CB0]/10" />
                            <div className="flex-1 h-2.5 bg-slate-100 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base (Minimalist shadow approach) */}
              <div className="h-4 w-[105%] -ml-[2.5%] bg-[#222] rounded-b-2xl mx-auto hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
