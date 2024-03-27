import React from 'react'
import ScrollAnimation from '@/view/scrollAnimation'

export const generateStaticParams = () => {
  return [{ id: '1' }]
}

const Tutorial = ({ params }: { params: { id: string } }) => {
  console.log(params)

  return (
    <div className="h-screen w-screen bg-[#d9afd9] bg-gradient-to-b from-[#97d9e1] to-[#d9afd9]">
      <ScrollAnimation />
    </div>
  )
}

export default Tutorial
