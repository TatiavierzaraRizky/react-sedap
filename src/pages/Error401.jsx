import React from 'react';
import ErrorPage from '../components/ErrorPage';

export default function Error400 (){
  return (
    <ErrorPage 
      judul = "401" 
      ket =""
      desc = "Your client has issued a malformed or illegal request. That's all we know." 
      gambar="/Error401.jpeg"
    />
  );
};