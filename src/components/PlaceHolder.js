'use client'
import React from 'react';
import Card from 'react-bootstrap/Card';

function PlaceHolder() {
  return (
    <Card  
    className='CardHolder'
    bg='dark'
    border = "info" style={{
         width: '16.5%',
         height: '66%',
         marginTop: '1.5rem',
     }}>

  

      <Card.Body>

      </Card.Body>
    </Card>
  );
}

export default PlaceHolder;