"use client"
import React from 'react'
import styles from '@/styles/NewBookForm.module.css'
import { useRouter } from 'next/navigation'

const BooksForm = ({addBook}) => {
  const router = useRouter()
  
  const handlesubmit = async (e) =>{
    const data = await addBook(e)
    console.log(data)
    if(data.status===200){
      alert('Livro adicionado com sucesso!')
      
      router.push('/admin')
    } else 
      alert('Something went wrong!')
  }


  console.log("books")
  return (
    <form action={handlesubmit}  className={styles.bookform}>
      <div className={styles.main}>
        <div className=' w-full p-2 my-2'>
          <label htmlFor="title">Title</label>
          <textarea placeholder='title' name="title" id="title" cols="30" rows="10" required></textarea>
        </div>
        <div className=' w-full p-2 my-2'>
          <label htmlFor="author">Author</label>
          <input placeholder="author" type="text" name="author" id="author" />
        </div>
        <div className=' py-2 my-2' >
          <label htmlFor="language">Language</label>
          <div className=''>
            <div className='px-2 mb-1 flex items-center' >
              <input className={styles.radio} placeholder="Hindi" type="radio" name="language" id="hindi" value={"hindi"}/>
              <label className={styles.radioLabel}  htmlFor="hindi">Hindi</label>
            </div>
            <div className=' px-2 mb-1 flex items-center'>
              <input className={styles.radio} placeholder="English" type="radio" name="language" id="english" value={"english"}/>
              <label className={styles.radioLabel} htmlFor="english">English</label>
            </div>
            <div className='px-2 mb-1 flex items-center'>
              <input className={styles.radio} placeholder="Other" type="radio" name="language" id="other" value={"other"}/>
              <label className={styles.radioLabel} htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className=' w-full p-2 my-2'>
          <label  htmlFor="url">Download Link</label>
          <input  placeholder="url" type="url" name="url" id="url" required />
        </div>
        <div className=' w-full p-2 my-2'>
          <label htmlFor="image">Book Image</label>
          <input placeholder="image url" type="url" name="image" id="image" />
        </div>
        <div className=' w-full p-2 my-2'>
          <label htmlFor="desc">Description</label>
          <textarea name="description" id="desc" cols="30" rows="10" placeholder='description'></textarea>
        </div>
        <div className=' w-full p-2 my-2'>
          <input className={styles.button} type="submit" value="submit" />
        </div>
      </div>
    </form>
  )
}

export default BooksForm