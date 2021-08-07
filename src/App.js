import React, { useEffect, useRef, useState } from 'react';
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
import useLocalStorageState from './useLocalStorageState';


function App() {

  const [ jwToken, setJwToken ] = useLocalStorageState("jwToken","")

  useEffect(()=>{
    JoblyApi.token = jwToken
  },[jwToken])


  const [ currentUsername, setCurrentUsername ] = useState(
    jwt.decode(jwToken) ? jwt.decode(jwToken).username : ""
  )
  const [ jobs, updateJobs ] = useApiList("jobs")
  const [ companies, updateCompanies ] = useApiList("companies")
  const [ isLoading, setIsLoading ] = useState(true)
  const history = useHistory()

  const login = async (username, password) => {
    const userData = await JoblyApi.login(username,password)
    if(userData.username){
      setCurrentUsername(userData.username)
      setJwToken(()=>JoblyApi.token)
      setIsLoading(true)
      return true
    }
    else{
      return false
    }
  }

  const logout = () => {
    setCurrentUsername("")
    setJwToken("")
    history.push("/")
  }

  useEffect(() => {
    async function getData() {
      await updateJobs()
      await updateCompanies()
      setIsLoading(false);
    }
    getData();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen/>
  }

  return (
    <div className="App">
      <SetterContext.Provider value={{setIsLoading, login}}>
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
