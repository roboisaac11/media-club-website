'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Video, Design } from '@/lib/types';

interface FeaturedMediaProps {
  videos: Video[];
  designs: Design[];
}

export default function FeaturedMedia({ videos, designs }: FeaturedMediaProps) {
  const featuredVideos = videos.filter(v => v.featured).slice(0, 2);
  const featuredDesigns = designs.filter(d => d.featured).slice(0, 2);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Videos */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Featured Videos
              </motion.h2>
              <p className="text-xl text-gray-400">
                Watch our latest and greatest productions
              </p>
            </div>
            <Link
              href="/videos"
              className="hidden md:flex items-center text-gold hover:text-cyan-300 font-semibold group"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href="/videos">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-400 to-white-100 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-blue-600 ml-1" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-lg">
                        {video.duration}
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-300">{video.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Designs */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Featured Designs
              </motion.h2>
              <p className="text-xl text-gray-400">
                Explore our creative visual work
              </p>
            </div>
            <Link
              href="/designs"
              className="hidden md:flex items-center text-gold hover:text-cyan-300 font-semibold group"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href="/designs">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                      <ImageIcon className="w-16 h-16 text-white/70" />
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-900/50 text-cyan-400 text-sm rounded-full font-medium border border-cyan-500/30">
                          {design.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        {design.title}
                      </h3>
                      <p className="text-gray-300">{design.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
