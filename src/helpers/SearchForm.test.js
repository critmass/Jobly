import { render } from "@testing-library/react"
import SearchForm from "./SearchForm"
import testDB from "./testDB"


describe("Testing SearchForm", () => {

    let results
    const setResults = input => {
        results = input
    }

    it("renders", () => {
        render(
            <SearchForm
                setResults={setResults}
                dataSet={testDB.companies}
                searchBy="name"
                placeholder="Company Name"
            />
        )
    })
})