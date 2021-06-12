
import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
    
function FeedbackOne() {
const history = useHistory()
    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()
   
    const handleNext = () => {
        history.push('/feedback2')
    }
    dispatch({
        type: "ADD_FEEDBACK",
        Payload: feeling
    })

    function handleFeedback(event) {
        event.preventDefault();
        addFeedback({
            feeling: feeling
        })
    }
        return(
            <section onSubmit = {handleFeedback}>
              <h1>Feedback!</h1> 
              <h2>'How are you feeling today?'</h2>
               <input type = 'number'
               min = {1}
               max ={5}  
               value={feeling}
               onChange={(event) => setFeeling(event.target.value)}
               require={re}
               placeholder ='1-5'></input>
               <button onClick ={handleNext}>Next</button>
            </section>
        )

    }

    export default FeedbackOne