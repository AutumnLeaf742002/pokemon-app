import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [state, setState] = useState(initialState)

    const handleChange = ({ target })=>{

        const {name, value} = target
        setState({...state, [name]: value})
    }

    const resetForm = ()=>{
        setState(initialState)
    }

    return {
        ...state,
        state,
        handleChange,
        resetForm,
    }
}