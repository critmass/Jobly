import { render } from "@testing-library/react"
import { MemoryRouter, Route } from "react-router-dom"
import DataContext from "../context/DataContext"
import SetterContext from "../context/SetterContext"
import UpdateUserPage from "./UpdateUserPage"



describe("Test UpdateUserPage", () => {

    const currentUsername = "u"
    const updateUser = () => ""

    it("renders", () => {
        render(
            <MemoryRouter initialEntries={["users/u"]}>
                <SetterContext.Provider value={{updateUser}}>
                    <DataContext.Provider value={{ currentUsername }}>
                        <Route path="users/:username">
                            <UpdateUserPage />
                        </Route>
                    </DataContext.Provider>
                </SetterContext.Provider>
            </MemoryRouter>
        )
    })
})