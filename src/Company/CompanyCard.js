import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"


const CompanyCard = ({company}) => {
    return (<Card className="CompanyCard">
        <CardBody >
            <CardTitle className="CompanyCard-CardTitle h2">
                {company.name}
                <img scr={company.logoUrl} />
            </CardTitle>
            <CardText className="CompanyCard-CardText">
                <p>
                    Number of Employees:
                    {company.numEmployees}
                </p>
                <p className="h6">
                    {company.description}
                </p>
            </CardText>
        </CardBody>
    </Card>)
}

export default CompanyCard