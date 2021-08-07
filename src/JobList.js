import React, { useContext, useState } from "react"
import DataContext from "./helpers/DataContext"
import JobCard from "./JobCard"
import SearchForm from "./SearchForm"

const JobList = () => {
    const {jobs} = useContext(DataContext)
    const [searchedJobs, searchJobs] = useState(jobs)


    return <div>
        <SearchForm
            setResults={searchJobs}
            dataSet={jobs}
            searchBy="title"
            placeholder="Job Names"
        />
        {searchedJobs.map( job => {
            return (<JobCard job={job}/>)
        })}
    </div>
}

export default JobList