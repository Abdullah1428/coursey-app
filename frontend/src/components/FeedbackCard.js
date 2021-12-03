import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

const FeedbackCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>ChillUserStudent</Card.Title>
        <Card.Text>
          Crazy course!! Had no time to sleep at all when I took this. Would
          recommend if you like to hurt yourself.
        </Card.Text>
        <Card.Text>Rating: 3/5</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FeedbackCard
