import React, {useContext, useEffect, useState} from "react"
import { Link, Redirect, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import DataContext from "./helpers/DataContext"
import JoblyApi from "./helpers/JoblyApi"
import JobCard from "./JobCard"

const UserPage = () => {

    const {username} = useParams()
    // const {currentUsername} = useContext(DataContext)

    const [user, setUser] = useState({applications:[]})

    useEffect( () => {
        async function getUser() {
            const result = await JoblyApi.getUser(username)
            if(result.username) {
                setUser(() => result)
            }
            else {
                return <Redirect to="/"/>
            }
        }
        getUser()
    },[])

    return (<div>
        <h2 className="display-2">
            {`${user.firstName} ${user.lastName}`}
        </h2>
        <h3 className="display-4">
            {user.username}
        </h3>
        {/* { currentUsername == user.username ?
            (<Link to={`/user/update/${username}`}>
                <Button>
                    Update
                </Button>
            </Link>) :
            ""
        } */}
        <div>
            {
                user.applications.map( job => {
                    return <JobCard job={job} />
                })
            }
        </div>
    </div>)
}

export default UserPage