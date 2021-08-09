import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import JoblyApi from "./helpers/JoblyApi"
import InputGroupBundle from "./InputGroupBundle"
import useChangeHandler from "./helpers/useChangeHandler"
import SetterContext from "./helpers/SetterContext"
import { Button } from "reactstrap"
import { Redirect } from "react-router-dom"


const UpdateUserPage = () => {
    const {username} = useParams()
    const {updateUser} = useContext(SetterContext)


    const [inputValues, setInputValues] = useState({})
    useEffect(()=>{
        const getUserData = async () => {
            let user = await JoblyApi.getUser(username)
            setInputValues(user)
        }
        getUserData()
        if(!inputValues.username){
            return <Redirect to="/"/>
        }
    },[])

    const handleChange = useChangeHandler(setInputValues)
    const handleSubmit = () => {
        updateUser(inputValues)
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