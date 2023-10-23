import React from 'react'
import Tags from './Tags'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const MyCard = ({imgDir, dogName, dogCap}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgDir}/>
      <Card.Body>
        <Card.Title>{dogName}</Card.Title>
        <Card.Text>
          {dogCap}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  </div>
  )
}

export default MyCard