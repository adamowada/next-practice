import { useRouter } from "next/router";
import { MongoClient } from "mongodb";

function BlogDetails() {
  const router = useRouter();

  return <h1>The Blog Details Page</h1>;
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

  const blogPosts = await blogPostsCollection.find({}, { slug: 1 }).toArray(); //only return the SLUG
}

export async function getStaticProps() {}

export default BlogDetails;
