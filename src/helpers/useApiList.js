import { useState } from "react"
import JoblyApi from "./JoblyApi"

const useApiList = (source) => {

    const [state, setState] = useState([])
    async function updateState() {
        let apiReturn = await JoblyApi.request(source)
        setState(apiReturn[source])
    }

    return [state, updateState]
}

export default useApiList