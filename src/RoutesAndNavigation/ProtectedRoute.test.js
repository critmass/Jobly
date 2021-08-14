import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DataContext from "../context/DataContext"
import ProtectedRoute from "./ProtectedRoute"


describe("Test ProtectedRoute", () => {
    it("renders", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <DataContext.Provider value={{currentUser:"u"}}>
                    <ProtectedRoute path="/">
                        Test has succeded!
                    </ProtectedRoute>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})