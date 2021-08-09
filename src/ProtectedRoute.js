import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import DataContext from "./helpers/DataContext"


const ProtectedRoute = ({to, exact=false}) => {
    const {currentUsername} = useContext(DataContext)
    return (<Route exact={exact} to={to}>
        {currentUsername ?
            this.props.children :
            <Redirect to="/"/>}
    </Route>)
}

export default ProtectedRoute