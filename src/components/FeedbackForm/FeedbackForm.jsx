import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./feedbackForm.css";
// import FeedbackList from '../FeedbackList/FeedbackList.jsx'
function FeedbackForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedbackReducer);

  //get feedback data from server on load
  useEffect(() => {
    console.log("in useEffect");
    getFeedback();
  }, []);

  const handleNext = () => {
    history.push("/feedback1");
  };

  //sends a dispatch to the menu reducer to set it to the present 'reducer' table via an axios.GET
  const getFeedback = () => {
    axios
      .get('/feedback')
      .then((response) => {
        /*dispatch({
          type: "SUBMIT",
          payload: response.data,
        });*/
      })
      .catch((error) => {
        console.log("error getting feedback", error);
      });
  };

  return (
    <div className="display">
      <button onClick={handleNext}>Next</button>
      {/* {feedback.map((list) => (
        <FeedbackAdmin key={list.id} list={list} />
      ))} */}
    </div>
  );
}

export default FeedbackForm;
