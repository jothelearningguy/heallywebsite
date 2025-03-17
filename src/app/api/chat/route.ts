import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// OpenAI Configuration
if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set in environment variables');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// HEALLY FAQs for better responses
const HEALLY_FAQS = {
  "what is heally": "HEALLY® is a neuroscience-driven AI platform that redefines personal and professional growth by integrating advanced cognitive strategies, AI, and mental health interventions. 🧠✨",
  "how does heally help with learning": "HEALLY enhances learning using **molecular memory**, **synaptic plasticity**, and adaptive AI. It captures **your unique learning patterns** to provide personalized learning experiences! 🎓📖",
  "does heally help with mental health": "Yes! HEALLY offers **guided journaling, mindfulness training, and cognitive reframing exercises** to combat stress, anxiety, and burnout. ❤️🧘‍♂️",
  "how is heally different from other ai platforms": "Unlike generic AI tools, HEALLY integrates **neuroscience-backed learning models, affective computing, and real-time adaptive content**, making it **a true learning ally**! 🚀🔥",
  "what partners does heally have": "HEALLY is partnered with **Microsoft, Columbia University, Latent Knowledge, UNC Chemistry, and NVIDIA Inception** to bring **cutting-edge AI and neuroscience innovations** to the world. 🌎💡",
  "how does heally improve engagement": "HEALLY optimizes engagement using **reinforcement learning, dynamic content adjustments, and personalized learning pathways**—keeping users motivated and accountable! 💪📈",
};

// Sentiment keywords for emoji enhancement
const SENTIMENT_KEYWORDS = {
  "excited": " 🎉🔥", 
  "amazing": " 💡✨", 
  "love": " ❤️🌟",
  "learning": " 🧠📖", 
  "science": " 🔬💡", 
  "neuroscience": " 🧠⚡",
  "stress": " 😌🌿", 
  "burnout": " 🛑💆", 
  "mental health": " ❤️🧘",
  "motivation": " 🚀🔥", 
  "focus": " 🎯🔎", 
  "growth": " 📈🌱",
  "teamwork": " 🤝✨", 
  "productivity": " ⚡📊", 
  "support": " 💙🤗"
};

type Role = 'user' | 'assistant' | 'system';

interface Message {
  role: Role;
  content: string;
}

interface ConversationContext {
  messageHistory: Message[];
  hasGreeted: boolean;
}

// Store conversation contexts
const conversations = new Map<string, ConversationContext>();

// Add emojis based on sentiment analysis
function addSentimentEmojis(response: string): string {
  let enhancedResponse = response;
  for (const [word, emoji] of Object.entries(SENTIMENT_KEYWORDS)) {
    if (response.toLowerCase().includes(word)) {
      enhancedResponse += emoji;
    }
  }
  return enhancedResponse;
}

// Check for FAQ matches
function checkFAQs(message: string): string | null {
  const lowerMessage = message.toLowerCase();
  for (const [key, value] of Object.entries(HEALLY_FAQS)) {
    if (lowerMessage.includes(key)) {
      return value;
    }
  }
  return null;
}

// Generate AI response
async function generateResponse(message: string, context: ConversationContext): Promise<string> {
  try {
    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is not configured');
      return "I apologize, but our AI service is currently undergoing maintenance. Please try again in a few minutes! 🔧";
    }

    // Check for greetings
    if (!context.hasGreeted) {
      return "Hi! 👋 I'm HEALLY AI, your personal learning companion. I'm here to help you discover how AI can transform your learning journey. What would you like to know? 🚀";
    }

    // Check for FAQs first
    const faqResponse = checkFAQs(message);
    if (faqResponse) {
      return faqResponse;
    }

    // Prepare conversation history
    const messages: Message[] = [
      {
        role: "system",
        content: "You are HEALLY AI 🧠, a neuroscience-powered learning ally, customer support agent, and sales representative. You respond with warmth, enthusiasm, and knowledge, using emojis frequently to enhance engagement and user experience! 🎉 You are friendly, insightful, and proactive in providing helpful solutions. When explaining academic subjects, you break down complex concepts into easy-to-understand parts and provide relevant examples."
      },
      ...context.messageHistory,
      { role: "user", content: message }
    ];

    // Generate completion
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      temperature: 0.7,
      max_tokens: 800,
      top_p: 0.95,
      frequency_penalty: 0.1,
      presence_penalty: 0.1
    });

    let response = completion.choices[0].message?.content || "I'm having trouble understanding. Could you rephrase that?";
    
    // Add sentiment emojis
    response = addSentimentEmojis(response);

    return response;
  } catch (error) {
    console.error('Error generating response:', error);
    return "I'm having a moment. 😅 Could you please try asking your question again?";
  }
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { message: "I didn't catch that. Could you please try again?" },
        { status: 200 }
      );
    }

    // Get or initialize conversation context
    const sessionId = req.headers.get('x-session-id') || 'default';
    let context = conversations.get(sessionId) || {
      messageHistory: [],
      hasGreeted: false
    };

    // Generate response
    const response = await generateResponse(message, context);
    
    // Update conversation context
    const newContext: ConversationContext = {
      hasGreeted: true,
      messageHistory: [
        ...context.messageHistory,
        { role: 'user' as Role, content: message },
        { role: 'assistant' as Role, content: response }
      ].slice(-10) // Keep last 10 messages for context
    };
    
    conversations.set(sessionId, newContext);

    // Clean up old conversations periodically
    if (conversations.size > 1000) {
      const oldestKey = conversations.keys().next().value;
      if (oldestKey) {
        conversations.delete(oldestKey);
      }
    }

    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { message: "I'm having a moment. 😅 Could you please try asking your question again?" },
      { status: 200 }
    );
  }
} 