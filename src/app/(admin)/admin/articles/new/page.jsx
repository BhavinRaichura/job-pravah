import Editor from '@/components/ui/adminDashboard/Editor'

import revalidationTags from '@/revalidation/tags';

import { revalidatePath, revalidateTag } from 'next/cache';
import { createArticle } from './serverAction';

export const metadata = {
  title : "New" 
}

/*async function createArticle({slug, title, description, tags, content, image}){

  "use server"
  try{
      
      const res = await fetch("http://localhost:3000/api/article", {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
          description,
          tags,
          image,
        })
      })
      const post = await res.json()
      console.log("\n\n\n\n\n\n",post)
      if(!post) throw new Error("semething went wrong")
      revalidatePath('/admin/articles')
      revalidateTag(revalidationTags.NEW_ARTICLE)
      return post
  } catch (e){
      console.log(e)
      throw new Error("semething went wrong: ", e)
  }
}*/


const NewPost = async () => {
  
  return (
    <div className='mb-20'>
      <Editor formName={"Create Article"} formSubmitHandler={createArticle} slug={""}  />
    </div>
  )
}

export default NewPost