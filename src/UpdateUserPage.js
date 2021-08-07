import React, { useState } from "react"
import { useParams } from "react-router"
import JoblyApi from "./helpers/JoblyApi"
import InputGroupBundle from "./InputGroupBundle"


const UpdateUserPage = () => {
    const {username} = useParams()
    const [inputValues, setInputValues] = useState(() => {
        const user = JoblyApi.getUser(username)
        return user
    })
    const handleChange = makeChangeHandler(setInputValues)
    const {}
    const handleSubmit = () => {

    }

    return (<div>
        <InputGroupBundle
            label="Password"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
        /><br />
        <InputGroupBundle
            label="First Name"
            name="firstName"
            value={inputValues.firstName}
            onChange={handleChange}
        /><br />
        <InputGroupBundle
            label="Last Name"
            name="lastName"
            value={inputValues.lastName}
            onChange={handleChange}
        /><br />
        <InputGroupBundle
            label="Email"
            name="email"
            value={inputValues.email}
            onChange={handleChange}
        /><br />
        <Button onClick={handleSubmit}>
            Update
        </Button>
    </div>)


}

export default UpdateUserPage