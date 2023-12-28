import Link from 'next/link'
import DateFormateElement from './DateFormateElement'

const PosterUISmall = ({image, title, updatedAt, slug, createdAt}) => {
  return (
    
    <div className=' group flex  w-72   px-2 text-gray-400 hover:text-lime-50  transition-transform   line-clamp-2' title={title}>
        <div className=' w-20 h-20 '>
          <img className=" w-20 h-16  rounded-md " width={200} height={300} src={image? image :"/job.jpeg"} alt="image" />
        </div>
        <div className=' pl-3 w-full '>
            <p className=" group-hover:text-gray-400   text-xs font-normal text-gray-600"> <DateFormateElement date={updatedAt} /> </p>
          <Link href={`/blog/${createdAt}/${slug}`}>
            <p className="pb-2 block  text-sm  font-medium leading-snug tracking-normal  antialiased cursor-pointer text-ellipsis overflow-hidden h-16 w-full  line-clamp-2 "> <span className='line-clamp-3'>{title}</span></p>
          </Link>
          
           
        </div>
    </div>
    
  
  )
}

export default PosterUISmall