import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function LoaderComponent() {
  return <Loader type="Circles" color="#00BFFF" height={480} width={480} />;
}
