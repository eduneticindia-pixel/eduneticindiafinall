'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';

// Waitlist Schema
const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  referralCode: z.string().optional(),
});

type WaitlistValues = z.infer<typeof waitlistSchema>;

// Contact Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register: regContact,
    handleSubmit: handleContact,
    formState: { errors: errorsContact, isSubmitting: isSubmittingContact },
    reset: resetContact,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onContactSubmit = async (data: ContactValues) => {
    setError(null);
    try {
      const { error: supabaseError } = await supabase
        .from('contact_form')
        .insert([
          {
            name: data.name,
            phone: data.phone,
            message: data.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      resetContact();
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-xl border border-[#0B1B3D]/5 inline-block"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1B3D] mb-4">Submission Received!</h2>
          <p className="text-[#0F172A]/60 mb-8 max-w-md mx-auto">
            Thank you for reaching out to Edunetic India. We have received your details and will get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-[#6A2CB0] font-bold hover:underline"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B1B3D] tracking-tight">
                Let&apos;s Forge Your <br />
                <span className="text-[#6A2CB0]">Future</span> <br />
                Together.
              </h1>
              <p className="text-lg text-[#0F172A]/70 leading-relaxed max-w-md">
                Whether you&apos;re a student looking to scale your skills or an institution aiming to upgrade your curriculum, we&apos;re here to help.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-[#6A2CB0]/5 flex items-center justify-center text-[#6A2CB0]">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]/40 uppercase tracking-widest">Email Us</div>
                  <div className="text-lg font-bold text-[#0B1B3D]">contact@eduneticindia.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]/40 uppercase tracking-widest">WhatsApp Us</div>
                  <div className="text-lg font-bold text-[#0B1B3D]">+91 6394 397 986</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#6A2CB0]/5 blur-[100px] -z-10 rounded-full" />
            
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-[#0B1B3D]/10 p-8 md:p-12 border border-[#0B1B3D]/5">
              <h2 className="text-2xl font-bold text-[#0B1B3D] mb-8">Contact Us</h2>

              <form onSubmit={handleContact(onContactSubmit)} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D]/60 uppercase tracking-wider mb-2">Name</label>
                  <input
                    {...regContact('name')}
                    className="w-full bg-gray-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#6A2CB0] transition-all outline-none"
                    placeholder="Your name"
                  />
                  {errorsContact.name && <p className="text-red-500 text-xs mt-1 font-medium">{errorsContact.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D]/60 uppercase tracking-wider mb-2">Mobile Number</label>
                  <input
                    {...regContact('phone')}
                    className="w-full bg-gray-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#6A2CB0] transition-all outline-none"
                    placeholder="10 digit number"
                  />
                  {errorsContact.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errorsContact.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D]/60 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    {...regContact('message')}
                    rows={4}
                    className="w-full bg-gray-100 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#6A2CB0] transition-all outline-none resize-none"
                    placeholder="How can we help?"
                  />
                  {errorsContact.message && <p className="text-red-500 text-xs mt-1 font-medium">{errorsContact.message.message}</p>}
                </div>
                <button
                  disabled={isSubmittingContact}
                  type="submit"
                  className="w-full bg-[#0B1B3D] text-white py-5 rounded-2xl font-bold shadow-xl shadow-[#0B1B3D]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                >
                  <span>{isSubmittingContact ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
