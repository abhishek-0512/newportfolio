import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Linkedin, Github, FileText, Send, Copy, Check, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast, onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast("Message sent successfully! I will reply within 24 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-100/50 dark:bg-[#070a12]/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's build something together.
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            Currently looking for full-time Software Engineer, Full-Stack, Backend, and AI roles graduating in 2026. Have a question or opportunity? Feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <Card hoverEffect={false} className="p-8 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Direct Channels
                </h3>
                <p className="text-xs text-slate-500">
                  Prefer direct communication? Reach out on email or LinkedIn.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Email Address</span>
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white truncate block">
                      {personalInfo.socials.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 text-slate-800 dark:text-slate-200 text-xs font-medium transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-brand-500" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 text-slate-800 dark:text-slate-200 text-xs font-medium transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 text-slate-800 dark:text-slate-200 text-xs font-medium transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-amber-500" />
                    <span>Download Official Resume</span>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

            </Card>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-xs sm:text-sm text-slate-900 dark:text-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-xs sm:text-sm text-slate-900 dark:text-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-xs sm:text-sm text-slate-900 dark:text-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Alex, we were impressed by your multi-agent platform project and would love to chat about a software engineering role..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-xs sm:text-sm text-slate-900 dark:text-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold rounded-xl bg-brand-600 text-white dark:bg-brand-500 dark:text-slate-950 hover:bg-brand-500 dark:hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
