import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem, Nav } from "reactstrap";
import UserTokenContext from "./helpers/UserTokenContext";
import LoadingContext from "./helpers/LoadingContext";

function NavBar({setUserToken}) {

    const userToken = useContext( UserTokenContext )

    const Logout = () => {

        const update = useContext( LoadingContext )
        setUserToken({})
        update(true)
    }

    return (
        <div>
            <Navbar expand="md" >
                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>
                <Nav className="ml-auto" navbar>
                    { userToken.payload ?
                        (<>
                            <NavItem>
                                <NavLink exact to="/companies" class="nav-link">
                                    Companies
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/jobs">
                                    Jobs
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/user">
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={ Logout }>
                                Logout {userToken.payload.username}
                            </NavItem >
                        </>) :
                        (<>
                            <NavItem className="mr-4">
                                <NavLink exact to="/login" class="nav-link">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/register" class="nav-link">
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
