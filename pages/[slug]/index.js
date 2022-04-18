import { Fragment } from "react";
import { MongoClient } from "mongodb";

import BlogItem from "../../components/blogItem/BlogItem";

function BlogDetails(props) {
  const {
    blog: { title, description, image, details },
  } = props;

  return (
    <Fragment>
      <h1>The Blog Details Page</h1>
      <div className="flex flex-col">
        <BlogItem
          title={title}
          description={description}
          image={image}
          details={details}
        />
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:test@cluster0.6ht51.mongodb.net/next-practice?retryWrites=true&w=majority"
  );

  const blogPostsCollection = client.db().collection("posts");

  const blogPosts = await blogPostsCollection.find({}, { slug: 1 }).toArray(); //only return the SLUG

  client.close();

  return {
    paths: blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    // fallback: false means it will 404 if no page
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blogID = context.params.slug;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:test@cluster0.6ht51.mongodb.net/next-practice?retryWrites=true&w=majority"
  );

  const blogPostsCollection = client.db().collection("posts");

  const blogPost = await blogPostsCollection.findOne({ slug: blogID });

  client.close();

  return {
    props: {
      blog: {
        title: blogPost.title,
        description: blogPost.description,
        details: blogPost.details,
        image: blogPost.image,
      },
    },
  };
}

export default BlogDetails;
