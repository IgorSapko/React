import React, { Children } from 'react';
import PropTypes, { func, number } from 'prop-types';
import styles from '../../styles/styles.css';

const Modal = function ({ src, descr, closeWindowByClick, closeWindowByESC }) {
  return (
    src && (
      <div
        className="Overlay"
        onKeyDown={closeWindowByESC(event)}
        onClick={closeWindowByClick}
      >
        <div className="Modal">
          <img src={src} alt={descr} />
        </div>
      </div>
    )
  );
};

export default Modal;

Modal.propTypes = {
  src: PropTypes.string,
  descr: PropTypes.string,
  closeWindowByClick: PropTypes.func.isRequired,
  closeWindowByESC: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  src: '',
  descr: 'trere is should be description of this photo here',
};
