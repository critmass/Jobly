import JoblyApi from "../helpers/JoblyApi"


const useUpdateUser = ({setIsLoading,currentUsername}) => {
    const updateUser = async userUpdate => {
        setIsLoading(true)
        await JoblyApi.updateUser(currentUsername, userUpdate)
        setIsLoading(false)
    }
    return updateUser
}

export default useUpdateUser