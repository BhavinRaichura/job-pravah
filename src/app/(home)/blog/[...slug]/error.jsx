'use client' // Error components must be Client Components
 
import Link from 'next/link'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export const metadata = {
  title: "Sorry"
}
export default function Error({ error, reset }) {
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error)
  }, [error])
 
  const router = useRouter()
  const [redirectDelay, setRedirectDelay] = useState(5); // Set the time delay in milliseconds (e.g., 5000ms = 5 seconds)

  useEffect(() => {

    const redirectTimer = setInterval(() => {
      // Redirect to another page after the delay
      // Change '/' to the desired destination
      
      if(redirectDelay===1)
        router.push('/')
      setRedirectDelay(e=>e-1)
      
    }, 1000);

    return () => clearInterval(redirectTimer); // Clear the timer on component unmount

  }, [router,redirectDelay]);

  return (
    <div>

 
    
    <div class="bg-white  border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Page Not Found</p>
        <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could not be found.</p>
        <Link href="/" class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
            
            <span>You Will be redirect to home page in {redirectDelay} seconds</span>
        </Link>
    
</div>
    </div>
  )
}