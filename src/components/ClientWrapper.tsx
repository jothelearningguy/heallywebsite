'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const FloatingChatWidget = dynamic(() => import('@/components/FloatingChatWidget'), {
  ssr: false,
  loading: () => null
})

export default function ClientWrapper() {
  return (
    <Suspense fallback={null}>
      <FloatingChatWidget />
    </Suspense>
  )
} 