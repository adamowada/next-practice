import { Fragment } from "react";
import Head from "next/head";
import BlogItem from "../components/blogItem/BlogItem";

const BLOG_POSTS = [
  {
    id: 1,
    slug: "first-blog",
    title: "First Blog",
    image:
      "https://images.unsplash.com/photo-1650054097876-2dc03516eb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "first blog post lalala",
    details: "blog details go here",
  },
  {
    id: 2,
    slug: "second-blog",
    title: "Second Blog",
    image:
      "https://images.unsplash.com/photo-1650054097876-2dc03516eb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "second blog post lalala",
    details: "2nd blog blog details go here",
  },
];

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

  return {
    props: {
      blogPosts: BLOG_POSTS,
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
