import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bratde-dark via-bratde-dark to-bratde-darker relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-bratde-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-bratde-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center items-center text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-bratde-accent mb-6 tracking-widest"
        >
          ◉ FUTURE TECHNOLOGY
        </motion.h2>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl font-black mb-6 text-white leading-tight"
        >
          BRATDE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-bratde-accent-light mb-12 font-bold"
        >
          THE FUTURE IS BRATDE
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 max-w-2xl mb-12"
        >
          Experience a premium digital ecosystem. Premium products, curated music, and a futuristic platform.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/store" className="btn-bratde px-8 py-4 text-lg">
            Explore Store
          </Link>
          <Link to="/music" className="btn-bratde-outline px-8 py-4 text-lg">
            Listen Music
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
