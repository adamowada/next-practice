import { Fragment } from "react";
import Head from "next/head";
import BlogItem from "../components/blogItem/BlogItem";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1>Blog Page</h1>
      {props.blogPosts.map((blog) => (
        <div key={blog.id} className="flex flex-col">
          <BlogItem
            title={blog.title}
            image={blog.image}
            description={blog.description}
            details={blog.details}
            slug={blog.slug}
          />
        </div>
      ))}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  // Send request to a backend api
  // Read the file system
  // Securely connect to database with creditials

  const client = await MongoClient.connect(
    "mongodb+srv://admin:test@cluster0.6ht51.mongodb.net/next-practice?retryWrites=true&w=majority"
  );

  const blogPostsCollection = client.db().collection("posts");

  const blogPosts = await blogPostsCollection.find().toArray();

  client.close();

  return {
    props: {
      blogPosts: blogPosts.map((blog) => ({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        id: blog._id.toString(),
        slug: blog.slug,
      })),
    },
    revalidate: 3600, // Every hour, measured in seconds
  };
}

export default HomePage;

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   // Gives you access to the incoming request, headers etc

//   // context is an object that has the following keys it has params, these params are usually from these page's dynamic routes, access to the request and response objects, we can destructure the request and the response from the context. has the query string and lots more. can review data, resolve url, from the context

//   // Send request to a backend api
//   // Read the file system
//   // Securely connect to database with creditials

//   return {
//     props: {
//       blogPosts: BLOG_POSTS,
//     },
//   };
// }
