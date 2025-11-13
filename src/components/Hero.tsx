'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { Link as ScrollLink } from 'react-scroll'
import { Calendar, MapPin } from 'lucide-react'

const Hero = () => {
  // Event date - November 14, 2025 at 10:00 AM (Fixed date - No ENV)
  const eventDate = '2025-11-14T10:00:00'
  console.log('Event Date:', eventDate)

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <motion.div 
          className="text-4xl md:text-6xl font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Event is Live! 🎉
          </span>
        </motion.div>
      )
    } else {
      return (
        <div className="flex gap-2 sm:gap-3 md:gap-6 justify-center flex-wrap">
          {[
            { value: days, label: 'Days', color: 'from-cyan-400 to-cyan-500' },
            { value: hours, label: 'Hours', color: 'from-yellow-400 to-yellow-500' },
            { value: minutes, label: 'Minutes', color: 'from-cyan-400 to-cyan-600' },
            { value: seconds, label: 'Seconds', color: 'from-yellow-400 to-yellow-600' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.15 + 0.5,
                type: "spring",
                stiffness: 200
              }}
              className="relative group"
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
              
              {/* Timer box */}
              <div className="relative flex flex-col items-center bg-gray-900 px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-2">
                {/* Number with animated gradient */}
                <motion.span 
                  className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-zaslia bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  suppressHydrationWarning
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                
                {/* Label */}
                <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-gray-400 font-semibold">
                  {item.label}
                </span>
                
                {/* Decorative dots */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-pink/10 to-neon-purple/10" />
      <div className="absolute inset-0 bg-neon-glow opacity-50" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Event Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-brillant mb-6 px-4 sm:px-6 tracking-normal sm:tracking-wide text-center break-words leading-tight sm:leading-tight md:leading-tight lg:leading-tight py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ overflow: 'visible' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent neon-text inline-block max-w-full" style={{ textShadow: '0 0 50px #22D3EE, 0 0 100px #3B82F6, 0 0 150px #A855F7', paddingTop: '0.1em', paddingBottom: '0.1em' }}>
              Navasparsh-2k25
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-space text-gray-200 mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join us for an <span className="text-cyan-400 font-bold">unforgettable</span> evening of{' '}
            <span className="text-yellow-400 font-bold">fun, music,</span> and{' '}
            <span className="text-cyan-400 font-bold">memories!</span>
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-2 sm:mt-0">✨ All CSE freshers are invited! 🎉</span>
          </motion.p>

          {/* Quick Info */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2 cyber-card px-4 sm:px-5 py-3 rounded-2xl border-2 border-cyan-500/50"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.5)' }}
            >
              <Calendar className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm md:text-base font-space font-semibold">November 14, 2025 | 10:00 AM</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 cyber-card px-4 sm:px-5 py-3 rounded-2xl border-2 border-yellow-500/50"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251,191,36,0.5)' }}
            >
              <MapPin className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm md:text-base font-space font-semibold">Auditorium</span>
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="mb-8 sm:mb-12 px-2 sm:px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-cyan-400"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(34, 211, 238, 0.6)',
                  '0 0 30px rgba(34, 211, 238, 0.8)',
                  '0 0 20px rgba(34, 211, 238, 0.6)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⏰ Event Starts In
            </motion.h2>
            <Countdown date={eventDate} renderer={renderer} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <ScrollLink
              to="details"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <motion.button 
                className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold font-space py-4 px-10 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-sm sm:text-base uppercase tracking-wider">View Details</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <motion.button 
                className="neon-border cyber-card text-white font-bold font-space py-4 px-10 rounded-xl border-2 border-yellow-500/50 hover:border-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base uppercase tracking-wider">Contact Us</span>
              </motion.button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating neon elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -20, 0],
          scale: [1, 1.3, 1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-36 h-36 bg-blue-500/30 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 25, 0],
          scale: [1, 1.25, 1] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}

export default Hero
