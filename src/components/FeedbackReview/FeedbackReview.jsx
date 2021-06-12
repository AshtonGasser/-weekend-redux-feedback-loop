import { useSelector } from "react-redux";
import axios from "axios";

function FeedbackReview() {
  const review = useSelector((store) => store.feedback.Reducer);
  //const info = useSelector((store) => store.infoReducer);
  console.log("review", review);
}
function handleFlagged(){
    console.log('handleFlagged');
}
function handleReview() {
  console.log("got to handle review");

  postFeedback({
    feeling: review[0].feeling,
    understanding: review[0].understanding,
    support: review[0].support,
    comments: review[0].text,
    flagged: handleFlagged(),
    //date: review[0].dated,
  });
}

function postFeedback(results) {
  console.log("got to postFeedback", results);
  axios
    .post("/feedback", results)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Oh no there is an ${error} in postFeedback`);
    });

  //empty inputs ect
}

return (
  <div>
    <div>
      <p> FeedBack Results</p>
      <p>{review[0].feeling}</p>
      <p>{review[0].understanding}</p>
      <p>{review[0].support}</p>
      <input type ='text' placeholder = 'comments'></input>
    </div>
    <button onClick ={handleReview}>See Results</button>
    <div>
      <p>comments</p>
      <p>{info[0].text}</p>
      {/* <p>{date: info[0].dated}</p> */}
    </div>
  </div>
);
export default FeedbackReview;
