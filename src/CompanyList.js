import React, { useContext, useState } from "react"

import DataContext from "./helpers/DataContext"
import SearchForm from "./SearchForm"
import CompanyCard from "./CompanyCard"
import { Link } from "react-router-dom"



const CompanyList = () => {
    const {companies} = useContext(DataContext)
    const [searchResults, setSearchResults] = useState(companies)

    return (<div>
        <SearchForm
            setResults={setSearchResults}
            dataSet={companies}
            searchBy="name"
            placeholder="company name"
        />
        {searchResults.map( company => {
            return (
                <Link
                    to={`/companies/${company.handle}`}
                    key={company.handle}
                >
                    <CompanyCard company={company} />
                </Link>
            )
        })}
    </div>)
}

export default CompanyList