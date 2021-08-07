import React, { useState } from "react"
import { Button } from "reactstrap"
import makeChangeHandler from "./helpers/makeChangeHandler"
import InputGroupBundle from "./InputGroupBundle"

const Registration = () => {

    const [inputValues, setInputValues] = useState({
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
    })
    const [errors, setErrors] = useState([])

    const handleChange = makeChangeHandler(setInputValues)

    const handleSubmit = e => {
        e.preventDefault()

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