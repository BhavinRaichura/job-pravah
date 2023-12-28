"use server"

import User from "@/models/user"
import { connectToDB } from "@/utils/db"
export async function getAllAdmin(){
    try {
        await connectToDB()
        const admins = await User.find({role:"Admin"}, {
            username: 1,
            image:1,
            role:1,
            email:1
        })
        return {status:200, data:admins, length:admins.length}
    } catch (error) {

    }
}

