import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillPostcardHeartFill } from "react-icons/Bs";

const Dashboard = () => {
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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzU3YWVjYzRkNmYxYmVjODhlMTM5ZiIsImlhdCI6MTY5ODY0OTE3NiwiZXhwIjoxNjk4NzM1NTc2fQ.4ALXwbLEzvAE4WF0D2O_1xO9CdJGrWOVddx932CbI0c"; // Replace with your API key

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
        window.location.reload();

        navigate("/Viewblog");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to upload");
        window.location.reload();
      });
  }

  return (
    <>
      <div className="add-blog-button">
        <button className="publish-button-dashboard">
          <Link to="/Viewblog">View Posts</Link>
        </button>
        <button
          className="logout-viewblog"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/Signin");
          }}
        >
          SIGN OUT
        </button>
      </div>

      <div className="dashboard">
        <h6 className="login-here">DASHBOARD</h6>
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
          <input
            type="text"
            name="content"
            placeholder="Enter Description"
            className="input-dashboard-description"
            onChange={handleInput}
          />
          <button className="publish-button-dashboard">Add Blog</button>
        </form>
      </div>
    </>
  );
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzU3YWVjYzRkNmYxYmVjODhlMTM5ZiIsImlhdCI6MTY5ODAwMzgzOCwiZXhwIjoxNjk4MDkwMjM4fQ.W5hA1-GTeCE_69T0tmeAGPdiQeTVvl6Zn_i7Pj_4Cfw

export default Dashboard;
