import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
    
function FeedbackThree() {
const history = useHistory()
    const [support, setSupport] = useState('')
    const dispatch = useDispatch()
   
    const handleNext = () => {
        dispatch({
        type: "ADD_SUPPORT",
        payload: support
    })
        history.push('/review')
    }
    

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
               require ='required'
               onChange={(event) => setSupport(event.target.value)}
                placeholder = 'support'>
            </input>
               <button onClick ={handleNext}>Next</button>
            </section>
        )

    }

    export default FeedbackThree
