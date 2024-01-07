"use client"
import { FaEdit, FaExternalLinkAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import revalidationPaths from "@/revalidation/paths";

function PosterEditButtons({slug, createdAt, deletePostsHandler}){
    const router = useRouter()
    return (
    <div className="flex items-center gap-5">
        <MdDeleteForever className="w-5 h-5 cursor-pointer text-gray-500 transition-all hover:scale-110 hover:text-red-600" onClick={async ()=>{ await deletePostsHandler({slug, createdAt}) ? router.refresh():""} } />
        <Link href={`/admin/articles/edit/${createdAt}/${slug}`} >
            <FaEdit className="w-4 h-4 cursor-pointer text-gray-500 transition-all hover:scale-110 hover:text-gray-900"/>
        </Link>
        <Link href={`${revalidationPaths.ARTICLE}/${createdAt}/${slug}`} >
            <FaExternalLinkAlt className="w-4 h-4 cursor-pointer text-gray-500 transition-all hover:scale-110 hover:text-gray-900"/>
        </Link>
    </div>
    )
}

export default PosterEditButtons