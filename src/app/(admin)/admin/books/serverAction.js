"use server"

import Books from "@/models/books"
import { connectToDB } from "@/utils/db"

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