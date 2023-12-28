import PostsTable from "./component";

export const metadata = {
  title: "Manage articles",
};

const page = async () => {
  

  return (
    <div>
    <h1 className=" text-center font-light text-5xl my-20">Posts</h1>
      <PostsTable />
    </div>
  );
};

export default page;
