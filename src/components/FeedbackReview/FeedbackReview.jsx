import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

function FeedbackReview() {
//variable for history
const history = useHistory()
//import data from store 
  const reviewList = useSelector((store) => store.feedback.Reducer);
  //const info = useSelector((store) => store.infoReducer);
  console.log("review", reviewList);
}
function handleFlagged(){
    console.log('handleFlagged');
}

// const handleNext = () => {
//     history.push('/review')
// }
// function handleReview() {
//   console.log("got to handle review");

//   postFeedback({
//     feeling: review[0].feeling,
//     understanding: review[0].understanding,
//     support: review[0].support,
//     comments: review[0].text,
//     flagged: handleFlagged(),
//     //date: review[0].dated,
//   });
// }

function postFeedback() {
  console.log("got to postFeedback", {reviewList});
  axios
    .post("/feedback", {reviewList})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Oh no there is an ${error} in postFeedback`);
  
    });
    history.push('/submit')
}
//onclick change to submit route


return (
  <div>
    <div>
      <h1> FeedBack Review</h1>
      </div>
      <div>
      <p>Feelings: {reviewList.feeling}</p>
      <p>Understanding: {reviewList.understanding}</p>
      <p>Support:   {reviewList.support}</p>

      
    </div>
    <button onClick ={handleReview}>See Results</button>
    <div>
      <p>comments</p>
      <input type ='text' placeholder = 'comments'>{reviewList.comments}</input>
        <button onClick ={postFeedback}>Submit</button>
    </div>
  </div>
);
export default FeedbackReview;
