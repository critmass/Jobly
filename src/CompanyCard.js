import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"

const CompanyCard = ({company}) => {
    return (<Card>
        <CardBody >
            <CardTitle>
                {company.name}
                <img scr={company.logoUrl} />
            </CardTitle>
            <CardText>
                <p>
                    Number of Employees:
                    {company.numEmployees}
                </p>
                <p>
                    {company.description}
                </p>
            </CardText>
        </CardBody>
    </Card>)
}

export default CompanyCard