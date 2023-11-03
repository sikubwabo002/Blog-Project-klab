import React from "react";
// import PostImage from '../assets/Bhpd8.jpg'
import { Link } from "react-router-dom";

export const Card = ({ id, image, title, content, firstname, lastname }) => {
  return (
    <div className="post">
      <img src={image} alt="post" className="post-image" />
      <h1 className="heading">{title.substring(0, 50)}</h1>
      <h2 className="publisher">
        {firstname} {lastname}{" "}
      </h2>

      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: content.substring(0, 50) }}
      ></p>
      <button className="read-more">
        <Link to={`/Readmore/${id}`}>READ MORE</Link>
      </button>
    </div>
  );
};
