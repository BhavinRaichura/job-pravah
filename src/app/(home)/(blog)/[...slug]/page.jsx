import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import {
  getAllArticlesSlug,
  getArticle,
  getArticleMetadata,
} from "./serverActions";
import Suggetions from "./component";
import { notFound } from "next/navigation";
import DateFormateElement from "@/components/ui/DateFormateElement";
import TagRenderer from "@/components/ui/TagRenderer";
import SocialButtons from "@/components/ui/SocialButtons";
import ShareButtons from "@/components/ui/ShareButtons";
import revalidationPaths from "@/revalidation/paths";

export const revalidate = 3600

export async function generateStaticParams() {
  
  const res = await getAllArticlesSlug();
  if (!res.success) notFound(); 

  return res?.data?.map((article) => {
    return { params: { slug: [article.createdAt, article.slug] } };
  }).slice(0,5);
}

export async function generateMetadata({ params }) {
  try {
  const response = await getArticleMetadata(params.slug[0], params.slug[1]);
  
  if (!response.success) {
    
    return notFound();
  }

  const pageData = await response?.data;
  // Returning an object here will make it available in `pageProps`
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.tags,
    images: [
      {
        url: pageData.image, // Must be an absolute URL
        width: 600,
        height: 700,
      },
    ],
    openGraph: {
      title: `${pageData.title}`,
      description: pageData.description,
      images : [
        {
          url: pageData.image, // Must be an absolute URL
          width: 600,
          height: 700,
        },
      ],
      siteName: 'JobPravah.com',
      url:  `${process.env.NEXT_PUBLIC_BASE_URL}${revalidationPaths.ARTICLE}/${params.slug[0]}/${params.slug[1]}`,
      type: 'article',
    },
    twitter: {
      card: `${pageData.title}`,
      //site: '@yourtwitterhandle', // Replace with your Twitter handle
      title: `${pageData.title}`,
      description: `${pageData.description}`,
      image: pageData.image, // Use a specific Twitter image or fallback to the general image
      creator: pageData.description
    },
  };
  }catch (error){
    console.log(error)
    return notFound()
  }
}

const Articles = async ({ params }) => {
  if(params.slug.length!==2) return notFound()


  const response = await getArticle(params.slug[0], params.slug[1]);
  const [createdAt, slug,] = params.slug

  if (!response.success) return notFound();

  const { title, tags, content, updatedAt } = await response?.data;

  return (
    <div className="p-10 max-sm:p-5">
      <div className="border-b-2 mb-20 max-h-full">
        <h1 className="title font-semibold text-4xl max-md:text-3xl max-sm:text-3xl  py-10 text-gray-800 capitalize ">
          {title}
        </h1>
        <div className="para py-2 text-gray-700 font-normal text-sm flex justify-between">
          <span>
            <DateFormateElement date={updatedAt} />
          </span>
          <span className=" ">
            <ShareButtons width={"w-5"} height={"h-5"}  suppressHydrationWarning />
          </span>
        </div>
      </div>

      <MarkdownRenderer content={content} />

      <div className="mt-10  rounded-lg">
        <h1 className=" text-lg font-semibold group-hover:text-gray-950 text-gray-700 border-b border-gray-300 p-2">
          Share with your friends!
          </h1>
          <div className=" p-4 w-fit">
            <ShareButtons width={"w-9"} height={"h-9"} />
          </div>
      </div>

      <div className="mt-10  rounded-lg">
        <h1 className=" text-lg font-semibold group-hover:text-gray-950 text-gray-700 border-b border-gray-300 p-2">
          Join Our Social Media Group Today!
          </h1>
          <div className=" p-4 w-fit">
            <SocialButtons />
          </div>
      </div>

      <div className="py-2 mt-14 flex flex-wrap gap-2 items-center text-lg">
        {
          tags?.map((tag, index) => <TagRenderer tag={tag} key={index}/> )
        }
      </div>
      <Suggetions tags={tags} slug={slug} createdAt={createdAt} />
    </div>
  );
};

export default Articles;
