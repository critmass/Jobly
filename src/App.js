import React, { useEffect, useState } from 'react';
import jwt from "jsonwebtoken"

import './App.css';

import Routes from './RoutesAndNavigation/Routes'
import NavBar from './RoutesAndNavigation/NavBar'
import JoblyApi from './helpers/JoblyApi'
import LoadingScreen from './LoadingHomeAnd404/LoadingScreen'
import useApiList from './hooks/useApiList';
import DataContext from './context/DataContext'
import SetterContext from './context/SetterContext'
import useLocalStorageState from './hooks/useLocalStorageState';
import useLogin from './hooks/useLogin';
import useLogout from './hooks/useLogout';
import useUpdateUser from './hooks/useUpdateUser';
import useRegisterNewUser from './hooks/useRegisterNewUser';
import useApplyToJob from './hooks/useApplyToJob';


function App() {

  const [userToken, setUserToken] = useLocalStorageState("userToken", "")
  useEffect(() => {
    JoblyApi.token = userToken
  },[userToken])

  const [ currentUsername, setCurrentUsername ] = useState(() => {
    try{
      return jwt.decode(userToken).username
    }
    catch{
      return ""
    }
  })
  const [ jobs, updateJobs ] = useApiList("jobs")
  const [ companies, updateCompanies ] = useApiList("companies")
  const [ jobsAppliedTo, setJobsAppliedTo ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  const setters = {setUserToken, setCurrentUsername, setJobsAppliedTo, setIsLoading}

  const login = useLogin(setters)
  const logout = useLogout(setters)
  const updateUser = useUpdateUser({...setters, currentUsername})
  const registerNewUser = useRegisterNewUser(setters)
  const applyToJob = useApplyToJob({ ...setters, currentUsername })

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      await updateJobs()
      await updateCompanies()
      const user = await JoblyApi.getUser(currentUsername)
      console.log(jobs)
      setJobsAppliedTo(user.jobs.map( job => {
        return job.id
      }))
      setIsLoading(false);
    }
    if(currentUsername) {
      getData();
    }
  }, [currentUsername]);

  if (isLoading) {
    return (<main>
        <LoadingScreen/>
      </main>)
  }

  return (
    <div className="App">
      <SetterContext.Provider
        value={{
          applyToJob,
          setIsLoading,
          updateUser,
          login,
          registerNewUser
        }}
      >
        <DataContext.Provider
          value={{
            jobsAppliedTo,
            currentUsername,
            jobs,
            companies
          }}
        >
          <NavBar logout={logout}/>
          <main>
            <Routes/>
          </main>
        </DataContext.Provider>
      </SetterContext.Provider>
    </div>
  );
}

export default App;
