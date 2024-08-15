
import React from 'react'

const Card = ({children, fw='w-[200px] w-64 h-55 object-cover'}) => {
  return (
    <div className={`${fw} flex items-center flex-col px-4 flex-col flex gap-20 justify-center flex flex-wrap gap-10 grid grid-cols-4`}>
      
    {children}</div>
  )
}

export default Card
