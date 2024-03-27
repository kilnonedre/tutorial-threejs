import React from 'react'
import types from './sectionTypes.d'

const Section = (props: types.ConfigProps) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? 'items-end' : 'items-start'
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="flex items-center justify-center w-1/2">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  )
}

export default Section
