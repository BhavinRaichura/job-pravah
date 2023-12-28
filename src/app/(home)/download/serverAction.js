"use server"

import Books from "@/models/books"
import { connectToDB } from "@/utils/db"

export async function getBooks(){
    try{
        await connectToDB()
        const books = await Books.find({})
        return books
    } catch (e) {
        return {status:500, error: e.message}
    }
}