import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/styles/MarkdownRenderer.module.css";

const MarkdownRenderer = ({ content }) => {
  return (
    <div className={styles.article}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
};

export default MarkdownRenderer;
