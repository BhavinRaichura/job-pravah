
import React from 'react'
import PosterUISmall from '../ui/PosterUISmall'
import { getSeachResult } from '@/app/(home)/serverAction'


export const revalidate = 2

const Highlights = async () => {
  
  const recentPost = await getSeachResult({query:"",page:1, count:6})

  // console.log(recentPost)

  return (
    <footer className=' bg-zinc-900 h-max w-full py-10 '>
    <div className='  '>
      <div className='  md:px-20 max-md:px-5'>
        <div className='   my-10 max-xl:w-full xl:w-2/3 m-auto '>
          <h2 className='  text-gray-300 mb-5 py-2 text-2xl max-md:text-xl font-semibold border-b border-b-gray-600'>Recent Post</h2>
          <div className=' flex flex-wrap gap-5 '>
            { recentPost && recentPost?.post?.map((data,key)=> <PosterUISmall key={key} {...data}/>)}
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Highlights