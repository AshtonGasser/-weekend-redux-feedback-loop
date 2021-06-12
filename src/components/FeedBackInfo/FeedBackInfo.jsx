import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

function FeedbackInfo (){
    const  history = useHistory()
    const dispatch = useDispatch();
    // states for inputs -- 
    // inputs need value and on change event set -- see employeeForm from redux salary
    // handle submit should call addInfo
    // add info sends dispatch

const [feeling, setFeeling] = useState('')
const [understanding, setUnderstanding] = useState('')
const [support, setSupport] = useState('')

const handleNext = () => {
 
    history.push('/review')
  }
}