import React from 'react';
import PropTypes from 'prop-types';
import fetchImages from '../../api/api';
import styles from '../../styles/styles.css';

function ImageGalleryItem({ data, getDataOfBigElement }) {
  return (
    <>
      {data.map(elem => (
        <li
          key={elem.id}
          className="ImageGalleryItem"
          onClick={() => getDataOfBigElement(elem.largeImageURL, elem.tags)}
        >
          <img
            src={elem.webformatURL}
            alt={elem.tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string,
    }),
  ),
  getDataOfBigElement: PropTypes.func.isRequired,
  // neutral: PropTypes.number,
};
ImageGalleryItem.defaultProps = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL:
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/error-404-1862483.jpg?itok=MxyJKavN',

      webformatURL:
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/error-404-1862483.jpg?itok=MxyJKavN',
    }),
  ),
};

export default ImageGalleryItem;
