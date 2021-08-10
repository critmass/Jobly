import jwt from "jsonwebtoken"
import JoblyApi from "../helpers/JoblyApi"


const useLogin = ({
        setIsLoading,
        setCurrentUsername,
        setUserToken
    }) => {

    const login = async (username, password) => {
        setIsLoading(true)
        const newUserToken = await JoblyApi.login(username, password)
        const decodedUserToken = jwt.decode(newUserToken)
        if (decodedUserToken) {
            setUserToken(newUserToken)
            setCurrentUsername(decodedUserToken.username)
            setIsLoading(false)
            return true
        }
        else {
            setIsLoading(false)
            return false
        }
    }
    return login
}

export default useLogin