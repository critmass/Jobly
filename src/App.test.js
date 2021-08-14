import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import App from "./App"


describe("Testing App.js", () => {

    it("renders", () => {
        render(<MemoryRouter><App/></MemoryRouter>)
    })
})