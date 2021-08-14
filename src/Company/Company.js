import React, { useContext } from "react"
import { useParams } from "react-router-dom"

import JobCard from "../Job/JobCard"
import CompanyCard from "./CompanyCard"
import DataContext from "../context/DataContext"

const Company = () => {
    const {handle} = useParams()
    const {companies, jobs} = useContext(DataContext)
    const [company] = companies.filter( company => company.handle == handle )
    const companyJobs = jobs.filter( job => job.companyHandle == handle )

    return (<div>
        <CompanyCard company = {company}/>
        {companyJobs.map( job => < JobCard job = {job} /> )}
    </div>)
}

export default Company