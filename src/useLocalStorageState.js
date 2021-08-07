import React,{ useEffect, useState } from "react"

const useLocalStorageState = (key, defaultData) => {

    const [state, setState] = useState(() => {
        let value = JSON.parse(window.localStorage.getItem(key)) || defaultData
        return value
    })

    useEffect(() => {
        window.localStorage.setItem(key, state)
    },[key, state])

    return [state, setState]
}

export default useLocalStorageState