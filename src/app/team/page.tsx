'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface TeamMember {
  name: string
  position: string
  linkedin: string
  quote: string
}

interface Department {
  name: string
  color: string
  members: TeamMember[]
}

const teamData: Department[] = [
  {
    name: 'Business Development',
    color: 'from-amber-500 to-amber-600',
    members: [
      {
        name: 'Joseph Ayinde',
        position: 'CEO',
        linkedin: 'https://www.linkedin.com/in/josephayinde/',
        quote: `"Leading innovation in education, one breakthrough at a time."`
      },
      {
        name: 'Vihaan Nama',
        position: 'R&D Chief Advisor',
        linkedin: 'https://www.linkedin.com/in/vihaan-nama/',
        quote: `"Building the future of learning with AI and human insight."`
      }
    ]
  },
  {
    name: 'Design',
    color: 'from-pink-500 to-pink-600',
    members: [
      {
        name: 'Oluwadara Akinsoji',
        position: 'Chief Design Officer',
        linkedin: 'https://www.linkedin.com/in/oluwadara-akinsoji/',
        quote: `"Design is the silent ambassador of your brand."`
      },
      {
        name: 'Jacquline Nguyen',
        position: 'UI/UX Associate',
        linkedin: 'https://www.linkedin.com/in/jacquelinenguyen04/',
        quote: `"Creating experiences that make people smile."`
      },
      {
        name: 'Timothy Takeuchi-Williams',
        position: 'UI/UX Designer',
        linkedin: 'https://www.linkedin.com/in/timothy-takeuchi-williams-8ab84552/',
        quote: `"Good design is obvious. Great design is transparent."`
      },
      {
        name: 'Jaegoo Ha',
        position: 'UI/UX Associate',
        linkedin: 'https://www.linkedin.com/in/jaegoo-ha/',
        quote: `"Simplicity is the ultimate sophistication."`
      }
    ]
  },
  {
    name: 'Development',
    color: 'from-purple-500 to-purple-600',
    members: [
      {
        name: 'Johnson Nifemi',
        position: 'CTO',
        linkedin: 'https://www.linkedin.com/in/johnson-emmanuel/',
        quote: "\"Code is poetry, and I'm here to write epics.\""
      },
      {
        name: 'Bright Anyawe',
        position: 'Frontend Engineer',
        linkedin: '#',
        quote: "\"Making pixels dance since forever.\""
      },
      {
        name: 'Adhvika Iyer',
        position: 'Backend Engineer',
        linkedin: 'https://www.linkedin.com/in/adhvika-iyer/',
        quote: "\"I speak fluent API and dream in databases.\""
      },
      {
        name: 'Abraham Osas',
        position: 'Frontend Engineer',
        linkedin: 'https://www.linkedin.com/in/osas-abraham-469a19213/',
        quote: "\"Turning coffee into beautiful interfaces.\""
      },
      {
        name: 'Tophila Martins',
        position: 'Frontend Engineer',
        linkedin: 'https://www.linkedin.com/in/tophila-martins/',
        quote: "\"Design is not just what it looks like, it's how it works.\""
      }
    ]
  },
  {
    name: 'Machine Learning',
    color: 'from-blue-500 to-blue-600',
    members: [
      {
        name: 'Keshav Saxena',
        position: 'Head of Machine Learning',
        linkedin: 'https://www.linkedin.com/in/keshav-saxena-9494b6206/',
        quote: `"Teaching machines to think, one model at a time."`
      },
      {
        name: 'Myles Scott',
        position: 'ML/DL Engineer',
        linkedin: 'https://www.linkedin.com/in/myles-scott-7545852a6/',
        quote: `"Deep learning is just pattern matching until it isn't."`
      },
      {
        name: 'Nilesh Kanti',
        position: 'ML/DL Engineer',
        linkedin: 'https://www.linkedin.com/in/nileshkanti/',
        quote: `"In neural networks we trust."`
      },
      {
        name: 'Ulises Ronnau',
        position: 'ML/DL Engineer',
        linkedin: 'https://www.linkedin.com/in/ulises-roennau-a32b432b2/',
        quote: `"Making AI more intelligent and less artificial."`
      },
      {
        name: 'Sarathy Selvam',
        position: 'ML/DL Engineer',
        linkedin: 'https://www.linkedin.com/in/sarathyselvam/',
        quote: `"Every dataset tells a story."`
      }
    ]
  },
  {
    name: 'Marketing',
    color: 'from-green-500 to-green-600',
    members: [
      {
        name: 'Pelumi Dunmoye',
        position: 'CMO',
        linkedin: 'https://www.linkedin.com/in/pelumi-dunmoye/',
        quote: `"Marketing is storytelling, and we have an amazing story to tell."`
      },
      {
        name: 'Adolfo Alvarez',
        position: 'Head of Creativity',
        linkedin: 'https://www.linkedin.com/in/adolfoalvz/',
        quote: `"Creativity is intelligence having fun."`
      },
      {
        name: 'Catharine Yoder',
        position: 'Creative Associate',
        linkedin: 'https://www.linkedin.com/in/catharineyoder12/',
        quote: `"Making magic happen one design at a time."`
      },
      {
        name: 'Sean Segre',
        position: 'Head of Short Form Content',
        linkedin: 'https://www.linkedin.com/in/sean-segre-20955224a/',
        quote: `"Life is short, and so is our content - but the impact is forever."`
      },
      {
        name: 'Maxwell Simbuwa',
        position: 'Head of Long Form Content',
        linkedin: 'https://www.linkedin.com/in/maxwell-simbuwa-375a3415b/',
        quote: `"Every story matters, every word counts."`
      },
      {
        name: 'Shivam Patel',
        position: 'Head of Creative Technology',
        linkedin: '#',
        quote: `"Where creativity meets technology, magic happens."`
      }
    ]
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Meet Our Amazing Team 🌟
          </h1>
          <p className="text-xl text-gray-600">
            The brilliant minds behind HEALLY's innovation and success
          </p>
        </motion.div>

        {teamData.map((department, deptIndex) => (
          <motion.section
            key={department.name}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className={`bg-gradient-to-r ${department.color} rounded-xl p-6 mb-8 text-white`}
            >
              <h2 className="text-3xl font-bold text-center">
                {department.name} Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {department.members.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${department.color}`} />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{member.position}</p>
                    <div className="italic text-gray-600 mb-4 min-h-[3rem] flex items-center justify-center text-center">
                      {member.quote}
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
} 