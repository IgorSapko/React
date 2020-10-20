import React from 'react';
import styles from '../../styles/styles.css'

export default function ImageGallery({  children }) {
  return (
    <ul className="ImageGallery">
  {children}
</ul>
   
  );
}

