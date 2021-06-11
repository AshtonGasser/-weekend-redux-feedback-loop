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






}




export default FeedbackForm