'use client'
import React from 'react';
import Card from 'react-bootstrap/Card';

function NumberCard() {
  return (
    <Card  
    className='CardNumber'
    border = "success" style={{
         width: '20%',
         height: '20%',

     }}>

      <Card.Img 
      variant="top" 
      src="https://placehold.co/600x550" 
      style={{
        height: 'auto',
        width: 'auto',
      }}
      />

      <Card.Body>
        <Card.Title style={{
          textTransform: 'uppercase',
          textAlign: 'center',
          textSizeAdjust: 'auto',
        }}
        >Card Title</Card.Title>
        <hr/>
        <Card.Text style={{
          textAlign: 'center',
          textSizeAdjust: 'auto',

        }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default NumberCard;