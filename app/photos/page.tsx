'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import photosData from '@/data/photos.json';
import { Photo } from '@/lib/types';

export default function PhotosPage() {
  const photos = photosData as Photo[];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Camera className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Photos</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our photography showcasing school events, sports, and daily campus life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photos Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-800"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-900/50 text-gold text-sm rounded-full font-medium border border-gold/50">
                      {photo.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(photo.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
