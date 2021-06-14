import React from "react";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import "./App.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import FeedbackReview from "../FeedbackReview/FeedbackReview.jsx";
import FeedbackInput from "../FeedbackInput/FeedbackInput.jsx";
import Submit from "../Submit/Submit.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

      
{/* routes */}
      <div>
        <Route path="/" exact>
          <FeedbackForm />
        </Route>

        <Route path="/feedback1">
          <FeedbackInput
            title="Feedback!"
            description="How are you feeling today?"
            action='ADD_FEELING'
            route={'/feedback2'}
          />
        </Route>

        <Route path="/feedback2">
          <FeedbackInput
            title="Feedback!"
            description="How well are you understanding the content?"
            action='ADD_UNDERSTANDING'
            route={'/feedback3'}
          />
        </Route>

        <Route path="/feedback3">
          <FeedbackInput
            title="Feedback!"
            description="How well are you being supported?"
            action='ADD_SUPPORT'
            route={'/review'}
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
