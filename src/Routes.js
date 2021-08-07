import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import LogIn from './LogIn'
import User from './UserPage'
import JobList from './JobList'
import Company from './Company'
import CompanyList from './CompanyList'
import NotFound404 from './NotFound404'
import Registration from './Registration'
import DataContext from './helpers/DataContext'


const Routes = () => {
    const {currentUser} = useContext(DataContext)
    return (<Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/jobs">
            <JobList />
        </Route>
        <Route exact path="/companies">
            <CompanyList/>
        </Route>
        <Route path="/companies/:handle">
            <Company />
        </Route>
        <Route exact path="/user">
            <Redirect to={`/user/${currentUser.username}`}/>
        </Route>
        <Route path="/user/:username">
            <User/>
        </Route>
        <Route exact path="/login">
            {
                currentUser.username ?
                    <Redirect to="/" /> :
                    <LogIn />
            }
        </Route>
        <Route exact path="/register">
            {
                currentUser.username ?
                    <Redirect to="/" /> :
                    <Registration />
            }
        </Route>
        <Route>
            <NotFound404 />
        </Route>
    </Switch>)
}

export default Routes