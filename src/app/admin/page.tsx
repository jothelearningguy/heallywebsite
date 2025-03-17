'use client'

import React, { useState, useEffect } from 'react'

interface KnowledgeEntry {
  key: string
  response: string
}

export default function AdminPage() {
  const [knowledge, setKnowledge] = useState<KnowledgeEntry[]>([])
  const [newKey, setNewKey] = useState('')
  const [newResponse, setNewResponse] = useState('')
  const [testQuery, setTestQuery] = useState('')
  const [testResponse, setTestResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Load current knowledge base
  useEffect(() => {
    const loadKnowledge = async () => {
      try {
        const response = await fetch('/api/admin/knowledge')
        const data = await response.json()
        setKnowledge(Object.entries(data).map(([key, response]) => ({
          key,
          response: response as string
        })))
      } catch (error) {
        console.error('Failed to load knowledge base:', error)
      }
    }
    loadKnowledge()
  }, [])

  // Handle adding new knowledge entry
  const handleAddEntry = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newKey.trim() || !newResponse.trim()) return

    try {
      const response = await fetch('/api/admin/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: newKey, response: newResponse })
      })

      if (!response.ok) throw new Error('Failed to add entry')

      setKnowledge(prev => [...prev, { key: newKey, response: newResponse }])
      setNewKey('')
      setNewResponse('')
    } catch (error) {
      console.error('Failed to add knowledge entry:', error)
    }
  }

  // Handle testing query
  const handleTestQuery = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!testQuery.trim() || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: testQuery })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setTestResponse(data.message)
    } catch (error) {
      console.error('Failed to test query:', error)
      setTestResponse('Error: Failed to get response')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">HEALLY AI Admin</h1>
          <p className="mt-2 text-gray-600">Manage AI responses and test queries</p>
        </div>

        {/* Knowledge Base Management */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Knowledge Base</h2>
          
          {/* Add new entry form */}
          <form onSubmit={handleAddEntry} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Key (e.g., "greeting", "about")
              </label>
              <input
                type="text"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                placeholder="Enter key..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Response
              </label>
              <textarea
                value={newResponse}
                onChange={(e) => setNewResponse(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                placeholder="Enter response..."
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Add Entry
            </button>
          </form>

          {/* Current entries */}
          <div className="space-y-4">
            {knowledge.map((entry, index) => (
              <div key={index} className="border rounded-md p-4">
                <h3 className="font-medium text-gray-900">{entry.key}</h3>
                <p className="mt-1 text-gray-600">{entry.response}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Query Testing */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Test Query</h2>
          <form onSubmit={handleTestQuery} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Query
              </label>
              <input
                type="text"
                value={testQuery}
                onChange={(e) => setTestQuery(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                placeholder="Enter test query..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Testing...' : 'Test Query'}
            </button>
          </form>

          {testResponse && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium text-gray-900">Response:</h3>
              <p className="mt-1 text-gray-600">{testResponse}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 