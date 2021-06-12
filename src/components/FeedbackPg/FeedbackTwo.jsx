import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
    
function FeedbackTwo() {
const history = useHistory()
    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()
   
    const handleNext = () => {
        history.push('/feedback3')
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
               min = {1}
               max ={5}  
               value={feeling}
               onChange={(event) => setFeeling(event.target.value)}
               placeholder = 'How well are you understanding the content?'></input>
               <button onClick ={handleNext}>Next</button>
            </section>
        )

    }

    export default FeedbackTwo
