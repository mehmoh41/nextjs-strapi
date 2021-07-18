import Image from 'next/image'
import React from 'react'

export default function ImageComponentity({ src, alt, classes = 'h-20 w-20' }) {
  return (
    <div className={`relative bg-gray-100 ${classes}`}>
      <Image
        layout='fill'
        objectFit='cover'
        priority='true'
        src={src}
        alt={alt}
      />
    </div>
  )
}
