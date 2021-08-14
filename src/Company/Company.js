import React, { useContext } from "react"
import { useParams } from "react-router-dom"

import JobCard from "../Job/JobCard"
import CompanyCard from "./CompanyCard"
import DataContext from "../context/DataContext"
import "./Company.css"

const Company = () => {
    const {handle} = useParams()
    const {companies, jobs} = useContext(DataContext)
    const [company] = companies.filter( company => company.handle == handle )
    const companyJobs = jobs.filter( job => job.companyHandle == handle )

    return (<div className = "Company">
        <CompanyCard company = {company}/>
        <div className="container mt-4">
            {companyJobs.map( job => (
                <div className="row my-2">
                    <div className="col">
                        < JobCard job = {job} />
                    </div>
                </div>
            ) )}
        </div>
    </div>)
}

export default Company