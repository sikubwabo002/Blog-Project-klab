import React, { useEffect, useState } from "react";
import { Card } from "../component/card";
import Welcome from "./Welcome";
import { LuLoader } from "react-icons/lu";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(
        "https://node-app-plsi.onrender.com/api/klab/blog/read"
      );
      const res = await response.json();
      setPosts(res.data);
    };
    getAll();
  }, []);

  console.log("THIS MY POSTS", posts);
  return (
    <div>
      <section className="welcome-page">
        <Welcome />
      </section>

      <div className="grid_container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              key={index}
              id={post._id}
              title={post.title}
              image={post.blogImage}
              author={post.author}
              content={post.content}
              views={post.views}
              Comment={post.Comment}
            />
          ))
        ) : (
          <p>
            <LuLoader />
          </p>
        )}
      </div>
    </div>
  );
};
