import {useEffect, useEffect}from 'react'
function Thumbnail({ imageUrl, maxWidth }) {
    const [imageWidth, setImageWidth] = useState(0);
  
    useEffect(() => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setImageWidth(img.width);
      };
    }, [imageUrl]);
  
    const objectFitClass = imageWidth > maxWidth ? "object-cover" : "object-fit";
  
    return (
      <div className="w-64 h-96 bg-gray-300">
        <img
          src={imageUrl}
          alt="Responsive Image"
          className={`h-full w-full ${objectFitClass}`}
        />
      </div>
    );
  }