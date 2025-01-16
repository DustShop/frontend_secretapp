'use client'

import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'

export default function Page() {
  return (
    <div className='h-screen min-h-screen w-screen flex items-center justify-center bg-background'>
      <div
        className='hidden lg:flex h-screen border-r border-gray-400 lg:w-3/5'
        style={{
          backgroundImage: "url('/background-auth.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Spotlight className='-left-20 -top-10 hidden lg:block' fill='white' />
        <div className='bg-black/95 bg-grid-small-neutral-900 h-full w-full'></div>
      </div>
      <div className='h-screen w-full lg:w-2/5 flex items-center justify-center'></div>
    </div>
  )
}
