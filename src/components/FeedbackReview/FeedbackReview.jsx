import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function FeedbackReview() {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
   //variable for history⬇
  const history = useHistory();
  const reviewList = useSelector((store) => store.feedbackReducer);
  console.log("review", reviewList);

  function handleFlagged() {
    console.log("handleFlagged");
  }



  function postFeedback() {
    dispatch({
      type: "ADD_COMMENT",
      payload: comment
    });

    console.log("got to postFeedback", { ...reviewList });
    axios
      .post("/feedback", { ...reviewList, comment: comment })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(`Oh no there is an ${error} in postFeedback`);
      });
    history.push("/submit");
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
        <p>Support: {reviewList.support}</p>
      </div>
      <p>See Results</p>
      <div>
        <p>comments</p>
        <input type="text" placeholder="comments" onChange={(event) => setComment(event.target.value)}></input>
        <button onClick={postFeedback}>Submit</button>
      </div>
    </div>
  );
}
export default FeedbackReview;
