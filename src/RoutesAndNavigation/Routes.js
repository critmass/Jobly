import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../LoadingHomeAnd404/Home'
import LogIn from '../Authorization/LogIn'
import JobList from '../Job/JobList'
import Company from '../Company/Company'
import UserPage from '../User/UserPage'
import CompanyList from '../Company/CompanyList'
import NotFound404 from '../LoadingHomeAnd404/NotFound404'
import Registration from '../Authorization/Registration'
import UpdateUserPage from '../User/UpdateUserPage'
import ProtectedRoute from './ProtectedRoute'
import DataContext from '../context/DataContext'

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