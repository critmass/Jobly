import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"

const JobCard = ({job}) => {
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
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </CardText>
        </CardBody>
    </Card>)
}

export default JobCard