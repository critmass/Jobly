import { useHistory } from "react-router-dom"


const useLogout = ({setCurrentUsername, setUserToken }) => {
    const history = useHistory()
    const logout = () => {
        setCurrentUsername("")
        setUserToken("")
        history.push("/")
    }
    return logout
}

export default useLogout