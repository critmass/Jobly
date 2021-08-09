import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Alert, Button } from "reactstrap"
import useChangeHandler from "./helpers/useChangeHandler"
import SetterContext from "./helpers/SetterContext"
import InputGroupBundle from "./InputGroupBundle"

const Registration = () => {

    const [inputValues, setInputValues] = useState({
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
    })
    const history = useHistory()

    const handleChange = useChangeHandler(setInputValues)
    const {registerNewUser} = useContext(SetterContext)

    const handleSubmit = async () => {
        registerNewUser(inputValues)
        history.push("/")
    }

    return (<div>
        <InputGroupBundle
            label="User Name"
            name="username"
            value={inputValues.username}
            onChange={handleChange}
        /><br/>
        <InputGroupBundle
            label="Password"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
        /><br/>
        <InputGroupBundle
            label="First Name"
            name="firstName"
            value={inputValues.firstName}
            onChange={handleChange}
        /><br/>
        <InputGroupBundle
            label="Last Name"
            name="lastName"
            value={inputValues.lastName}
            onChange={handleChange}
        /><br/>
        <InputGroupBundle
            label="Email"
            name="email"
            value={inputValues.email}
            onChange={handleChange}
        /><br/>
        <Button onClick={handleSubmit}>
            Register
        </Button>
    </div>)
}

export default Registration