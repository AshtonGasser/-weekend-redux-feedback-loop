import React from "react";
import axios from "axios";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import "./App.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import FeedbackReview from "../FeedbackReview/FeedbackReview.jsx";
// import FeedbackInfo from '../FeedbackInfo/FeedbackInfo.jsx'
import FeedbackInput from "../FeedbackPg/FeedbackInput.jsx";
import Submit from "../Submit/Submit.jsx";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <nav className="nav">
        <Link to="/">Form</Link>

        <Link to="/review">Feedback Review</Link>
        {/* <Link to="/info">Feedback Info</Link> */}
      </nav>
      <div>
        <Route path="/" exact>
          <FeedbackForm />
        </Route>

        <Route path="/feedback1">
          <FeedbackInput
            title="Feedback!"
            description="How are you feeling today?"
            handleNext={(value) => {
              dispatch({
                type: "ADD_FEELING",
                payload: value
              });
              history.push("/feedback2");
            }}
          />
        </Route>

        <Route path="/feedback2">
          <FeedbackInput
            title="Feedback!"
            description="How well are you understanding the content?"
            handleNext={(value) => {
              dispatch({
                type: "ADD_UNDERSTANDING",
                payload: value,
              });
              history.push("/feedback3");
            }}
          />
        </Route>

        <Route path="/feedback3">
          <FeedbackInput
            title="Feedback!"
            description="How well are you being supported?"
            handleNext={(value) => {
              dispatch({
                type: "ADD_SUPPORT",
                payload: value,
              });
              history.push("/review");
            }}
          />
        </Route>

        <Route path="/submit">
          <Submit />
        </Route>

        <Route path="/review">
          <FeedbackReview />
        </Route>

        {/*     
      {<Route path="/admin">
        <FeedbackAdmin/>
      </Route>} */}
      </div>
    </Router>
  );
}

export default App;
