import React, { useContext, useState } from "react"

import DataContext from "../context/DataContext"
import SearchForm from "../helpers/SearchForm"
import CompanyCard from "./CompanyCard"
import { Link } from "react-router-dom"
import "./CompanyList.css"


const CompanyList = () => {
    const {companies} = useContext(DataContext)
    const [searchResults, setSearchResults] = useState(companies)

    return (<div className="CompanyList">
        <SearchForm
            setResults={setSearchResults}
            dataSet={companies}
            searchBy="name"
            placeholder="company name"
        />
        <div className="container CompanyList-companies mt-4">
            {searchResults.map( company => {
                return (
                    <div className="row my-2">
                        <div className="col">
                            <Link
                                to={`/companies/${company.handle}`}
                                key={company.handle}
                                className="CompanyList-Link"
                            >
                                <CompanyCard
                                company={company}
                                className="CompanyList-CompanyCard"/>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>)
}

export default CompanyList