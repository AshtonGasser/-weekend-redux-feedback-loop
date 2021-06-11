import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";


function FeedbackForm () {
    const history = useHistory();
    const dispatch = useDispatch();
    const menu = useSelector((store) => store.menuReducer);


    //get menu data from server on load
  useEffect(() => {
    console.log("in useEffect");
    setMenu();
  }, []);

  const handleNext = () => {
 
    history.push('/customer')
  }

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



  )



}




export default FeedbackForm