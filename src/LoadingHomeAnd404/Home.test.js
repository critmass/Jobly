import { render } from "@testing-library/react"
import DataContext from "../context/DataContext"
import Home from "./Home"


describe("Testing Home", () => {
    it("renders when there is a currentUsername ", () => {
        render(<DataContext.Provider
            value={{
                currentUsername:true
            }}
        >
            <Home/>
        </DataContext.Provider>)
    })
    it("renders when there is a currentUsername ", () => {
        render(<DataContext.Provider
            value={{
                currentUsername:false
            }}
        >
            <Home/>
        </DataContext.Provider>)
    })
})