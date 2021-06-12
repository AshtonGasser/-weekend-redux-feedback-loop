
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FeedbackInput = ({ title, description, action, route }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [value, setValue] = useState();

    const submit = (event) => {
        event.preventDefault();
        dispatch({
          type: action,
          payload: value
        });
        history.push(route);
    }

    return(
        <form onSubmit={submit}>
            <h1>{title}</h1> 
            <h3>{description}</h3>
            <input 
                min={1}
                max={5}
                type='number'
                placeholder='1-5'
                onChange={(event) => setValue(event.target.value)}
                required>
            </input>
            <button role='submit'>Next</button>
        </form>
    )
}

export default FeedbackInput;