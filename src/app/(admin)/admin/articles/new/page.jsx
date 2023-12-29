import Editor from '@/components/ui/adminDashboard/Editor'

import { createArticle } from './serverAction';

export const metadata = {
  title : "New" 
}

const NewPost = async () => {
  
  return (
    <div className='mb-20'>
      <Editor formName={"Create Article"} formSubmitHandler={createArticle} slug={""}  />
    </div>
  )
}

export default NewPost