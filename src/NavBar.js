import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem, Nav } from "reactstrap";
import UserContext from "./helpers/UserContext";
import LoadingContext from "./helpers/LoadingContext";
import { iconURL } from "./helpers/settings";

function NavBar({setUser}) {

    const {user} = useContext( UserContext )

    const Logout = () => {

        const update = useContext( LoadingContext )
        setUser({})
        update(true)
    }

    return (
        <div>
            <Navbar expand="md" >
                <NavLink exact to="/" className="NavBar-brand NavBar-link navbar-brand">
                    <span className="mx-4">
                        Jobly <img src={iconURL} className="NavBar-img"/>
                    </span>
                </NavLink>
                <Nav className="position-absolute end-0" navbar>
                    { user.username ?
                        (<>
                            <NavItem>
                                <NavLink exact to="/companies" className="NavBar-link ">
                                    Companies
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/jobs" className="NavBar-link">
                                    Jobs
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/user" className="NavBar-link">
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={ Logout }>
                                Logout {user.username}
                            </NavItem >
                        </>) :
                        (<>
                            <NavItem className="mr-4">
                                <NavLink exact to="/login" className="NavBar-link mx-2">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/register" className="NavBar-link mx-2">
                                    Register
                                </NavLink>
                            </NavItem>
                        </>)
                    }
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;
