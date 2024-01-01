"use client"

import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { deleteBook } from './serverAction'

const BookEditHandler = ({bookId}) => {
    const [loading, setLoading] = useState(0)
  return (
    <button className={``}  onClick={async ()=>{ 
        setLoading(1);
        deleteBook({bookId: bookId})
            .then(response => response.status===true ? router.refresh():"")
            .catch(e=>console.log(e))
            .finally(()=>setLoading(0));
    }} disabled={loading ? true : false}>
        <MdDeleteForever className="w-5 h-5 cursor-pointer text-gray-500 transition-all hover:scale-110 hover:text-red-600"  />
    </button>
  )
}

export default BookEditHandler