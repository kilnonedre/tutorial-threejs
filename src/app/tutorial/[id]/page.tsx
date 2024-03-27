import React from 'react'
import ScrollAnimation from '@/view/scrollAnimation'

export const generateStaticParams = () => {
  return [{ id: '1' }]
}

const pathToComponentObj = {
  '1': <ScrollAnimation />,
}

const Tutorial = ({
  params,
}: {
  params: { id: keyof typeof pathToComponentObj }
}) => {
  return (
    <div className="h-screen w-screen bg-[#d9afd9] bg-gradient-to-b from-[#97d9e1] to-[#d9afd9]">
      {pathToComponentObj[params.id]}
    </div>
  )
}

export default Tutorial
