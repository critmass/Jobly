import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import LogIn from './LogIn'
import JobList from './JobList'
import Company from './Company'
import UserPage from './UserPage'
import CompanyList from './CompanyList'
import NotFound404 from './NotFound404'
import Registration from './Registration'
import UpdateUserPage from './UpdateUserPage'
import ProtectedRoute from './helpers/ProtectedRoute'
import DataContext from './context/DataContext'

const Routes = () => {
    const {currentUsername} = useContext(DataContext)
    return (<Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <ProtectedRoute exact path="/jobs">
            <JobList />
        </ProtectedRoute>
        <ProtectedRoute exact path="/companies">
            <CompanyList/>
        </ProtectedRoute>
        <ProtectedRoute path="/companies/:handle">
            <Company />
        </ProtectedRoute>
        <ProtectedRoute exact path="/user">
            <Redirect to={`/user/${currentUsername}`}/>
        </ProtectedRoute>
        <ProtectedRoute path="/user/:username">
            <UserPage/>
        </ProtectedRoute>
        <ProtectedRoute exact path="/update">
            <Redirect to={`/update/${currentUsername}`}/>
        </ProtectedRoute>
        <ProtectedRoute path="/update/:username">
            <UpdateUserPage/>
        </ProtectedRoute>
        <Route exact path="/login">
            {
                currentUsername ?
                    <Redirect to="/" /> :
                    <LogIn />
            }
        </Route>
        <Route exact path="/register">
            {
                currentUsername ?
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