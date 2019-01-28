import { useState, useEffect } from "react";

export default function useViewport() {
  const [viewport, setViewport] = useState();

  const handleResize = () => {
    if (window.innerWidth > 1280) {
      setViewport("extra-large");
    } else if (window.innerWidth > 816) {
      setViewport("large");
    } else if (window.innerWidth > 664) {
      setViewport("medium");
    } else {
      setViewport("small");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return viewport;
}
