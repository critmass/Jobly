import { render } from "@testing-library/react"
import testDB from "../helpers/testDB"
import CompanyCard from "./CompanyCard"


describe("Test CompanyCard", () => {
    it("renders", () => {
        const [company] = testDB.companies.filter(company => {
            return company.handle === "comp2"})
        render(<CompanyCard
            company = {company}
        />)
    })
})