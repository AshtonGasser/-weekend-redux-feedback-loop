import { useSelector } from "react-redux";
import FeedbackReview from '../FeedbackReview/FeedbackReview'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Submit(){
   //const dispatch = useDispatch()
    //const submit = useSelector((store) => store.feedbackReducer)

   //console.log('submit', submit);
    const history = useHistory();
    //import data from store
    const reviewList = useSelector((store) => store.feedbackReducer);
    //const info = useSelector((store) => store.infoReducer);
    console.log("review", reviewList);

    const handleNext = () => {
        history.push("/");
      };

    return (
        <div>
          <div>
            <h1> FeedBack Review</h1>
          </div>
          <div>
            <p>Feelings: {reviewList.feeling}</p>
            <p>Understanding: {reviewList.understanding}</p>
            <p>Support: {reviewList.support}</p>
          </div>
          <p>See Results</p>
          <div>
            <p>comments</p>
            <h3>{reviewList.comment}</h3>
            </div>
            <div>
            <button onClick={handleNext}>Submit</button>
          </div>
        </div>
      );


 }

export default Submit