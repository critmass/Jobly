import React, { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { Alert, Button } from "reactstrap"
import SetterContext from "./helpers/SetterContext"
import makeChangeHandler from "./helpers/makeChangeHandler"
import InputGroupBundle from "./InputGroupBundle"

const JobList = () => {


    const {login} = useContext(SetterContext)

    const [values, setValues] = useState({
        username:"",
        password:""
    })
    const [errorFlag, setErrorFlag] = useState(false)

    const handleChange = makeChangeHandler(setValues)

    const handleSubmit = e => {
        e.preventDefault()
        const loginSuccess = login(values.username, values.password)
        if(loginSuccess){
            return <Redirect to="/"/>
        }
        else{
            setErrorFlag(true)
        }
    }

    return(<div>
        {errorFlag ?
            (<Alert color="danger">
                Your username/password not found
            </Alert>) :
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