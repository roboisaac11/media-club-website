'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import videosData from '@/data/videos.json';
import { Video } from '@/lib/types';

export default function VideoDetailPage() {
  const params = useParams();
  const videoId = params.id as string;
  const videos = videosData as Video[];
  const video = videos.find(v => v.id === videoId);

  if (!video) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Video Not Found</h1>
          <Link href="/videos" className="text-gold hover:text-cyan-300 flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Videos
          </Link>
        </div>
      </div>
    );
  }

  const relatedVideos = videos
    .filter(v => v.id !== video.id && v.category === video.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-primary">
      <section className="bg-gradient-to-br from-black via-blue-950 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Videos
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-blue-900/50 text-gold text-sm rounded-full font-medium border border-gold/50 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {video.category}
                  </span>
                  <span className="px-4 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(video.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  {video.duration && (
                    <span className="px-4 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {video.duration}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {video.title}
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {video.description}
                </p>
              </motion.div>

              {relatedVideos.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Related Videos</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedVideos.map((related) => (
                      <Link
                        key={related.id}
                        href={`/videos/${related.id}`}
                        className="group flex gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors"
                      >
                        <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-gold font-bold text-xs">{related.duration}</span>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-medium group-hover:text-gold transition-colors truncate">
                            {related.title}
                          </h3>
                          <p className="text-gray-400 text-sm truncate">{related.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-24"
              >
                <h3 className="text-xl font-bold text-white mb-4">All Videos</h3>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  {videos.map((v) => (
                    <Link
                      key={v.id}
                      href={`/videos/${v.id}`}
                      className={`block p-3 rounded-xl transition-colors ${
                        v.id === video.id
                          ? 'bg-blue-900/50 border border-gold/50'
                          : 'bg-gray-800/50 hover:bg-gray-800'
                      }`}
                    >
                      <h4 className={`font-medium truncate ${v.id === video.id ? 'text-gold' : 'text-white'}`}>
                        {v.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
                        <span>{v.category}</span>
                        <span>•</span>
                        <span>{v.duration}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
