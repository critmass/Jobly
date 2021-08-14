import { render } from "@testing-library/react"
import { MemoryRouter, Route } from "react-router-dom"
import DataContext from "../context/DataContext"
import SetterContext from "../context/SetterContext"
import testDB from "../helpers/testDB"
import useApplyToJob from "../hooks/useApplyToJob"
import Company from "./Company"


describe("Test Company", () => {
    it("renders", () => {
        const currentUsername = "testuser"
        const applyToJob = useApplyToJob({
            currentUsername,
            setJobsAppliedTo:() => " "
        })
        const jobsAppliedTo = []
        render(
            <MemoryRouter initialEntries={["/companies/comp2"]}>
                <DataContext.Provider
                    value={{...testDB, currentUsername, jobsAppliedTo}}>
                    <SetterContext.Provider
                        value={{applyToJob}}
                    >
                        <Route path="/companies/:handle">
                            <Company/>
                        </Route>
                    </SetterContext.Provider>

                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})