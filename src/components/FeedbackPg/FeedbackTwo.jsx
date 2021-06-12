import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
    
function FeedbackTwo() {
const history = useHistory()
    const [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch()
   
    const handleNext = () => {
       dispatch({
        type: "ADD_UNDERSTANDING",
        payload: understanding
    }) 
        history.push('/feedback3')
    }
    

    function handleFeedback(event) {
        event.preventDefault();
        addFeedback({
            understanding: understanding
        })
    }
        return(
            <section onSubmit = {handleFeedback}>
              <h1>Feedback!</h1> 
              <h2>'How well are you understanding the content?'</h2>
               <input type = 'number'
               min = {1}
               max ={5}  
               value={understanding}
               require = 'required'
               onChange={(event) => setUnderstanding(event.target.value)}
               placeholder = '1-5'></input>
               <button onClick ={handleNext}>Next</button>
            </section>
        )

    }

    export default FeedbackTwo
