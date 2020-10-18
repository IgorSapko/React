import React, { Children } from 'react';
import PropTypes, { number } from 'prop-types';
import styles from '../../styles/styles.css'


 const Button = function({callback}){
   
    return (
        <button className ='Button' type='button' onClick = {callback}>Load more...</button>
    )
};
export default Button
Button.propTypes = {
    callback: PropTypes.func.isRequired,
  };
  