import { render } from "@testing-library/react"
import { MemoryRouter, Route } from "react-router-dom"
import DataContext from "../context/DataContext"
import UserPage from "./UserPage"


describe("Test UserPage", () => {

    it("renders", () => {
        render(
            <MemoryRouter initialEntries={["users/u"]}>
                <DataContext.Provider value={{currentUsername:"u"}}>
                    <Route path="users/:username">
                        <UserPage/>
                    </Route>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})