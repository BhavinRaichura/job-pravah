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

export const revalidate = 3600

export async function generateStaticParams() {
  // Get all article slugs
  const articles = await getAllArticlesSlug();
  if (!articles) notFound(); // Not found error if no articles

  // Create array of objects for each article
  return articles.map((article) => {
    return { params: { slug: [article.createdAt, article.slug] } };
  });
}

export async function generateMetadata({ params }) {
  const response = await getArticleMetadata(params.slug[0], params.slug[1]);
  // console.log("params slug: ", params);
  if (!response) {
    //throw new Error(`No article found with the slug ${params.slug}`);
    throw new Error("404: URL Not Found");
    notFound();
  }
  const articleMetadata = await response.json();
  // Returning an object here will make it available in `pageProps`
  return {
    title: articleMetadata.title,
    description: articleMetadata.description,
  };
}

const Articles = async ({ params }) => {
  const response = await getArticle(params.slug[0], params.slug[1]);
  if (response.status === 500) throw new Error("cannot find article");

  const { title, tags, content, updatedAt } = await response.json();

  return (
    <div className="p-10 max-sm:p-5">
      <div className="border-b-2 mb-20 max-h-full">
        <h1 className="title font-semibold text-4xl max-md:text-3xl max-sm:text-3xl  py-10 text-gray-800 ">
          {title}
        </h1>
        <p className="para py-2 text-gray-700 font-normal text-sm">
          Last update: <DateFormateElement date={updatedAt} />
        </p>
      </div>

      <MarkdownRenderer content={content} />

      <div className="py-2 mt-14 flex flex-wrap gap-2 items-center text-lg">
        {
          tags?.map((tag, index) => <TagRenderer tag={tag} key={index}/> )
        }
      </div>
      <Suggetions tags={tags} slug={params.slug} />
    </div>
  );
};

export default Articles;
