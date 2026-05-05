import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
});

export function EducationQuote() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className={`${playfair.className} text-3xl md:text-5xl text-[#0B1B3D] font-light leading-relaxed`}>
          &quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot;
        </p>
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div className="w-12 h-px bg-[#0B1B3D]/20" />
          <span className="text-xs font-bold tracking-[0.5em] text-[#0B1B3D]/40 uppercase">Malcolm X</span>
          <div className="w-12 h-px bg-[#0B1B3D]/20" />
        </div>
      </div>
    </section>
  );
}
