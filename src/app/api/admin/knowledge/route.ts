import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const KNOWLEDGE_FILE = path.join(process.cwd(), 'src/app/api/chat/knowledge.json')

// Initialize knowledge file if it doesn't exist
async function initializeKnowledgeFile() {
  try {
    await fs.access(KNOWLEDGE_FILE)
  } catch {
    const initialKnowledge = {
      greeting: "Hi! I'm HEALLY AI. How can I help you today?",
      about: "HEALLY is an AI-powered learning platform that helps students and professionals enhance their learning experience through personalized support and guidance.",
      features: "Our platform offers personalized learning paths, real-time support, and progress tracking to help you achieve your learning goals.",
      pricing: "We offer flexible pricing plans for both individual learners and institutions. Contact us for detailed pricing information.",
      support: "Our support team is available 24/7 to help you with any questions or concerns.",
      default: "I'm here to help you with your learning journey. Feel free to ask me about HEALLY's features, pricing, or how to get started."
    }
    await fs.writeFile(KNOWLEDGE_FILE, JSON.stringify(initialKnowledge, null, 2))
  }
}

// Get current knowledge base
export async function GET() {
  try {
    await initializeKnowledgeFile()
    const knowledge = await fs.readFile(KNOWLEDGE_FILE, 'utf-8')
    return NextResponse.json(JSON.parse(knowledge))
  } catch (error) {
    console.error('Failed to read knowledge base:', error)
    return NextResponse.json({ error: 'Failed to read knowledge base' }, { status: 500 })
  }
}

// Add new knowledge entry
export async function POST(req: Request) {
  try {
    const { key, response } = await req.json()
    if (!key || !response) {
      return NextResponse.json(
        { error: 'Key and response are required' },
        { status: 400 }
      )
    }

    await initializeKnowledgeFile()
    const knowledge = JSON.parse(await fs.readFile(KNOWLEDGE_FILE, 'utf-8'))
    knowledge[key] = response
    await fs.writeFile(KNOWLEDGE_FILE, JSON.stringify(knowledge, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to update knowledge base:', error)
    return NextResponse.json(
      { error: 'Failed to update knowledge base' },
      { status: 500 }
    )
  }
} 