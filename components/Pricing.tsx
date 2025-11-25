'use client';

import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Special Pre-Order Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join FitForce Gym as a founding member and lock in exclusive lifetime benefits
          </p>
        </div>

        {/* Centered Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl bg-white shadow-2xl border-2 border-orange-600 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                FOUNDING MEMBER
              </span>
            </div>

            {/* Plan Name */}
            <div className="text-center mt-4 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Pre-Order Access
              </h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  $29
                </span>
                <span className="text-slate-500 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                  one-time
                </span>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {[
                'Lifetime founding member status',
                'Priority access to all facilities',
                'Exclusive member-only events',
                'Personal training consultation',
                'Premium locker assignment',
                'VIP guest passes (5 per month)',
                'Early access to new equipment',
                'Special merchandise discount'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-orange-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-600 font-normal leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stripe Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pre-Order Now - $29
            </button>

            {/* Trust Badge */}
            <p className="text-center text-sm text-slate-500 mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              🔒 Secure payment powered by Stripe
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Limited to the first <span className="text-orange-600 font-semibold">500 members</span>. Lock in your founding member benefits before we reach capacity and prices increase.
          </p>
        </div>
      </div>
    </section>
  );
}
