"use server"

import { revalidatePath } from "next/cache"

const { default: User } = require("@/models/user")
const { connectToDB } = require("@/utils/db")
import revalidationPaths from "@/revalidation/paths"

async function getAllUsers() {
    try {
        await connectToDB()
        const users = await User.find({}, {
            username: 1,
            image:1,
            role:1,
            email:1
        })
        return {status:200, data:users, length:users.length}
    } catch (error) {
        return {status:500, message: error.message}
    }
}

async function removeUser(userid){
    try {
        if(!userid)
            return {status:404, message:"user not found" }
        const user = await User.findOneAndDelete({_id : userid})
        
        revalidatePath(revalidationPaths.ADMIN)
        revalidatePath(revalidationPaths.ADMIN_USERS)

        if(user) return {status:200, message:"success", role:user.role}
        return {status:404, message:"user not found",  }
    } catch (error) {
        return {status:500, message:error.message }
    }
}

async function makeAdmin(userid){
    try {
        if(!userid)
            return {status:404, message:"user not found" }
        const user = await  User.findOneAndUpdate({_id : userid}, {$set:{
            role: "Admin"
        }})
        revalidatePath('/admin/users')
        if(user){ 
            delete user._id
            return {status:200, message:"success", role : user.role}
        }
        return {status:404, message:"user not found" }
    } catch (error) {
        return {status:500, message:error.message }
    }
}

async function removeAdmin(userid){
    try {
        if(!userid)
            return {status:404, message:"user not found" }
        const user = await User.findOneAndUpdate({_id : userid}, {$set:{
            role: "Client"
        }})
        revalidatePath('/admin/users')
        console.log(user)
        if(user){ 
            return {status:200, message:"success", name: user.username}
        }
        return {status:404, message:"user not found",  }
    } catch (error) {
        return {status:500, message:error.message }
    }
}


export {getAllUsers, makeAdmin, removeAdmin}

