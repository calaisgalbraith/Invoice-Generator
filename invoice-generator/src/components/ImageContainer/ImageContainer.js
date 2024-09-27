import React, { useState } from 'react';
import './ImageContainer.css';

function ImageContainer() {
    const [imageSrc, setImageSrc] = useState(null);
    function handleChange(e) {
      let newImageSrc = imageSrc
      if (e.target.files.length > 0) { // if user opens files but doeesn't upload one
        newImageSrc = URL.createObjectURL(e.target.files[0])
      }
      setImageSrc(newImageSrc);
    }

  return (
    <div className="imgBox">
        <input type="file" onChange={handleChange}></input>
        <p>Upload Image</p>
        {imageSrc &&  <img src={imageSrc} />}
    </div>
  );
}

export default ImageContainer;
