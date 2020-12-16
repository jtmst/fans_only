import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Feed from './Feed';

function App(props) {
  const [imageB64, setImageB64] = useState(null);
  const [postFeed, setPostFeed] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setPostFeed(result);
      });
  });

  // Converts file to base64 and handles events for image upload
  let _handleReaderLoaded = (readerEvent) => {
    let binaryString = readerEvent.target.result;
    setImageB64(btoa(binaryString));
  };

  let imageChange = (e) => {
    console.log('File incoming: ', e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  let imageSubmit = (e) => {
    e.preventDefault();
    let payload = { image: imageB64 };

    fetch(`http://localhost:1337/img`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        image: imageB64,
        timestamp: new Date().toUTCString(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == 0) {
          alert("That isn't a fan");
        }
      });
  };

  return (
    <div>
      <header id="header">
        <h1 className="main-logo">FansOnly</h1>

        <form
          className="submit-form"
          onChange={(e) => imageChange(e)}
          onSubmit={(e) => imageSubmit(e)}
        >
          <input
            type="file"
            name="image"
            id="file"
            accept=".jpeg, .png, .jpg"
          ></input>
          <input type="submit" />
        </form>
      </header>
      <div className="feed-container">
        <h1 id="posts-header">Posts</h1>
        <Feed postFeed={postFeed} />
      </div>
    </div>
  );
}

export default App;
