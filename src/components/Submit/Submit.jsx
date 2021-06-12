import { useSelector } from "react-redux";
import FeedbackReview from '../FeedbackReview/FeedbackReview'
import { useDispatch } from "react-redux";

function Submit(){
   // const dispatch = useDispatch()
    const submit = useSelector((store) => store.feedbackReducer)

    console.log('submit', submit);

//     function handleSubmit () {
//         console.log('got to submit');
//     postSubmit({

//     })

//     }
    return(
        <div>
            <p>
                {submit.map((list) => {
                    return <FeedbackReview key ={list.id} list={list}/>
                })}
            </p>

        </div>
    )


 }

export default Submit