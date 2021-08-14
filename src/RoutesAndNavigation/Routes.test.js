import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DataContext from "../context/DataContext"
import Routes from "./Routes"


describe("Test Routes", () => {
    it("renders with username", () => {
        render(
            <MemoryRouter>
                <DataContext.Provider value={{currentUsername:"u"}}>
                    <Routes/>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
    it("renders without username", () => {
        render(
            <MemoryRouter>
                <DataContext.Provider value={{currentUsername:""}}>
                    <Routes/>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})