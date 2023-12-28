
import Pagine from "@/components/ui/Pagine";
import PosterUILarge from "@/components/ui/PosterUILarge";
import SearchBar from "@/components/ui/SearchBar";
import { getSeachResult } from "./serverAction";

export default async function Home({searchParams }) {
  const query = searchParams.q || ""
  const page = Number(searchParams.page) || 1
  //const reqRecent = await fetch(`.../api/article?page=${page}&q=${query}`,{cache:'no-store'})
  const data = await getSeachResult({query, page})

  return (
    <main className="p-5">
      <div className="">
        <SearchBar searchedQuery={query}/>
        <hr className="my-5" />
        <div className="">
          {
            data && data?.post?.length > 0 ? (
              data?.post.map((item, key) => (
                <div key={key} className="py-2 ">
                  <PosterUILarge key={key} title={item.title} description={item.description} createdAt={item.createdAt} updatedAt={item.updatedAt} image={item.image} tags={item.tags} slug={item.slug} />
                </div>
              ))
            ) : (
              <p>No articles found</p>
            )
          }
        </div> 
        <hr className="my-5" />
        <div>
          <Pagine currentPage={page} totalPage={ Math.ceil(data?.totalCount / 10) || 1}  />
        </div>
      </div>
    </main>
  );
}


