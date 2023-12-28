'use client' // Error components must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'

export const metadata = {
  title: "sorry"
}
export default function Error({ error, reset }) {
  console.warn(error)
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])
 
  return (
    <div className=' mt-44 text-center'>
      
      <h1 className="title font-semibold text-3xl max-md:text-2xl  py-10 text-red-500 ">
          {error.message} 
        </h1>
       
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='p-2 border rounded-md text-gray-500 hover:text-black hover:border-black'
      >
        Try again {" "}
      </button>
      <p>

      <Link href={'/'}><span className='text-sm underline mt-10 text-black hover:text-blue-500'>goto home page</span></Link>
      </p>
    </div>
  )
}