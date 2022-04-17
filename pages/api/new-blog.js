// backend node js code
// write server side code
// /api/new-blog

import { MongoClient } from "mongodb";

// async goes first in named function
async function handler(req, res) {
  // req.method, req.body
  if (req.method !== "POST") return;
  // object destructuring
  // image title description and details are values we want to save in our database
  const { image, title, description, details } = req.body;
  const slug = title.replaceAll(" ", "-").toLowerCase();
  if (!image || !title || !description || !details) return;
  const client = await MongoClient.connect(
    "mongodb+srv://admin:test@cluster0.6ht51.mongodb.net/next-practice?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postCollection = db.collection("posts");
  const result = await postCollection.insertOne({
    image,
    title,
    description,
    details,
    slug,
  });

  client.close();

  res.status(201).json({
    post: result,
    message: "Post Created",
  });
}

export default handler;
