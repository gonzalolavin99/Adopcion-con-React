import React from "react";
import Tags from "./Tags";
import Card from "react-bootstrap/Card";

const MyCard = ({ imgDir, dogName, dogCap, backgroundColor, textoBadge }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={imgDir}
          style={{ height: "250px", objectFit: "cover" }} // Ajusta el tamaño y el recorte de la imagen
        />
        <Card.Body>
          <Card.Title>{dogName}</Card.Title>
          <Card.Text>{dogCap}</Card.Text>
          <Tags backgroundColor={backgroundColor} textoBadge={textoBadge}></Tags>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
