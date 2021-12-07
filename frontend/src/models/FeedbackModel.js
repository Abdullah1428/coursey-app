class FeedbackModel{
    constructor(){
        this.userId = 0
        this.courseId = 0
        this.text = "Crazy course!! Had no time to sleep at all when I took this. Would recommend if you like to hurt yourself."
        this.rating = 5
    }

    setFeedback = (userFeedback) => {
        this.userId = userFeedback.id
        this.courseId = userFeedback.courseId
        this.text = userFeedback.text
        this.rating = userFeedback.rating
        console.log(this.text)
    }

    getFeedback = () => {
        let userId = this.userId
        let courseId = this.courseId
        let text = this.text
        let rating = this.rating

        let userFeedback = {userId, courseId, text, rating}

        return userFeedback
    }
}

export default FeedbackModel;