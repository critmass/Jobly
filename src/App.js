import React, { useEffect, useState } from 'react';

import './App.css';

import Routes from './Routes'
import NavBar from './NavBar'
import JoblyApi from './helpers/JoblyApi'
import LoadingScreen from './LoadingScreen'
import useApiList from './helpers/useApiList'
import DataContext from './helpers/DataContext'
import SetterContext from './helpers/SetterContext'
import { useHistory } from 'react-router-dom';


function App() {

  const [ currentUser, setCurrentUser ] = useState({applications:[]})
  const [ jobs, updateJobs ] = useApiList("jobs")
  const [ companies, updateCompanies ] = useApiList("companies")
  const [ isLoading, setIsLoading ] = useState(true)
  const history = useHistory()

  const login = async (username, password) => {
    const userData = await JoblyApi.login(username,password)
    if(userData.username){
      setCurrentUser(userData)
      setIsLoading(true)
      return true
    }
    else{
      return false
    }
  }

  const logout = () => {
    setCurrentUser({jobs:[]})
    history.push("/")
  }

  const updateUser = async (userUpdate) => {
    const userData = await JoblyApi.updateUser(currentUser.username, userUpdate)
    if(userData.username) setCurrentUser(userData)
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
        <DataContext.Provider value={{currentUser, jobs, companies}}>
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
