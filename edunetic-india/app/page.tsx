import { Hero } from '@/components/hero';
import { USPGrid } from '@/components/usp-grid';
import { SkillForge } from '@/components/skill-forge';
import { InstitutionalWing } from '@/components/institutional-wing';
import { DataBoard } from '@/components/data-board';
import { TestimonialMarquee } from '@/components/testimonial-marquee';
import { EducationQuote } from '@/components/education-quote';

export default function Home() {
  return (
    <>
      <Hero />
      <DataBoard />
      <USPGrid />
      <SkillForge />
      <TestimonialMarquee />
      <EducationQuote />
    </>
  );
}
