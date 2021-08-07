import React, { useState } from 'react'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'

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

    return (<InputGroup>
        <Input
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={handleChange}
            placeholder={placeholder}
        />
        <InputGroupAddon addonType="append">
            <Button onClick={handleSearch}>
                Search
            </Button>
        </InputGroupAddon>
    </InputGroup>)
}

export default SearchForm