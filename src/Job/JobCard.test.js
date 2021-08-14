import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DataContext from "../context/DataContext"
import SetterContext from "../context/SetterContext"
import testDB from "../helpers/testDB"
import useApplyToJob from "../hooks/useApplyToJob"
import JobCard from "./JobCard"


describe("Test JobCard", () => {
    it("renders", () => {
        const jobsAppliedTo = []
        const applyToJob = useApplyToJob({
            setJobsAppliedTo: () => "",
            currentUsername:""
        })
        render(
            <MemoryRouter>
                <DataContext.Provider value={{jobsAppliedTo}}>
                    <SetterContext.Provider value={{applyToJob}}>
                        <JobCard job={testDB.jobs[0]}/>
                    </SetterContext.Provider>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})