import { Card, Button } from "react-bootstrap";

function CardComponent({ title, text, image }) {
  return (
    <Card style={{ width: "18rem" }}>
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
