import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
    
function FeedbackThree() {
const history = useHistory()
    const [support, setSupport] = useState('')
    const dispatch = useDispatch()
   
    const handleNext = () => {
        history.push('/feedback4')
    }
    dispatch({
        type: "ADD_FEEDBACK",
        Payload: support
    })

    function handleFeedback(event) {
        event.preventDefault();
        addFeedback({
            support: support
        })
    }
        return(
            <section onSubmit = {handleFeedback}>
              <h1>Feedback!</h1> 
              <h2>How well are you being supported?</h2>
               <input type = 'number'
               min = {1}
               max ={5}  
               value={support}
               onChange={(event) => setSupport(event.target.value)}
                placeholder = 'support'>
            </input>
               <button onClick ={handleNext}>Next</button>
            </section>
        )

    }

    export default FeedbackThree
