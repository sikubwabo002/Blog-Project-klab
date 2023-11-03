import React, { useEffect, useState } from "react";
// import { Card } from '../component/card'
import { LuLoader } from "react-icons/lu";
import Dashboardcard from "../component/Dashboardcard";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { bsFillPostcardHeartFill } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";
import { BiSolidLogOut } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { FaComments } from "react-icons/fa";

// import { Card } from '../component/card'

const Viewblog = () => {
  const [commentData, setCommentData] = useState([]);
  const [userData, setUserData] = useState([]);

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

  // Fetch total users

  fetch("https://node-app-plsi.onrender.com/api/klab/user/read")
    .then((response) => response.json())
    .then((data) => {
      console.log("users", data);
      setUserData(data.data);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });

  // Fetch total comments
  fetch("https://node-app-plsi.onrender.com/api/klab/comment/read")
    .then((response) => response.json())
    .then((data) => {
      // console.log("comments", data);
      setCommentData(data.data);
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });

  console.log("THIS MY POSTS", posts);
  const numberOfPosts = posts.length;

  const userNumber = userData.length;
  console.log("users", userNumber);

  const commentLength = commentData.length;
  console.log("comment", commentLength);

  return (
    <div className="dashboard-all-div">
      <div className="numbers">
        <div className="number-dashboard">
          <i className="icons-i-dashboard">
            <BiSolidDashboard className="user-icon-dashboard" />
            DashBoard
          </i>
        </div>

        <div className="number-users">
          <Link to="/LineCharts">
            <i className="icons-i">
              <BiSolidBarChartSquare className="user-icon" />
              Analytics
            </i>
          </Link>
        </div>

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
            Number of Users<span className="post-number">{userNumber}</span>
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <FaComments className="user-icon" />
            Number of Comments
            <span className="post-number">{commentLength}</span>
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <BsFillPostcardHeartFill className="user-icon" />
            <span className="icons-i">
              {" "}
              Number of Posts
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
              views={post.views}
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
