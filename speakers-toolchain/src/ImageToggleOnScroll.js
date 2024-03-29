import React, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
  const [inView, setInView] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = () => {
    setInView(isInView());
  };
  return <img src={inView ? secondaryImg : primaryImg} alt="" ref={imageRef} />;
};

export default ImageTogglerOnScroll;
