'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const founders = [
  {
    name: 'Ruthvik Mishra',
    role: 'Founder & CEO',
    image: 'https://ik.imagekit.io/nwe8kioyz/rm.webp?updatedAt=1775530663216',
    linkedin: 'https://www.linkedin.com/in/ruthvikmishra/'
  },
  {
    name: 'Vedant Tiwari',
    role: 'Co-founder & CTO',
    image: 'https://ik.imagekit.io/nwe8kioyz/vt.webp?updatedAt=1777653212269',
    linkedin: 'https://www.linkedin.com/in/programmervedant/'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-sm font-bold text-[#6A2CB0] tracking-widest uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl font-extrabold text-[#0B1B3D]">How it all began.</h3>
          </div>
          
          <div className="prose prose-lg prose-slate max-w-none text-[#0F172A]/70 space-y-8 leading-relaxed font-medium">
            <p>
              Edunetic India was born from a simple yet profound observation: the widening chasm between what our schools teach and what the world demands. In the hallways of universities and the boardrooms of modern industries, we saw a gap&mdash;not of intelligence, but of relevance.
            </p>
            <p>
              Our journey started with a mission to de-corporatize high-end skill training and make it accessible to every Indian student, regardless of their background. We believe that skills like Financial Literacy, AI Readiness, and Strategic Communication shouldn&apos;t be &quot;extras&quot;&mdash;they should be the core of every student&apos;s identity.
            </p>
            <p>
              By combining a mentor-led approach with an India-centric curriculum, we&apos;ve created a model that doesn&apos;t just teach&mdash;it transforms. From our first session in a university to building the Skill Forge platform, our focus has always been creating &quot;Alpha Skills&quot; for the Gen-Z of India.
            </p>
            <div className="p-8 bg-[#6A2CB0]/5 rounded-3xl border border-[#6A2CB0]/10">
              <p className="italic text-[#6A2CB0] m-0">
                &quot;We aren&apos;t just building an edtech company. We are building a movement to ensure that the next million Indian leaders are ready for the future, today.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-sm font-bold text-[#6A2CB0] tracking-widest uppercase mb-4">Our Vision</h1>
              <p className="text-3xl md:text-5xl font-extrabold text-[#0B1B3D] leading-tight">
                To teach every single student the critical skills that matter most for their future.
              </p>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-[#6A2CB0] tracking-widest uppercase mb-4">Our Mission</h2>
              <p className="text-xl md:text-2xl text-[#0F172A]/70 leading-relaxed italic">
                &quot;To educate and empower 1 million+ Indian students by 2030 with a clean skill mindset, alongside their academic journey.&quot;
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-video bg-[#0B1B3D]/5 rounded-[3rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B2C85]/20 to-[#6A2CB0]/20 mix-blend-overlay" />
              <div className="p-12 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl font-black text-[#0B1B3D]/10">ESTD 2025</div>
                  <p className="text-[#0B1B3D]/40 font-bold uppercase tracking-widest mt-4">The Skill Revolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#6A2CB0] tracking-widest uppercase mb-4">The Minds Behind</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1B3D]">Our Founders</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.name} className="space-y-4">
                <div className="aspect-[4/5] relative rounded-[1.5rem] overflow-hidden bg-gray-100">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-0.5">
                    <h4 className="text-xl font-bold text-[#0B1B3D]">{founder.name}</h4>
                    <p className="text-[#0F172A]/50 text-sm font-medium">{founder.role}</p>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#0B1B3D]/10 flex items-center justify-center text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
