import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';

const ContactSection = () => {
  const { t } = useLocale();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const v: Record<string, string> = {};
    if (!formData.name.trim()) v.name = t.contact.validation.nameRequired;
    if (!formData.email.trim()) v.email = t.contact.validation.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) v.email = t.contact.validation.emailInvalid;
    if (!formData.subject.trim()) v.subject = t.contact.validation.subjectRequired;
    if (!formData.message.trim()) v.message = t.contact.validation.messageRequired;
    setErrors(v);
    return Object.keys(v).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) { setStatus('error'); return; }
    setIsSubmitting(true);
    try {
      const text = encodeURIComponent(`*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n${formData.message}`);
      window.open(`https://wa.me/6282162585692?text=${text}`, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-[#161616] border ${errors[field] ? 'border-red-500/60' : 'border-[#2a2a2a] hover:border-[#444] focus:border-gold'} rounded-lg px-4 py-3 text-white placeholder-[#444] focus:outline-none transition-colors text-sm`;

  return (
    <>
      <section id="contact" className="py-24 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="section-divider" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              {t.contact.title}{' '}
              <span className="text-gold">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-[#777] mt-3 max-w-lg">{t.contact.subtitle}</p>
          </motion.div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <h3 className="text-white font-bold text-xl mb-5">{t.contact.infoTitle}</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                        </svg>
                      ),
                      label: 'WhatsApp',
                      value: t.contact.whatsapp,
                      href: 'https://wa.me/6282162585692',
                    },
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      ),
                      label: 'Email',
                      value: t.contact.emailAddress,
                      href: `mailto:${t.contact.emailAddress}`,
                    },
                    {
                      icon: (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      ),
                      label: 'Location',
                      value: t.contact.location,
                      href: undefined,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[#555] text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#aaa] text-sm hover:text-gold transition-colors break-all">{item.value}</a>
                        ) : (
                          <p className="text-[#aaa] text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-[#555] text-xs font-semibold uppercase tracking-wider mb-3">{t.contact.followMe}</p>
                <div className="flex gap-2">
                  {[
                    { href: 'https://github.com/StevenJ0', label: 'GitHub', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                    { href: 'https://www.linkedin.com/in/steven-sihombing', label: 'LinkedIn', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                    { href: 'https://www.instagram.com/steven_shmbng/', label: 'Instagram', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#555] hover:text-gold hover:border-gold/40 transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8">
                <h3 className="text-white font-bold text-lg mb-6">{t.contact.formTitle}</h3>

                {status === 'success' && (
                  <div className="mb-5 bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span>{t.contact.successTitle} — {t.contact.successDesc}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#777] text-xs font-semibold uppercase tracking-wider mb-2">{t.contact.name}</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} className={inputClass('name')} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[#777] text-xs font-semibold uppercase tracking-wider mb-2">{t.contact.email}</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder} className={inputClass('email')} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#777] text-xs font-semibold uppercase tracking-wider mb-2">{t.contact.subject}</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={t.contact.subjectPlaceholder} className={inputClass('subject')} />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-[#777] text-xs font-semibold uppercase tracking-wider mb-2">{t.contact.message}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder={t.contact.messagePlaceholder} className={`${inputClass('message')} resize-none`} />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-gold w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>{t.contact.submitting}</>
                    ) : (
                      <>{t.contact.submit}<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1c1c1c] py-8 px-6 text-center">
        <p className="text-gold text-sm font-semibold mb-2 tracking-wide">&quot;{t.contact.footer}&quot;</p>
        <p className="text-[#444] text-xs">{t.contact.copyright}</p>
      </footer>
    </>
  );
};

export default ContactSection;