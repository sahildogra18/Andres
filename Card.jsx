import React from "react";

const Card = (props) => {
  return (
    <div className="post-card">
      <h3 className="title">{props.title}</h3>
      <p className="b">{props.body}</p>
    </div>
  );
};

export default Card;
