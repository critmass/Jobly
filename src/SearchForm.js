import React, { useState } from 'react'
import useChangeHandler from './helpers/useChangeHandler'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'

const SearchForm = ({setResults, dataSet, searchBy, placeholder}) => {

    const [searchTerm, setSearchTerm] = useState({searchTerm:""})

    const handleChange = useChangeHandler(setSearchTerm)

    const handleSearch = e => {
        e.preventDefault()
        let results
        if (searchTerm.searchTerm.trim() != "") {
            results = dataSet.filter(data => {
                return data[searchBy].includes(
                    searchTerm.searchTerm.trim()
                )
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