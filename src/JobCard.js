import React, { useContext } from "react"
import { Link } from "react-router-dom"
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle
} from "reactstrap"
import DataContext from "./context/DataContext"
import SetterContext from "./context/SetterContext"

const JobCard = ({job}) => {

    const {jobsAppliedTo} = useContext(DataContext)
    const {applyToJob} = useContext(SetterContext)

    const isAppliedTo = jobsAppliedTo.includes(job.id)

    const handleClick = () => {
        applyToJob(job.id)
    }

    return (<Card>
        <CardBody>
            <CardTitle>
                {job.title}
            </CardTitle>
            <CardSubtitle>
                <Link to={`/companies/${job.companyHandle}`}>
                    {job.companyName}
                </Link>
            </CardSubtitle>
            <CardText>
                <div className="container">
                    <div class="row justify-content-between">
                        <div className="col-3">
                            <ul>
                                <li>
                                    Salary: {job.salary}
                                </li>
                                <li>
                                    Equity: {job.equity}
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            {isAppliedTo ?
                                <Button>Applied</Button>:
                                <Button onClick={handleClick}>
                                    Apply
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </CardText>
        </CardBody>
    </Card>)
}

export default JobCard