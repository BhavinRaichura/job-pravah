"use server"

const { default: Books } = require("@/models/books")
const { connectToDB } = require("@/utils/db")


export async function addBook(formdata){
    
    try{
      const title   = formdata.get("title")
      const author  = formdata.get("author") || ""
      const url     = formdata.get("url")
      const language= formdata.get("language") || ""
      const image   = formdata.get("image") || ""
      const description = formdata.get("description") || ""

      console.log("title: ", title)

      if(!title || !url) throw new Error("Invalid input")
      
      await connectToDB();
      const newbook = await new Books({
        title,
        author,
        url,
        language,
        image,
        description
      })

      const book = await newbook.save()
      delete book._id
      delete book.__v
      console.log("new boook: " , book)
      return {status: 200, message:"book is added", title: book.title}
      
    } catch (error) {
      console.log("book error" , error)
      return {status:500, error: error.message}
    }

}

