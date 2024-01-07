import revalidationPaths from "@/revalidation/paths";
import { getAllArticlesSlug } from "./(home)/(blog)/[...slug]/serverActions";

export default async function sitemap () {
    /*
    * Generate a dynamic sitemap.xml file for our site using the routes from Next
    */
   // Get all pages in the site and their URLs
   const posts = await getAllArticlesSlug();
   const sitemapsPosts = await posts?.data?.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${revalidationPaths.ARTICLE}/${post.createdAt}/${post.slug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastModified: post.updatedAt
    }))

    return [
        ...sitemapsPosts, 
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            changefreq: `daily`,
            priority: 1,
            lastModified: new Date().toISOString()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/download`,
            changefreq: `weekly`,
            priority: 0.8,
            lastModified: new Date().toISOString()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/exams`,
            changefreq: `weekly`,
            priority: 0.8,
            lastModified: new Date().toISOString()
        }
    ]

    
}