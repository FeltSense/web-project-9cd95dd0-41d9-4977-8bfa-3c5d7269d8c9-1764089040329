'use client';

import { useState } from 'react';
import { Dumbbell, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '9cd95dd0-41d9-4977-8bfa-3c5d7269d8c9',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl mb-6 shadow-lg">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Start Your Transformation
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to unleash your potential? Get in touch and let's build your strongest self together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location Card */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Visit Us
                  </h3>
                  <p className="text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    123 Strength Avenue<br />
                    Fitness District, FC 45678
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Call Us
                  </h3>
                  <p className="text-slate-300 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    (555) 123-4567
                  </p>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Mon-Fri 6am - 10pm
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Email Us
                  </h3>
                  <p className="text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    info@fitforcegym.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 p-8 shadow-2xl">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Gym Hours
                  </h3>
                  <div className="space-y-1 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p className="text-sm">Monday - Friday: 5am - 11pm</p>
                    <p className="text-sm">Saturday - Sunday: 7am - 9pm</p>
                    <p className="text-xs text-white/70 mt-2">24/7 access for premium members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white shadow-2xl border border-slate-100 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Get Your Free Consultation
              </h3>
              <p className="text-slate-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Fill out the form below and our team will reach out within 24 hours to discuss your fitness goals.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-4 px-5 text-slate-900 transition-all duration-300"
                    placeholder="John Doe"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-4 px-5 text-slate-900 transition-all duration-300"
                    placeholder="john@example.com"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-4 px-5 text-slate-900 transition-all duration-300"
                    placeholder="(555) 123-4567"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Tell Us About Your Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-4 px-5 text-slate-900 transition-all duration-300 resize-none"
                    placeholder="I'm interested in building muscle, losing weight, improving my strength..."
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Start Your Journey</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
                    <p className="text-green-800 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Thanks for reaching out! We'll contact you within 24 hours.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center">
                    <p className="text-red-800 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Prefer to visit in person? Drop by anytime during our open hours for a free gym tour!
          </p>
        </div>
      </div>
    </section>
  );
}
