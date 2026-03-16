'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import merchData from '@/data/merch.json';
import { MerchItem } from '@/lib/types';

export default function MerchPage() {
  const merch = merchData as MerchItem[];

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
                <ShoppingBag className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Merch</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Show your Knightvision pride with exclusive merchandise and custom 3D printed items
            </p>
          </motion.div>
        </div>
      </section>

      {/* Merch Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merch.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-800"
              >
                <div className="relative aspect-square bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300">
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors" />
                  {item.available && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                        <Check className="w-3 h-3" />
                        Available
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-gold text-xs rounded-full font-medium border border-gold/50">
                      {item.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                    {item.price && (
                      <span className="text-2xl font-bold text-gold">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in our merchandise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to place an order or learn more about our products
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
