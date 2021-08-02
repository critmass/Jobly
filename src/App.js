import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Home'
import User from './User'
import LogIn from './LogIn'
import NavBar from './NavBar'
import JobList from './JobList'
import Company from './Company'
import CompanyList from './CompanyList'
import NotFound404 from './NotFound404'
import Registeration from './Registration'
import LoadingScreen from './LoadingScreen'
import { iconURL } from './helpers/settings'
import useApiList from './helpers/useApiList'
import JoblyApi from './helpers/JoblyApi'
import UserContext from './helpers/UserContext'
import LoadingContext from './helpers/LoadingContext'


function App() {

  const [ user, setUser ] = useState({})
  const [ jobs, updateJobs ] = useApiList("jobs")
  const [ companies, updateCompanies ] = useApiList("companies")
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    document.querySelector("title").innerText = "Jobly"
    document.querySelector("head link").setAttribute("href",iconURL)
  },[])

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
      <LoadingContext.Provider value={setIsLoading}>
        <UserContext.Provider value={user}>
          <NavBar setUser={setUser}/>
          <main>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/jobs">
                <JobList jobs={jobs}/>
              </Route>
              <Route exact path="/companies">
                <CompanyList companies={companies}/>
              </Route>
              <Route path="/companies/:handle">
                <Company companies={companies}/>
              </Route>
              <Route exact path="/user">
                <User/>
              </Route>
              <Route exact path="/login">
                {
                  userToken.payload ?
                    <Redirect to="/" /> :
                    <LogIn login={setUser}/>
                }
              </Route>
              <Route exact path="/register">
                {
                  userToken.payload ?
                    <Redirect to="/" /> :
                    <Registeration login={setUser}/>
                }
              </Route>
              <Route>
                <NotFound404 />
              </Route>
            </Switch>
          </main>
        </UserContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
