import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillEye } from "react-icons/Ai";
import { AiFillDelete } from "react-icons/Ai";
import { AiTwotoneEdit } from "react-icons/Ai";
import axios from "axios";

const Readmore = (id) => {
  const { _id } = useParams();
  const [posts, setPosts] = useState([]);
  const [commentData, setCommentData] = useState("");
  // console.log("Comment", commentData);

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(
        `https://node-app-plsi.onrender.com/api/klab/blog/read/${_id}`
      );
      const res = await response.json();
      setPosts(res.data);
      // console.log("Comment", res.data.Comment); // Log the response to see its structure
    };
    getAll();
  }, [_id]);
  const Comments = posts.Comment;
  console.log("Comment", Comments);
  // const handleCommentChange = (e) => {
  //   setCommentData({
  //     ...commentData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const token = localStorage.getItem("token");
  console.log(_id);
  console.log(token);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const data = {
      content: commentData,
    };
    const response = fetch(
      `https://node-app-plsi.onrender.com/api/klab/comment/create/${_id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("Comment added successfully!");
          alert("Thanks for commenting");
          window.location.reload();
        } else {
          console.error("Failed to add comment");
          alert("Failed");
        }
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  function deleteRecord(id) {
    axios
      .delete(
        `https://node-app-plsi.onrender.com/api/klab/comment/delete/${id}`
      )
      .then(() => {
        alert("comment Deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
        alert("Failed to delete comment");
        // window.location.reload();
      });
  }

  return (
    <div>
      <div className="read-more-blog">
        <img src={posts.blogImage} alt="post" className="post-image-readmore" />
        <h1 className="heading"> {posts.title}</h1>
        <h2 className="publisher">{posts.author} </h2>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: posts.content }}
        ></p>

        <div className="views">
          <AiFillEye className="view-icon" />
          <span>{posts.views}</span>
        </div>

        <div className="comment">
          <form onSubmit={handleCommentSubmit}>
            <input
              placeholder="Enter Your comment"
              className="input-comment"
              name="content"
              value={commentData}
              onChange={(e) => {
                setCommentData(e.target.value);
              }}
              required
            />
            <button type="submit" className="comment-button">
              Comment
            </button>
          </form>
        </div>
        <h2 className="comment-heading">Added Comments</h2>

        {Comments &&
          Comments.map((comment) => (
            <div className="added-comments" key={comment.id}>
              <div className="edit-delete">
                <AiFillDelete
                  className="delete-icon-comment"
                  onClick={deleteRecord}
                />
                {/* <AiTwotoneEdit className="edit-icon-comment" /> */}
              </div>
              <div className="comment-profile-name">
                <img
                  src={comment.blogCommentor.profile}
                  alt=""
                  className="comment-image"
                />
                <h2 className="comment-name">
                  @{comment.blogCommentor.firstname}{" "}
                  {comment.blogCommentor.lastname}
                </h2>
              </div>

              <p className="comment-content">{comment.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Readmore;
