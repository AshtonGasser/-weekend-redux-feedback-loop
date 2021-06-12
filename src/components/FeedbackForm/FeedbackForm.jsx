import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./feedbackForm.css";

function FeedbackForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedbackReducer);

  //get menu data from server on load
  useEffect(() => {
    console.log("in useEffect");
    setMenu();
  }, []);

  const handleNext = () => {
    history.push("/customer");
  };

  //sends a dispatch to the menu reducer to set it to the present "pizza" table via an axios.GET
  const getFeedback = () => {
    axios
      .get()
      .then((response) => {
        dispatch({
          type: "SET_FEEDBACK",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error getting feedback", error);
      });
  };

  return (
    <div className="display">
      <button onClick={handleNext}>Next</button>
      {feedback.map((list) => (
        <FeedbackList key={list.id} list={list} />
      ))}
    </div>
  );
}

export default FeedbackForm;
