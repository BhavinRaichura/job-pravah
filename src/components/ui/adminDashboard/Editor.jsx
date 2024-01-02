"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import styles from "@/styles/NewForm.module.css";
import { states } from "@/utils/stateList";

const Editor = ({ formName, formSubmitHandler, ...props }) => {
  const router = useRouter();

  const [title, setTitle] = useState(props.title || "");
  const [tagsList, setTagsList] = useState(props.tags || []);
  const [tag, setTag] = useState("");
  const [content, setContent] = useState(props.content || "");
  const [description, setDescription] = useState(props.description || "");
  const [image, setImage] = useState(props.image || "");
  const [state, setState] = useState(props.state || "");
  const [lastdate, setLastdate] = useState(props.lastDate || "");
  
  const [formProcess, setFormProcess] = useState(false);

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
    //console.log("editor post api call")
    setFormProcess(true);

    try {
      const response = await formSubmitHandler({
        slug: props.slug,
        title,
        tags: tagsList,
        image,
        description,
        content,
        createdAt: props.createdAt,
        lastDate: lastdate,
        state: state
      });

      if (!response.success) {
        throw new Error("form not submited: ", response.error);
      }
      console.log(response);
      alert("Successfully submitted");

      router.replace("/admin");
    } catch (error) {
      alert("Error: " + error.message);
      throw new Error("form not submited: ", error.message);
    } finally {
      setFormProcess(false);
    }
  };



  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.main}>
        <div className="mx-2 my-32">
          <h1 className="text-5xl font-light text-center my-5">{formName}</h1>
          <p className=" text-sm font-light text-center">
            {" "}
            Put all the details below
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Title</label>
          <textarea
            name="title"
            id="title"
            rows={2}
            className={styles.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="title"
            required
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={3}
            className="w-full outline-none  p-2 border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
            onChange={(e) => {
              setDescription(e.target.value);
             
            }}
            value={description}
            placeholder="description"
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="imageURL">Image</label>
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

        <div className="flex gap-5 flex-wrap m-2 p-2 w-full">
          <div>
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              onChange={(e) => setState(e.target.value)}
              className="p-2 rounded-md bg-gray-100 border"
              value={state}
            >
              <option value="">Select State</option>
              {states.map((state, i) => (
                <option key={i} value={state} className="p-1">
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <label htmlFor="lastdate">Last Date</label>
            <input
              type="date"
              name="lastdate"
              id="lastdate"
              className="w-96 p-2 outline-none border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500"
              onChange={(e) => {
                setLastdate(e.target.value);
              }}
              value={lastdate}
              placeholder="Last date"
            />
          </div>

          <div className=" w-full">
            <label htmlFor="tags">Tags</label>
            <div className=" flex gap-2 items-center">
              <input
                type="text"
                name="tags"
                id="tags"
                className=" p-2 outline-none border border-lime-100 focus:border-lime-500 rounded-md hover:border-lime-500 w-96"
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
          </div>
        </div>

        <div className="  flex flex-wrap  justify-start gap-2 m-2 p-2">
          {tagsList.map((data, key) => {
            return (
              <li
                key={key}
                className="  px-2 py-1 bg-gray-800 list-none rounded hover:bg-gray-950 m-1 text-white "
              >
                <span>{data}</span>
                <span onClick={() => handleRemoveTag(data)}>
                  <IoIosRemoveCircle className=" cursor-pointer inline-block mx-1" />
                </span>
              </li>
            );
          })}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            rows={"20"}
            cols={"20"}
            className={styles.content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            placeholder="Start writing from here"
            required
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="checkbox"
            name="check"
            id="check"
            className={styles.radio}
            required
          />
          <label htmlFor="check" className={styles.radioLabel}>
            Please make sure you have filled all the inputs
          </label>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.button}
            type="submit"
            value={formProcess ? "Submitting..." : "Submit"}
            disabled={formProcess ? true : false}
          />
        </div>
      </div>
    </form>
  );
};

export default Editor;
