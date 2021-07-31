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
import LoadingContext from './helpers/LoadingContext'
import UserTokenContext from './helpers/UserTokenContext'


function App() {

  const [ userToken, setUserToken ] = useState({})
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
        <UserTokenContext.Provider value={userToken}>
          <NavBar setUserToken={setUserToken}/>
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
                    <LogIn login={setUserToken}/>
                }
              </Route>
              <Route exact path="/register">
                {
                  userToken.payload ?
                    <Redirect to="/" /> :
                    <Registeration login={setUserToken}/>
                }
              </Route>
              <Route>
                <NotFound404 />
              </Route>
            </Switch>
          </main>
        </UserTokenContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
