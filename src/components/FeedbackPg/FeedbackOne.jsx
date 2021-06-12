
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
               <input type = 'number'
               value={feeling}
               onChange={(event) => setFeeling(event.target.value)}
               placeholder = 'How are you feeling today?'></input>
               <button onClick ={handleNext}>Next</button>
            </section>
        )

    }

    export default FeedbackOne