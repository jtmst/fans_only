import React, { useState, useEffect } from 'react';
import Post from './Post';

function Feed(props) {
  const postFeed = props.postFeed;

  const renderPosts = (allPosts) => {
    return allPosts.map((post) => {
      return (
        <div className="feed-container">
          <Post indPost={post} />
        </div>
      );
    });
  };

  if (postFeed) {
    return <div>{renderPosts(postFeed)}</div>;
  } else {
    return <div></div>;
  }
}

export default Feed;
