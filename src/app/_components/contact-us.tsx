"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please provide a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Send using configured EmailJS credentials
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: personalInfo.name,
          },
          publicKey
        );
      } else {
        // Mock delay for preview when env is not configured yet
        await new Promise((res) => setTimeout(res, 1200));
      }

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF7639", "#8B5CF6", "#38BDF8", "#22C55E"],
      });

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "bottom-right",
        theme: "dark",
      });

      reset();
    } catch (error) {
      console.error("EmailJS submission error:", error);
      toast.error("Failed to send message. Please reach out directly via email.", {
        position: "bottom-right",
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="site-section bg-[#070b16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF7639]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#FF7639] font-bold">
            Let's Collaborate
          </span>
          <h2 className="site-heading mt-2">Get In Touch</h2>
          <div className="site-heading-divider" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto -mt-4 mb-14">
            Have a project in mind, an engineering role to discuss, or just want to say hi? Send me a message and let's build something remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF7639]" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF7639]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF7639]/15 text-[#FF7639] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Direct Email</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#FF7639] transition-colors break-all">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Item */}
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">WhatsApp / Call</div>
                    <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Location</div>
                    <div className="text-sm font-medium text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-[#090D16] border border-emerald-500/20 flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Usually responds within 2-4 hours. Available for global timezones (UTC+0 to UTC+8).
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below. All fields are required.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF7639] transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF7639] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF7639] transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project goals, scope, and timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF7639] transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#FF7639] to-[#8B5CF6] shadow-lg shadow-[#FF7639]/25 hover:shadow-xl hover:shadow-[#FF7639]/40 disabled:opacity-50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
