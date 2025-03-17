'use client'

import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function PricingTables() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [showB2C, setShowB2C] = useState(true)

  const b2cPlans = [
    {
      name: 'Free',
      price: 0,
      description: 'Start your learning journey',
      features: [
        'Basic learning path',
        'Limited AI assistance (5/day)',
        'Basic progress tracking',
        'Access to free content',
        'Community forum access',
        'Email support'
      ]
    },
    {
      name: 'Basic',
      price: isAnnual ? 9.99 : 14.99,
      description: 'Perfect for individual learners',
      features: [
        'Everything in Free',
        'Personalized learning path',
        'Enhanced AI assistance',
        'Full progress tracking',
        'Extended content library',
        '25 practice exercises per day'
      ]
    },
    {
      name: 'Pro',
      price: isAnnual ? 19.99 : 24.99,
      description: 'For dedicated learners',
      features: [
        'Everything in Basic',
        'Advanced AI tutoring',
        'Unlimited content access',
        'Performance analytics',
        'Study group access',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: isAnnual ? 29.99 : 34.99,
      description: 'Ultimate learning experience',
      features: [
        'Everything in Pro',
        'Live 1-on-1 tutoring',
        'Custom study materials',
        'Career guidance',
        'Certification prep',
        'API access'
      ]
    }
  ]

  const b2bPlans = [
    {
      name: 'Department',
      price: isAnnual ? 5000 : 6000,
      description: 'Perfect for single department integration',
      features: [
        'Up to 500 students',
        'Department-level analytics',
        'Priority support',
        'Content management system',
        'LMS integration',
        'Department admin dashboard'
      ]
    },
    {
      name: 'School-Wide',
      price: isAnnual ? 100000 : 120000,
      description: 'Complete school integration',
      features: [
        'Unlimited students',
        'School-wide analytics',
        'Dedicated support team',
        'Custom branding',
        'Full API access',
        'Multi-department management',
        'Performance insights'
      ],
      popular: true
    },
    {
      name: 'School Board',
      price: 'Custom',
      description: 'District-wide learning solution',
      features: [
        'Multi-school management',
        'District-level analytics',
        'Custom development',
        'White labeling',
        'Strategic consultation',
        'SLA guarantee',
        'Dedicated success team'
      ]
    }
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing for Everyone</h2>
        
        {/* Section Toggle */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setShowB2C(true)}
            className={`px-6 py-2 rounded-lg ${
              showB2C ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Individual Learners
          </button>
          <button
            onClick={() => setShowB2C(false)}
            className={`px-6 py-2 rounded-lg ${
              !showB2C ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Institutions
          </button>
        </div>

        {/* Monthly/Annual Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={!isAnnual ? 'text-gray-900' : 'text-gray-500'}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            style={{ backgroundColor: isAnnual ? '#2563EB' : '#D1D5DB' }}
          >
            <span
              className={`${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
          </button>
          <span className={isAnnual ? 'text-gray-900' : 'text-gray-500'}>
            Annual (Save 20%)
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {(showB2C ? b2cPlans : b2bPlans).map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              } ${plan.name === 'Free' ? 'bg-gray-50' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price === 0 ? 'Free' : `$${typeof plan.price === 'number' ? plan.price.toFixed(2) : plan.price}`}
                  </span>
                  {typeof plan.price === 'number' && plan.price !== 0 && (
                    <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                  )}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`mt-6 w-full rounded-lg px-4 py-2 text-sm transition-colors ${
                    plan.name === 'Free' 
                      ? 'bg-gray-900 text-white hover:bg-gray-800' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : plan.name === 'Free' ? 'Get Started - Free' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 