import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DataContext from "../context/DataContext"
import SetterContext from "../context/SetterContext"
import testDB from "../helpers/testDB"
import useApplyToJob from "../hooks/useApplyToJob"
import JobList from "./JobList"



describe("Test JobList", () => {
    it("renders", () => {
        const jobsAppliedTo = []
        const applyToJob = useApplyToJob({
            setJobsAppliedTo: () => "",
            currentUsername: ""
        })
        render(
            <MemoryRouter>
                <DataContext.Provider value={{...testDB, jobsAppliedTo }}>
                    <SetterContext.Provider value={{ applyToJob }}>
                        <JobList/>
                    </SetterContext.Provider>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})