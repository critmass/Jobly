import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import DataContext from "../context/DataContext"
import testDB from "../helpers/testDB"
import CompanyList from "./CompanyList"


describe("Test CompanyList", () => {
    it("renders", () => {
        render(
            <MemoryRouter>
                <DataContext.Provider value={testDB}>
                    <CompanyList/>
                </DataContext.Provider>
            </MemoryRouter>
        )
    })
})