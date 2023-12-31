import Heading from '@/components/ui/Heading'
import React from 'react'
import { getBooks } from './serverAction'
import { notFound } from 'next/navigation'

// revalidate everyday
export const revalidate = 86400

export const metadata = {
  title : "Download",
  description: "Get books and courses to prepare for competitive exams, entrance exams, interviews, government jobs, engineering and IT jobs and placements "
}


const DownloadPage = async () => {
  const res = await getBooks()
  if(!res.success) return notFound()
  return (
    
    <div className='p-5'>
      <Heading heading={"Download"} />
      <div className='flex gap-5 flex-col flex-wrap'>
        {res?.data?.books && res?.data?.books?.map((book, index)=>(
          <div key={index} className='p-5 mt-5 border-b   '>
            <p className='p-1 text-lg font-semibold'>
              {book?.title}
            </p>
            { book?.author ?
              <p className='p-1 text-base'>Author: {book?.author}</p>
              : ""
            }
            { book?.description ?
              <p className=' p-1 text-base '>Description: {book?.description}</p>
              : ""
            }
            <a href={`${book.url}`} >
            <div className='text-base my-2 py-1 text-center w-full bg-blue-500 text-white rounded-full hover:bg-blue-400 active:bg-blue-600'>
                Download
            </div>
            </a>

          </div>
        ))}
      </div>
    </div>
  )
}

export default DownloadPage