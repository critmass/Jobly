import React, { useContext, useState } from "react"
import { Redirect } from "react-router-dom"
import { Alert } from "reactstrap"
import SetterContext from "./helpers/SetterContext"

const JobList = () => {

    const {login} = useContext(SetterContext)

    const [values, setValues] = useState({
        username:"",
        password:""
    })
    const [errorFlag, setErrorFlag] = useState(false)

    const handleChange = e => {
        const {value,name} = e.target
        setValues( oldValues => ({...oldValues, [name]:value}))
    }

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
            (<Alert>Your username/password not found</Alert>) :
            ""
        }
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                placeholder="username"
            /><br/>
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                onChange={handleChange}
            /><br/>
            <button onClick="submit">
                Login
            </button>
        </form>
    </div>)
}

export default JobList