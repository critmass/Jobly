import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from "jsonwebtoken"

import './App.css';

import Routes from './Routes'
import NavBar from './NavBar'
import JoblyApi from './helpers/JoblyApi'
import LoadingScreen from './LoadingScreen'
import useApiList from './helpers/useApiList'
import DataContext from './helpers/DataContext'
import SetterContext from './helpers/SetterContext'
import useLocalStorageState from './helpers/useLocalStorageState';


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
  const [ user, setUser ] = useState({jobs:[]})
  const [ jobs, updateJobs ] = useApiList("jobs")
  const [ companies, updateCompanies ] = useApiList("companies")
  const [ isLoading, setIsLoading ] = useState(false)
  const history = useHistory()

  const login = async (username, password) => {
    setIsLoading(true)
    const userData = await JoblyApi.login(username,password)
    const decodedUsername = jwt.decode(userData).username
    if (decodedUsername){
      setUserToken(userData)
      setCurrentUsername(decodedUsername)
      setIsLoading(false)
      return true
    }
    else{
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setCurrentUsername("")
    setUserToken("")
    JoblyApi.token = ''
    history.push("/")
  }

  const updateUser = async (userUpdate) => {
    setIsLoading(true)
    await JoblyApi.updateUser(currentUsername, userUpdate)
    setIsLoading(false)
  }

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      await updateJobs()
      await updateCompanies()
      setIsLoading(false);
    }
    if(currentUsername) {
      getData();
    }
  }, [currentUsername]);

  if (isLoading) {
    return <LoadingScreen/>
  }

  return (
    <div className="App">
      <SetterContext.Provider value={{setIsLoading, updateUser, login}}>
        <DataContext.Provider value={{currentUsername, jobs, companies}}>
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
