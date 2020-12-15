import React, { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css"

function App(props) {

  const [imageB64, setImageB64] = useState(null)


  // Converts file to base64
  let _handleReaderLoaded = (readerEvent) => {
    let binaryString = readerEvent.target.result
    setImageB64(btoa(binaryString))
  }

  let imageChange = (e) => {
    console.log("File incoming: ", e.target.files[0])
    let file = e.target.files[0]

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded
      reader.readAsBinaryString(file)
    }
  }

  let imageSubmit = (e) => {
    e.preventDefault()
    let payload = { image: imageB64 }
    // console.log(imageB64)

    fetch(`http://localhost:1337/img`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image: imageB64,
        timestamp: new Date().toUTCString(),
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success: ', data)
      })

  }

  return (
    <div>
      <header>
        <h1 className="main-logo">FansOnly</h1>
      </header>
      <form onChange={(e) => imageChange(e)} onSubmit={(e) => imageSubmit(e)}>
        <input
          type="file"
          name="image"
          id="file"
          accept=".jpeg, .png, .jpg"
        ></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App