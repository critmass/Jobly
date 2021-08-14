import React, { useContext, useState } from "react"
import DataContext from "../context/DataContext"
import JobCard from "./JobCard"
import SearchForm from "../helpers/SearchForm"
import "./JobList.css"

const JobList = () => {
    const {jobs} = useContext(DataContext)
    const [searchedJobs, searchJobs] = useState(jobs)


    return <div className="JobList">
        <SearchForm
            setResults={searchJobs}
            dataSet={jobs}
            searchBy="title"
            placeholder="Job Names"
        />
        <div className="JobList-jobs container mt-5">
            {searchedJobs.map( job => {
                return (
                    <div className="row my-2" key={job.id}>
                        <div className="col">
                            <JobCard job={job}/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default JobList