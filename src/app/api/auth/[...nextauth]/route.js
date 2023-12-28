import User from "@/models/user"
import { connectToDB } from "@/utils/db"
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async session ({session}){
            const sessionUser = await User.findOne({email: session.user.email})
            session.user.id = sessionUser._id.toString();
            session.user.role = sessionUser.role
            delete session.user.email
            //console.log("session: ",session)
            return session;
        },
        async signIn({account, profile, user, credentials}){
            try{

                await connectToDB();
                
                const userExists = await User.findOne({email: profile.email});
                if(!userExists){
                    await User.create({
                        email: profile.email,
                        username: profile.name,
                        image: profile.picture
                    })
                }
                console.log("signin: " )
                return true
            } catch (error) {
                console.log("error checking if user is exist", error.message)
                return false
            }
        }
    }
})

export {handler as GET, handler as POST}