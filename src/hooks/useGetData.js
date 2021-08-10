import JoblyApi from "../helpers/JoblyApi"


const useGetData =
    ({setIsLoading, updateCompanies, updateJobs}) => {
        async function getData() {
            setIsLoading(true)
            await updateJobs()
            await updateCompanies()
            const user = await JoblyApi.getUser(currentUsername)
            setJobsAppliedTo(user.applications.map(job => job.id))
            setIsLoading(false);
        }
        return getData()
    }

export default useGetData