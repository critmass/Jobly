import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DataContext from "../context/DataContext"
import NavBar from "./NavBar"


describe("Test NavBar", () => {

    it("renders with username", () => {
        render(
            <MemoryRouter>
                <DataContext.Provider value={{currentUser:"u"}}>
                    <NavBar logout={() => ""}/>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
    it("renders without username", () => {
        render(
            <MemoryRouter>
                <DataContext.Provider value={{currentUser:""}}>
                    <NavBar logout={() => ""}/>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})