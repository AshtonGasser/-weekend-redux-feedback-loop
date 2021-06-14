import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./FeedbackForm.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';

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
//for each item from database make a row 
  return (

    <div className="display">
      <div>

        <h2>Welcome</h2>

        </div>

      <h3>Click Begin To Get Started.</h3>

      <div>

      <Button
      variant = "contained" 
      color = 'primary' 
      onClick={handleNext}>
        Begin
      </Button>
      
      </div>{

      /* {feedback.map <tr>((list) => (
        <FeedbackAdmin key={list.id} list={list} />
      ))} */}
    </div>
  );
}

export default FeedbackForm;
