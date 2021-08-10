import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Alert, Button } from "reactstrap"
import SetterContext from "./helpers/SetterContext"
import useChangeHandler from "./helpers/useChangeHandler"
import InputGroupBundle from "./InputGroupBundle"

const JobList = () => {


    const {login} = useContext(SetterContext)
    const history = useHistory()

    const [values, setValues] = useState({
        username:"",
        password:""
    })
    const [errorFlag, setErrorFlag] = useState(false)

    const handleChange = useChangeHandler(setValues)

    const handleSubmit = () => {
        const loginSuccess = login(values.username, values.password)
        if(loginSuccess){
            history.push("/")
        }
        else{
            setErrorFlag(true)
        }
    }

    return(<div>
        {errorFlag ?
            (<Alert>Your username/password not found</Alert>) :
            ""
        }
        <InputGroupBundle
            label="Username"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            placeholder="username"
        /><br/>
        <InputGroupBundle
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
        /><br/>
        <Button onClick={handleSubmit}>
            Login
        </Button>
    </div>)
}

export default JobList