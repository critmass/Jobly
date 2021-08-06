import React, { useEffect, useState } from 'react';

import './App.css';

import Routes from './Routes'
import NavBar from './NavBar'
import JoblyApi from './helpers/JoblyApi'
import LoadingScreen from './LoadingScreen'
import useApiList from './helpers/useApiList'
import DataContext from './helpers/DataContext'
import SetterContext from './helpers/SetterContext'
import { Redirect } from 'react-router-dom';


function App() {

  const [ user, setUser ] = useState({jobs:[]})
  const [ jobs, updateJobs ] = useApiList("jobs")
  const [ companies, updateCompanies ] = useApiList("companies")
  const [ isLoading, setIsLoading ] = useState(true)

  const login = async (username, password) => {
    const userData = await JoblyApi.login(username,password)
    if(userData.username){
      setUser(userData)
      setIsLoading(true)
      return true
    }
    else{
      return false
    }
  }

  const logout = () => {
    setUser({jobs:[]})
    return <Redirect to="/"/>
  }

  const updateUser = async (userUpdate) => {
    const userData = await JoblyApi.updateUser(user.username, userUpdate)
    if(userData.username) setUser(userData)
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
      <SetterContext.Provider value={{setIsLoading, updateUser, login}}>
        <DataContext.Provider value={{user, jobs, companies}}>
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
