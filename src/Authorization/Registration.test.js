import { render } from "@testing-library/react"
import SetterContext from "../context/SetterContext"
import Registration from "./Registration"


describe("Test Registartion page", () => {
    it("renders", () => {
        const registerNewUser = () => ""
        render(
            <SetterContext.Provider value={{registerNewUser}}>
                <Registration/>
            </SetterContext.Provider>
        )
    })
})