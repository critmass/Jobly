import { render } from "@testing-library/react"
import SetterContext from "../context/SetterContext"
import LogIn from "./LogIn"



describe("Test Login page", () => {
    const login = () => ""
    it("renders", () => {
        render(
            <SetterContext.Provider value={{login}}>
                <LogIn/>
            </SetterContext.Provider>
        )
    })
})