'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Camera, ArrowRight } from 'lucide-react';
import { Video, Photo } from '@/lib/types';

interface FeaturedMediaProps {
  videos: Video[];
  photos: Photo[];
}

export default function FeaturedMedia({ videos, photos }: FeaturedMediaProps) {
  const featuredVideos = videos.filter(v => v.featured).slice(0, 2);
  const featuredPhotos = photos.filter(p => p.featured).slice(0, 2);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link key={video.id} href={`/videos/${video.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg shadow-blue-500/10 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all border border-gray-800 group-hover:border-blue-500/50">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-end p-4">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-gold/25">
                        <Play className="w-8 h-8 text-black ml-1" />
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
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Featured Photos
              </motion.h2>
              <p className="text-xl text-gray-400">
                Explore our photography highlights
              </p>
            </div>
            <Link
              href="/photos"
              className="hidden md:flex items-center text-gold hover:text-cyan-300 font-semibold group"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href="/photos">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                      <Camera className="w-16 h-16 text-white/70" />
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-900/50 text-gold text-sm rounded-full font-medium border border-gold/50">
                          {photo.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-gray-300">{photo.description}</p>
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
