import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import 'fontsource-roboto';
import './Submit.css'
function Submit() {
  //const dispatch = useDispatch()

  //variable for history⬇
  const history = useHistory();
  const reviewList = useSelector((store) => store.feedbackReducer);
  //const info = useSelector((store) => store.infoReducer);
  console.log("review", reviewList);

  const handleNext = () => {
    history.push("/");
  };

  return (
    <div className = 'display'>
      <div>
        <h2>SUCCESS</h2>
        <p></p>
        <h3>See Results</h3>
      </div>
      <div>
        <p>Feelings: {reviewList.feeling}</p>
        <p>Understanding: {reviewList.understanding}</p>
        <p>Support: {reviewList.support}</p>
      </div>
      <p></p>
      <div>
        <p>comments</p>
        <h3>{reviewList.comment}</h3>
      </div>
      <div>
        <button onClick={handleNext}>Leave New Feedback</button>
      </div>
    </div>
  );
}

export default Submit;
