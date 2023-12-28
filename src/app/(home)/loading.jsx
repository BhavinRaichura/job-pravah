import ArticleSkeleton from '@/components/skeleton/ArticleSkeleton'
import PosterUILargeSkeleton from '@/components/skeleton/PosterUILargeSkeleton'
import SearchBar from '@/components/ui/SearchBar'
import React from 'react'

const HomeLoading = () => {
  return (
    
    <div className=' p-10 max-md:p-5'>
      <div className=' h-10 loading-bg-ani rounded-md'></div>
      <div>
        <PosterUILargeSkeleton />
        <PosterUILargeSkeleton />
        <PosterUILargeSkeleton />
        <PosterUILargeSkeleton />
      </div>
    </div>
    
  )
}

export default HomeLoading