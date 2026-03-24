'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-black via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Learn about our mission, values, and the passionate team behind Media Club
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/50 rounded-2xl mb-6 border-2 border-gold">
              <Target className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Knightvision Media Club is dedicated to empowering students to tell their stories through visual media. 
              We provide a creative platform for aspiring videographers, designers, and content creators 
              to develop their skills, collaborate on projects, and showcase their work to the school community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for the highest quality in every project, constantly pushing creative boundaries and refining our craft.'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We believe great work comes from teamwork, bringing together diverse perspectives and talents.'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'We are driven by genuine love for storytelling and visual media, inspiring others through our enthusiasm.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
              
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-900/50 rounded-xl mb-4 border-2 border-gold">
                  <value.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 bg-linear-to-br from-blue-950 via-slate-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Media Club</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you're an experienced creator or just starting out, there's a place for you in Media Club. 
              We welcome students with all skill levels and interests in video production, design, photography, 
              and more. Come be part of our creative community!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
