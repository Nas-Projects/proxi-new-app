// components/Icon.js
import React from 'react';

const Icon = ({ src, alt, text }) => {
  return (
    <div className="detail-tag">
      <img src={src} loading="lazy" alt={alt} className="icon-regular" />
      <div>{text}</div>
    </div>
  );
};

export default Icon;