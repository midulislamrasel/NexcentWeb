"use client"

import { useState, useEffect } from 'react';

const useImageDimensions = (imagePath) => {
  const [imageDimensions, setImageDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, [imagePath]);

  return imageDimensions;
};

export default useImageDimensions;
