import Button from "@restart/ui/esm/Button";
import { Container, Form } from "react-bootstrap"
import Rating from "../components/Rating";

const FeedbackFormView = (props) => {
   return(
       <Container>
           <Rating />
           <Form>
               <Form.Label>Write Feedback Here:</Form.Label>
               <Form.Control as="textarea" rows={4} onChange={(e) => props.onText(e.target.value)}/>
           </Form>
           <Button onClick={() => props.onSubmit()}>Submit</Button>
       </Container>
   ) 
}

export default FeedbackFormView;