import React, { useEffect, useState } from "react";
// import { Card } from '../component/card'
import { LuLoader } from "react-icons/lu";
import Dashboardcard from "../component/Dashboardcard";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/Fa";
import { BsFillPostcardHeartFill } from "react-icons/Bs";
import { AiFillFolderAdd } from "react-icons/Ai";
import { BiSolidLogOut } from "react-icons/Bi";
import { BiSolidDashboard } from "react-icons/Bi";
import { BiSolidBarChartSquare } from "react-icons/Bi";
import { FaComments } from "react-icons/Fa";

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
            Number of Users :
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <FaComments className="user-icon" />
            Number of Comments :
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <BsFillPostcardHeartFill className="user-icon" />
            <span className="icons-i">
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
