"use client";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";


const Editor = ({ formName, formSubmitHandler, ...props }) => {

  const [title, setTitle] = useState(props.title || "");
  const [tagsList, setTagsList] = useState(props.tags || []);
  const [tag, setTag] = useState("");
  const [content, setContent] = useState(props.content || "");
  const [description, setDescription] = useState(props.description || "");
  const [image, setImage] = useState(props.image || "");

  const router = useRouter();

  const handleTags = (e) => {
    if (tag !== "") {
      setTagsList([...tagsList, ...tag.split(" ")]);
      setTag("");
    }
  };

  const handleRemoveTag = (tagName) => {
    setTagsList((e) => e.filter((t) => t !== tagName));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = await formSubmitHandler({
        slug: props.slug,
        title,
        tags: tagsList,
        image,
        description,
        content,
        createdAt: props.createdAt
      });
      console.log(data);
      alert("Successfully submitted");
      router.replace("/admin");
    } catch (error) {
      console.error(error.message);
      alert("Error: " + error.message);
      //throw new Error("failed")
    }
  };


  return (
    <form onSubmit={handleSubmit} className=" p-2 w-2/3 m-auto max-md:w-full">
      <div className="mx-2 my-32">
        <h1 className="text-5xl font-light text-center my-5">
          {formName}
        </h1>
        <p className=" text-sm font-light text-center">
          {" "}
          Put all the details below
        </p>
      </div>
      <div className="m-2 ">
        <textarea
          name="title"
          id="title"
          rows={2}
          className="w-full  min-h-max overscroll-auto overflow-none  outline-none  font-semibold text-3xl p-2 border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="title"
          required
        ></textarea>
      </div>
      <div className="m-2">
        <textarea
          name="description"
          id="description"
          rows={3}
          className="w-full outline-none  p-2 border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
          onChange={(e) => {
            setDescription(e.target.value);
            //console.log(ref.current.style)
          }}
          value={description}
          placeholder="description"
        ></textarea>
      </div>
      <div className="m-2">
        <input
          type="url"
          name="imageURL"
          id="imageURL"
          className="w-full p-2 outline-none border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          placeholder="Put image URL here.."
        />
      </div>
      <div className="m-2 flex gap-2 items-center">
        <input
          type="text"
          name="tags"
          id="tags"
          className="w-full p-2 outline-none border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
          onChange={(e) => {
            setTag(e.target.value);
          }}
          value={tag}
          placeholder="Add Tag"
        />
        <span
          onClick={handleTags}
          className="hover:text-lime-500 cursor-pointer text-gray-500 w-8 h-8"
        >
          <IoMdAddCircle className="w-full h-full" />
        </span>
      </div>
      <div className="  flex flex-wrap  justify-start ">
        {tagsList.map((data, key) => {
          return (
            <li
              key={key}
              className="  px-2 py-1 bg-gray-100 list-none rounded hover:bg-gray-200 m-1 "
            >
              <span>{data}</span>
              <span onClick={() => handleRemoveTag(data)}>
                <IoIosRemoveCircle className=" cursor-pointer inline-block mx-1" />
              </span>
            </li>
          );
        })}
      </div>
      <div className="m-2">
        <textarea
          name="content"
          id="content"
          rows={"20"}
          className="w-full h-96 outline-none  p-2 border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
          cols={"20"}
          onChange={(e) => {
            setContent(e.target.value)
          }}
          value={content}
          placeholder="Start writing from here"
          required
        ></textarea>
      </div>
      <div className="mx-2 my-5">
        <input
          type="checkbox"
          name="check"
          id="check"
          className=" p-2 aria-checked:bg-lime-500 text-lime-500 checked:fill-lime-500"
          required
        />
        <label htmlFor="check" className="p-2">
          Please make sure you have filled all the inputs
        </label>
      </div>
      <button
        type="submit"
        className=" bg-lime-500 hover:bg-lime-600 px-4 py-2 text-white rounded-lg"
        value="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Editor;
