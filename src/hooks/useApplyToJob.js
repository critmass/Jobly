import JoblyApi from "../helpers/JoblyApi"


const useApplyToJob = ({setJobsAppliedTo, currentUsername}) => {
    const applyToJob = jobId => {
        if (
            JoblyApi.applyToJob(currentUsername, jobId)
        ) {
            setJobsAppliedTo(jobs => [...jobs, jobId])
        }
    }
    return applyToJob
}

export default useApplyToJob