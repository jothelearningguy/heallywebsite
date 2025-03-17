'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import PricingTables from '@/components/PricingTables'

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Flexible Pricing for Everyone</h1>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect plan for your learning journey, whether you're an individual learner or an institution.
            </p>
          </div>

          <PricingTables />

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-gray-600 mb-8">
              Need a custom solution for your organization? Let's talk about how we can help you achieve your learning goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 