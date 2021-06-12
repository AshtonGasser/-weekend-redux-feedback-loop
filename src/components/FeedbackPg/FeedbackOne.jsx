
import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
    
function FeedbackOne() {
    //variable for history
const history = useHistory()
    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()
   
    const handleNext = () => {
        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })
        history.push('/feedback2')
    }
    

    function handleFeedback(event) {
        event.preventDefault();
        addFeedback({
            feeling: feeling
        })
    }
        return(
            <form onSubmit = {handleFeedback}>
              <h1>Feedback!</h1> 
              <h2>'How are you feeling today?'</h2>
               <input type = 'number'
               min = {1}
               max ={5}  
               value={feeling}
               onChange={(event) => setFeeling(event.target.value)}
               require="required"
               placeholder ='1-5'></input>
               <button onClick ={handleNext}>Next</button>
            </form>
        )

    }

    export default FeedbackOne