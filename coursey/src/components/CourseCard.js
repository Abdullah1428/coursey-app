import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CourseCard = () => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>DH2642</Card.Title>
                <Card.Text>Interaction programming and the Dynamic Web</Card.Text>
                <Card.Text>Your Rating: 4/5</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CourseCard;