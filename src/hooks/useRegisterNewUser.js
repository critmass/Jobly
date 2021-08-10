import { useHistory } from "react-router-dom"
import jwt from "jsonwebtoken"
import JoblyApi from "../helpers/JoblyApi"


const useRegisterNewUser =
    ({setIsLoading,setUserToken,setCurrentUsername}) => {
        const history = useHistory()
        const registerNewUser = async newUser => {
            setIsLoading(true)
            const newToken = await JoblyApi.registerNewUser(newUser)
            const newTokenDecoded = jwt.decode(newToken)
            if (newTokenDecoded.username) {
                setCurrentUsername(newTokenDecoded.username)
                setUserToken(newToken)
            }
            setIsLoading(false)
            history.push("/")
        }

        return registerNewUser
}

export default useRegisterNewUser