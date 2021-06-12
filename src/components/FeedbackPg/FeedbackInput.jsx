
import { useState } from "react";

const FeedbackInput = ({ title, description, handleNext }) => {
    const [value, setValue] = useState();

    return(
        <section>
            <h1>{title}</h1> 
            <h2>{description}</h2>
            <input 
                type = 'number'
                min = {1}
                max ={5}  
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder='1-5'>
            </input>
            <button onClick={() => handleNext(value)}>Next</button>
        </section>
    )
}

export default FeedbackInput;