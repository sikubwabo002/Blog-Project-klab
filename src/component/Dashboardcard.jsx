import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboardcard = ({ id, image, title, content, author, views }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [editedImage, setEditedImage] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];
    setEditedImage(file);
  }

  function handleUpdate() {
    const formData = new FormData();
    formData.append("title", editedTitle);
    formData.append("content", editedContent);

    // Check if editedImage is not null before appending it to the formData
    if (editedImage) {
      formData.append("blogImage", editedImage);
    }

    axios
      .put(
        `https://node-app-plsi.onrender.com/api/klab/blog/update/${id}`,
        formData
      )
      .then(() => {
        alert("Post updated!");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
        alert("Failed to update Post");
      });
  }

  function deleteRecord() {
    axios
      .delete(`https://node-app-plsi.onrender.com/api/klab/blog/delete/${id}`)
      .then(() => {
        alert("Post Deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
        alert("Failed to delete Post");
        window.location.reload();
      });
  }

  return (
    <div>
      <div className="dashboard-card">
        <p>{views}</p>
        {isEditing ? (
          <input
            type="file"
            onChange={handleImageChange}
            className="input-dashboard"
            accept="image/*" // Allow only image files
          />
        ) : (
          <img src={image} alt="post" className="post-image" />
        )}

        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="input-dashboard"
            placeholder="Title"
          />
        ) : (
          <h1 className="heading">{title}</h1>
        )}

        <h2 className="publisher">{author} </h2>
        {isEditing ? (
          <textarea
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="input-dashboard"
            placeholder="Content"
          />
        ) : (
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: content.substring(0, 100) }}
          ></p>
        )}
        {isEditing ? (
          <button className="update" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="update" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="delete" onClick={deleteRecord}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Dashboardcard;
