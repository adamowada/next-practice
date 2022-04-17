import { Fragment } from "react";
import BlogForm from "../../components/blogForm/BlogForm";
import fetch from "node-fetch";

function AddBlog() {
  // send request to our backend api to save our blog to the backend
  const addBlogHandler = async (data) => {
    const response = await fetch("/api/new-blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <Fragment>
      <h1>Add Blog</h1>
      <BlogForm addBlogHandler={addBlogHandler} />
    </Fragment>
  );
}

export default AddBlog;
