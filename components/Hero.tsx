import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '50+', label: 'Expert Trainers' },
    { value: '24/7', label: 'Gym Access' },
    { value: '100+', label: 'Classes Weekly' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness training background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-orange-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-orange-300 font-semibold text-sm tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            TRANSFORM YOUR BODY & MIND
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Unleash Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
            Inner Strength
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className="text-xl md:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Join FitForce Gym and experience world-class training, cutting-edge equipment, 
          and a community that pushes you to achieve your fitness goals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl px-10 py-5 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Start Your Journey
          </Link>
          <Link
            href="#pricing"
            className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold rounded-xl px-10 py-5 transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View Pricing
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105"
            >
              <div 
                className="text-4xl md:text-5xl font-bold text-orange-400 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-slate-300 font-medium text-sm md:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}
