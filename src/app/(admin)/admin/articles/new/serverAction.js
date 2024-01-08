"use server";

const { default: Post } = require("@/models/post");
const { connectToDB } = require("@/utils/db");
import revalidationPaths from "@/revalidation/paths";
import { revalidatePath } from "next/cache";

export async function createArticle({
  slug,
  title,
  description,
  tags,
  content,
  image,
  lastDate,
  state,
}) {
  try {
    await connectToDB();
    // chech is post is already exist
    // -- need to add a validation procedure -
    function getCurrentMonthYear() {
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1; // Get the current month (0-indexed, so we add 1)
      const year = currentDate.getFullYear(); // Get the current year
      // Format the month and year as MMYY
      const formattedDate = `${String(year).slice(-2)}${(month < 10 ? "0" : "") + month}`;
      return formattedDate;
    }

    const post = await Post.create({
      title,
      description,
      tags,
      content,
      image,
      lastDate,
      state,
      createdAt: getCurrentMonthYear(),
    });

    revalidatePath(revalidationPaths.ADMIN);
    revalidatePath(revalidationPaths.HOME);
    revalidatePath(revalidationPaths.ADMIN_POST);

    return {
      success: true,
      message: `Post Successfully added to database `,
      data: { title: post.title, slug: post.slug, createdAt: post.createdAt },
    };
  } catch (error) {
    return { success: false, error: error.message, data: {} };
  }
}
