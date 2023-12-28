import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className=' my-20 '>
        <div className=' text-5xl font-medium text-gray-800 py-5'>{heading}</div>
        <hr  className=''/>
    </div>
  )
}

export default Heading