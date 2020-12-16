import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Post(props) {
  return (
    <div className="individual-post">
      <img src={'data:image/jpg;base64,' + props.indPost.image}></img>
      <p className="individual-text">{props.indPost.timestamp.slice(0, 17)}</p>
      <p className="individual-text" id="likes">
        {' '}
        {
          <FavoriteBorderIcon
            style={{ backgroundColor: 'white', paddingTop: '2rem' }}
          />
        }
        {props.indPost.likes} Reactions
      </p>
    </div>
  );
}

export default Post;
