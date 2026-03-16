'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Newspaper } from 'lucide-react';
import newsData from '@/data/news.json';
import { NewsItem } from '@/lib/types';

export default function NewsPage() {
  const news = newsData as NewsItem[];

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
                <Newspaper className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay updated with our achievements, events, and announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-800"
              >
                {item.imageUrl && (
                  <div className="relative h-80 bg-gradient-to-br from-indigo-400 to-purple-400">
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-4 font-medium">
                    {item.excerpt}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
