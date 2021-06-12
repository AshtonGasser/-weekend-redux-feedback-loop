import { useSelector } from "react-redux";
import axios from "axios";

function FeedbackReview() {
  const review = useSelector((store) => store.feedback.Reducer);
  const info = useSelector((store) => store.infoReducer);
  console.log("review", review);
}

function handleReview() {
  console.log("got to handle review");

  postFeedback({
    feeling: info[0].feeling,
    understanding: info[0].understanding,
    support: info[0].support,
    comments: info[0].text,
    flagged: handleFlagged(),
    date: info[0].dated,
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
      <p>{info[0].feeling}</p>
      <p>{info[0].understanding}</p>
      <p>{info[0].support}</p>
      <p>{info[0].text}</p>
    </div>
    <div>
      <p>comments</p>
      <p>{info[0].text}</p>
      {/* <p>{date: info[0].dated}</p> */}
    </div>
  </div>
);
export default FeedbackReview;
