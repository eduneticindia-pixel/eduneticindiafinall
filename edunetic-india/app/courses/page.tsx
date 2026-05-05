'use client';

import { motion } from 'motion/react';

export default function CoursesPage() {
  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <h1 className="text-5xl font-extrabold text-[#0B1B3D]">Our Courses</h1>
        
        {/* Macbook Mockup */}
        <div className="max-w-[800px] mx-auto perspective-[2000px]">
          <div className="bg-[#1a1a1a] p-4 rounded-[2rem] shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="bg-[#0B1B3D] aspect-[16/10] rounded-b-2xl flex flex-col items-center justify-center text-white space-y-6 relative overflow-hidden">
               {/* Live Animation Background Elements */}
               <motion.div 
                 animate={{ 
                   scale: [1, 1.2, 1],
                   opacity: [0.1, 0.2, 0.1] 
                 }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute inset-0 bg-[#6A2CB0] rounded-full blur-[120px]" 
               />
               
               <div className="relative z-10 flex flex-col items-center space-y-6">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-32 h-32 rounded-full border-2 border-dashed border-[#6A2CB0]/40 flex items-center justify-center"
                 >
                   <div className="w-24 h-24 rounded-full bg-[#6A2CB0]/20 flex items-center justify-center animate-pulse">
                      <div className="w-12 h-12 rounded-full bg-[#6A2CB0]" />
                   </div>
                 </motion.div>
                 <div className="space-y-2">
                   <motion.h2 
                     initial={{ scale: 0.9 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                     className="text-4xl md:text-5xl font-black tracking-widest uppercase"
                   >
                     Coming Soon
                   </motion.h2>
                   <p className="text-white/40 font-medium tracking-[0.3em] uppercase text-xs">The Alpha Academy is loading...</p>
                 </div>

                 {/* Floating animated dashboard bars */}
                 <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ 
                           height: [4, 12, 4],
                           opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                        className="w-1.5 bg-white rounded-full"
                      />
                    ))}
                 </div>
               </div>
            </div>
          </div>
          <div className="h-5 w-[105%] -ml-[2.5%] bg-[#222] rounded-b-3xl mx-auto shadow-xl" />
        </div>
        
        <p className="text-slate-500 max-w-xl mx-auto">
          We are currently hand-picking the best mentors and crafting the most relevant curriculum for the Indian Gen-Z. Stay tuned for a launch that will redefine your career trajectory.
        </p>
      </motion.div>
    </div>
  );
}
