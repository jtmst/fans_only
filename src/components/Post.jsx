import React, { useState, useEffect } from 'react';

function Post(props) {
  return (
    <div className="individual-post">
      <p className="individual-text">{props.indPost.timestamp}</p>
      <img src={'data:image/jpg;base64,' + props.indPost.image}></img>
      <p className="individual-text">{props.indPost.likes}</p>
    </div>
  );
}

export default Post;
