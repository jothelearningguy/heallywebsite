'use client'

import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Reimagining Learning for Everyone 🌟
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8"
          >
            We believe learning should be as unique as you are. That's why we're building the future of personalized education, one learner at a time.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Mission 🎯
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="bg-blue-50 rounded-2xl p-8 shadow-inner"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At HEALLY, we're on a mission to democratize education through the power of AI. We envision a world where quality education is accessible to everyone, regardless of their background or circumstances. By combining cutting-edge AI technology with deep learning science, we're creating personalized learning experiences that adapt to each individual's unique needs, pace, and style.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Values 💫
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We push the boundaries of what's possible in education by combining AI with proven learning methodologies.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                Education should be accessible to everyone. We design our platform to accommodate diverse learning needs and backgrounds.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scientific Rigor</h3>
              <p className="text-gray-600">
                Our approach is grounded in cognitive science and educational research, ensuring effective learning outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                We believe in lifelong learning and constantly evolve our platform based on learner feedback and new research.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Impact 🌍
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Learning Hours</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Learner Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Future Vision Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Vision for the Future 🚀
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <p className="text-lg leading-relaxed">
              We're building more than just another learning platform. We're creating an ecosystem where AI and human potential converge to unlock unprecedented learning possibilities. Our vision is to empower millions of learners worldwide with personalized education that adapts in real-time to their needs, making quality education not just accessible, but truly effective for everyone.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Join Us on This Journey 🌈
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8"
          >
            Whether you're a learner, educator, or institution, be part of the revolution that's making education more personal, effective, and accessible than ever before.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="inline-block"
          >
            <a
              href="/customers/b2c"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Your Learning Journey
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
} 