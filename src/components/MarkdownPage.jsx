import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPage({ file }) {

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then(setContent);
  }, [file]);

  return (
    <div className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}