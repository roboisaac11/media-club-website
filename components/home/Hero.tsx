'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-blue-950 to-slate-900 text-white overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Hero Image - Positioned behind content, down and to the right at an angle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-32 md:top-24 right-0 md:right-10 lg:right-20 w-[70%] md:w-[55%] lg:w-[50%] max-w-2xl aspect-video z-0"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-3 border-gold md:opacity-50">
          <Image
            src="/images/judah_closeup.jpg"
            alt="Media Club Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Logo - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex justify-center lg:justify-start z-10"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-600 via-cyan-500 to-slate-400 p-1 rounded-3xl shadow-2xl border-2 border-gold shadow-gold/30">
              <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
                {/* Replace this placeholder with your logo image */}
                {/* <div className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-gold to-cyan-400 bg-clip-text text-transparent">
                  MC
                </div> */}
                <Image
                  src="/images/logo.png"
                  alt="Media Club Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section - Center/Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-9 z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30"
            >
              🎬 Creating Stories, Inspiring Change
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gray-100">
              Knightvision
              <br />
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Media Club
            </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
              Where creativity meets innovation. Explore our award-winning videos, stunning designs, and exclusive merchandise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/videos"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105 hover:shadow-2xl shadow-blue-500/50"
              >
                Watch Our Videos
                <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-slate-700/50 transition-all border-2 border-slate-600/50"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave 
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>
      */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          {/* The main wave shape */}
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--color-primary)"
          />
          
          {/* The gold "border" path */}
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75"
            stroke="var(--color-gold)" 
            strokeWidth="10"
            strokeLinecap="round"
            opacity={0.6}
            className="translate-y-2"
          />
        </svg>
      </div>
    </section>
  );
}
