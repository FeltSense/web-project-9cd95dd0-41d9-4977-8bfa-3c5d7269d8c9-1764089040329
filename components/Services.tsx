'use client';

import { Dumbbell, Users, Calendar, Trophy } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'State-of-the-art equipment and expert guidance to build muscle, increase power, and transform your physique.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy group sessions including HIIT, spin, yoga, and boxing led by certified trainers.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Calendar,
    title: 'Personal Training',
    description: 'One-on-one customized workout plans and nutrition coaching tailored to your specific goals.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Trophy,
    title: 'Performance Programs',
    description: 'Elite training programs for athletes and competitors focused on peak performance and results.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Transform Your Fitness Journey
          </h2>
          <p className="text-lg leading-relaxed text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            FitForce Gym offers comprehensive training solutions designed to push your limits and achieve extraordinary results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Icon */}
                <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}`}>
                  <Icon className={`w-8 h-8 ${service.color} transition-all duration-500`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
