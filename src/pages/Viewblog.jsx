import React, { useEffect, useState } from "react";
// import { Card } from '../component/card'
import { LuLoader } from "react-icons/lu";
import Dashboardcard from "../component/Dashboardcard";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/Fa";
import { BsFillPostcardHeartFill } from "react-icons/Bs";
import { AiFillFolderAdd } from "react-icons/Ai";
import { BiSolidLogOut } from "react-icons/Bi";

// import { Card } from '../component/card'

const Viewblog = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Signin");
    }
  }, []);
  const navigate = useNavigate();

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
  const numberOfPosts = posts.length;
  return (
    <div>
      <div className="add-blog-button">
        {/* <button className="publish-button-dashboard">
          <Link to="/dashboard">Add Post</Link>
        </button> */}
        {/* <button
          className="logout-viewblog"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/Signin");
          }}
        >
          SIGN OUT
        </button> */}
      </div>

      <div className="numbers">
        <div className="number-users">
          <Link to="/dashboard">
            <i className="icons-i">
              <AiFillFolderAdd className="user-icon" />
              Add Post
            </i>
          </Link>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <FaUsers className="user-icon" />
            Number of Users
          </i>
        </div>

        <div className="icon-container">
          <i className="icons-i">
            <BsFillPostcardHeartFill className="post-icon" />
            <span className="icon-text">
              {" "}
              Number of Posts:{" "}
              <span className="post-number">{numberOfPosts}</span>
            </span>
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <BiSolidLogOut
              className="user-icon"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/Signin");
              }}
            />
            LogOut
          </i>
        </div>
      </div>

      <section className="view-container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Dashboardcard
              key={index}
              id={post._id}
              title={post.title}
              image={post.blogImage}
              author={post.author}
              content={post.content}
              views
            />
          ))
        ) : (
          <p>
            <LuLoader />
          </p>
        )}
      </section>
    </div>
  );
};

export default Viewblog;
