"use server"

import Books from "@/models/books"
import { connectToDB } from "@/utils/db"

export async function getBooks(){
    try{
        await connectToDB()
        const books = await Books.find({})
        return {success: true, data: {books}}
    } catch (e) {
        return {success: false, error: e.message, data:{}}
    }
}