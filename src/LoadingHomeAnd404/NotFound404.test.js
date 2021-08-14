import { render } from "@testing-library/react"
import NotFound404 from "./NotFound404"


describe("Test NotFound404 page", () =>  {
    it("renders", () => {
        render(<NotFound404/>)
    })
})