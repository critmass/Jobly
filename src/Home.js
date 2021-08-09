import React, { useContext } from "react"
import DataContext from "./helpers/DataContext"

const Home = () => {
    const {currentUsername} = useContext(DataContext)
    return (
        <div className="display-2">
            {currentUsername ?
                "Welcome back to Jobly!" :
                "Jobly, find your dream job!"}

        </div>
    )
}

export default Home