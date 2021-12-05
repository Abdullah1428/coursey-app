import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CourseCard = (props) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{props.details.code}</Card.Title>
                <Card.Text>{props.details.name}</Card.Text>
                <Card.Text>Your Rating: 4/5</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CourseCard;