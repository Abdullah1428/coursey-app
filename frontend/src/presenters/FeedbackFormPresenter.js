import { useEffect, useState } from "react"
import FeedbackFormView from "../views/FeedbackFormView"

const FeedbackFormPresenter = (props) =>{
    const [feedbackText, setFeedbackText] = useState("")
    
    useEffect(() => {
        setFeedbackText(props.feedbackModel.getFeedback())
    }, [])
    
    return(
        <>
        <FeedbackFormView onText={(txt) => setFeedbackText(txt)} onSubmit={()=>props.feedbackModel.setFeedback({...props.feedbackModel, text:feedbackText})}/>
        </>
    )
}

export default FeedbackFormPresenter;