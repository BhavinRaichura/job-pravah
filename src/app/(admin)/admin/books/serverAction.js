"use server"

import Books from "@/models/books"
import revalidationPaths from "@/revalidation/paths"
import { connectToDB } from "@/utils/db"
import { revalidatePath } from "next/cache"


export async function deleteBook({bookId}){
    try {
        await connectToDB()
        const deletedBook = await Books.findOneAndDelete({_id:bookId})
        if(!deleteBook)
            return {status: false, error: "Book was not found"}

        revalidatePath(revalidationPaths.DOWNLOAD);
        revalidatePath(revalidationPaths.ADMIN_BOOKS)
        revalidatePath(revalidationPaths.ADMIN)
        
        return {status: true, message:"book deleted succeccfully", data: {book: { title: deletedBook.title}}}
    } catch (error) {
        console.log(error);
        return {status: false, error: error.message}
    }
}

export async function getAllBooks(){
    try {
        await connectToDB()
        const books = await Books.find({},{ title:1, author:1, language:1})
        console.log("books: ", books)
        return {status: 200, data:{books , length: books.length} }
    } catch (error) {
        console.log("error: ", error)
        return {status: 500, data:{}}
    }
} 