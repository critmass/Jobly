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
import DataContext from "../context/DataContext"
import SetterContext from "../context/SetterContext"
import "./JobCard.css"

const JobCard = ({job}) => {

    const {jobsAppliedTo, companies} = useContext(DataContext)
    const {applyToJob} = useContext(SetterContext)

    const isAppliedTo = jobsAppliedTo.includes(job.id)

    const company = companies.find( company => {
        return company.handle === job.companyHandle
    })

    const handleClick = () => {
        applyToJob(job.id)
    }

    return (<Card className="JobCard-Card">
        <CardBody>
            <CardTitle className="JobCard-CardTitle h5">
                {job.title}
            </CardTitle>
            <CardSubtitle className="JobCard-CardSubtitle h6">
                <Link
                    to={`/companies/${job.companyHandle}`}
                    className="JobCard-companyLink">
                    {company.name}
                </Link>
            </CardSubtitle>
            <CardText className="JobCard-CardText">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <ul>
                                <li>
                                    Salary: ${job.salary}
                                </li>
                                <li>
                                    Equity: {job.equity}
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            {isAppliedTo ?
                                <Button>Applied</Button>:
                                (<Button onClick={handleClick}>
                                    Apply
                                </Button>)
                            }
                        </div>
                    </div>
                </div>
            </CardText>
        </CardBody>
    </Card>)
}

export default JobCard