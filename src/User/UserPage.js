import React, {useContext, useEffect, useState} from "react"
import { Link, Redirect, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import DataContext from "../context/DataContext"
import JoblyApi from "../helpers/JoblyApi"
import JobCard from "../Job/JobCard"
import "./UserPage.css"

const UserPage = () => {

    const {username} = useParams()
    const {currentUsername, jobsAppliedTo, jobs} = useContext(DataContext)

    const [user, setUser] = useState({jobs:[]})

    useEffect( () => {
        const getUser = async () => {
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

    return (
        <div className="UserPage">
            <div>
                <h2 className="display-2">
                    {`${user.firstName} ${user.lastName}`}
                </h2>
                <h3 className="display-4">
                    {user.username}
                </h3>
                <ul className="UserPage-info-list">
                    <li>
                        {user.email}
                    </li>
                </ul>
                { currentUsername == user.username ?
                    (<>
                        <Link to={`/update/${username}`}>
                            <Button className="mt-3 mb-5">
                                Update
                            </Button>
                        </Link>
                    </>) :
                    ""
                }
            </div>
            <div className="UserPage-jobs container">
                {jobs.filter( job => {
                    return jobsAppliedTo.includes(job.id)
                }).map( job => {
                    return (
                        <div className="row py-2">
                            <div className="col">
                                <JobCard job={job}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserPage