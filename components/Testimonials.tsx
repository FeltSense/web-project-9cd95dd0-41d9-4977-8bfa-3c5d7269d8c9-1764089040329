'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      role: "Lost 45 lbs in 6 months",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "FitForce transformed my life. The trainers pushed me beyond my limits, and the community kept me accountable every single day.",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Marathon Finisher",
      image: "https://i.pravatar.cc/150?img=45",
      quote: "I never thought I could run a marathon. FitForce gave me the strength training and cardio program that made it possible. Best decision ever!",
      thumbnail: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80"
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Gained 20 lbs of muscle",
      image: "https://i.pravatar.cc/150?img=33",
      quote: "The personalized workout plans and nutrition guidance at FitForce are unmatched. I've never felt stronger or more confident in my life.",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Real Results, Real Stories
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            See how FitForce members transformed their lives through dedication and expert guidance
          </p>
        </div>

        {/* Video-Style Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-2xl bg-slate-800 shadow-lg border border-slate-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative h-64 overflow-hidden bg-slate-700">
                <Image
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center group-hover:bg-orange-700 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-slate-300 leading-relaxed mb-6 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-600">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-orange-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
