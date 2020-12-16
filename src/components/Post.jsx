import React, { useState, useEffect } from 'react';

function Post(props) {
  return (
    <div className="individial-post">
      <p>{props.indPost.timestamp}</p>
      <img src={'data:image/jpg;base64,' + props.indPost.image}></img>
      <p>{props.indPost.likes}</p>
    </div>
  );
}

export default Post;
