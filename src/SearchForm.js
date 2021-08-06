import React, { useState } from 'react'

const SearchForm = ({setResults, dataSet, searchBy, placeholder}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = e => {
        const { value } = e.target
        setSearchTerm(value)
    }

    const handleSearch = e => {
        e.preventDefault()
        let results
        if (searchTerm.trim() != "") {
            results = dataSet.filter(data => {
                return data[searchBy].includes(searchTerm.trim())
            })
        }
        else {
            results = dataSet
        }
        setResults(results)
        setSearchTerm("")
    }

    return (<form onSubmit={handleSearch}>
        <input
            type="text"
            name="searchTextBox"
            value={searchTerm}
            onChange={handleChange}
            placeholder={placeholder}
        />
        <button onClick="submit">Search</button>
    </form>)
}

export default SearchForm