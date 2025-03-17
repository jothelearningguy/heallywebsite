'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatInterface from './ChatInterface'

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-0 right-0 w-[380px] h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Chat header */}
            <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white p-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold">HEALLY AI</h3>
                  <p className="text-xs text-blue-100">Your Learning Companion</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-blue-700 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat interface */}
            <div className="h-full pt-[72px]">
              <ChatInterface />
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <span className="text-2xl">🧠</span>
            <span className="font-medium">Chat with HEALLY</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
} 