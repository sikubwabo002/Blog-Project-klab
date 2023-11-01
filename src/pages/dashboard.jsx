import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillPostcardHeartFill } from "react-icons/Bs";
import { FaUsers } from "react-icons/Fa";
import { AiFillFolderAdd } from "react-icons/Ai";
import { BiSolidLogOut } from "react-icons/Bi";
import { BiSolidDashboard } from "react-icons/Bi";
import { BiSolidBarChartSquare } from "react-icons/Bi";
import { FaComments } from "react-icons/Fa";

const Dashboard = () => {
  const [commentData, setCommentData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Signin");
    }
  }, []);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    blogImage: "",
    title: "",
    content: "",
  });
  const handleInput = (event) => {
    if (event.target.name === "blogImage") {
      setPost({ ...post, blogImage: event.target.files[0] });
    } else {
      setPost({ ...post, [event.target.name]: event.target.value });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("blogImage", post.blogImage);
    formData.append("title", post.title);
    formData.append("content", post.content);

    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzQxMjRkYzg3YTk2ZjI0NmY3YzcyNSIsImlhdCI6MTY5ODg0ODQ4NywiZXhwIjoxNjk4OTM0ODg3fQ.ou7pRR4D5k11HQtx9TBe2Itk45_56kMr5hzMvy3aMLs"; // Replace with your API key

    axios
      .post(
        "https://node-app-plsi.onrender.com/api/klab/blog/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Uploaded successfully");
        navigate("/Viewblog");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to upload");
        // window.location.reload();
      });
  }

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
  }, []);

  console.log("THIS MY POSTS", posts);
  const numberOfPosts = posts.length;

  const commentLength = commentData.length;
  console.log("comment", commentLength);

  const userNumber = userData.length;
  console.log("users", userNumber);

  return (
    <div className="dashboard-all-div">
      <div className="numbers">
        <div className="number-dashboard">
          <Link to="/Viewblog">
            <i className="icons-i-dashboard">
              <BiSolidDashboard className="user-icon-dashboard" />
              DashBoard
            </i>
          </Link>
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
            Number of Users
            <span className="post-number">{userNumber}</span>
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <FaComments className="user-icon" />
            Number of Comments :
            <span className="post-number">{commentLength}</span>
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
      <div className="dashboard">
        <h6 className="login-here">ADD POST</h6>
        <form action="#" className="form-dashboard" onSubmit={handleSubmit}>
          <label className="choose-an-image"> Choose an Image</label>

          <input
            type="file"
            name="blogImage"
            id="image"
            className="input-dashboard"
            onChange={handleInput}
          />
          <input
            type="text"
            name="title"
            id="heading"
            placeholder="Enter Heading title"
            className="input-dashboard"
            onChange={handleInput}
          />
          <textarea
            type="text"
            name="content"
            placeholder="Enter Description"
            className="input-dashboard-description"
            onChange={handleInput}
          />
          <button className="publish-button-dashboard">Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
