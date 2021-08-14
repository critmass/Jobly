import { render } from "@testing-library/react"
import { MemoryRouter, Route } from "react-router-dom"
import DataContext from "../context/DataContext"
import UserPage from "./UserPage"
import testDB from "../helpers/testDB"


describe("Test UserPage", () => {

    it("renders", () => {
        render(
            <MemoryRouter initialEntries={["users/u"]}>
                <DataContext.Provider
                    value={{
                        ...testDB,
                        currentUsername:"u",
                        jobsAppliedTo:[]}}>
                    <Route path="users/:username">
                        <UserPage/>
                    </Route>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})