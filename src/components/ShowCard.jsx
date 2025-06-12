import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function CardComponent({ title, text, image , isView=true, route }) {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(route); // Navigate to the given route
      };
    
  return (
    <Card className="m-0 p-0" style={{ width: "16rem"}}>
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Rating-{text}</Card.Text>
        {isView && <Button variant="primary" onClick={handleNavigation}>Learn More</Button>}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
