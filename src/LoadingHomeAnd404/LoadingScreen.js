import React, { useEffect, useState } from "react"

const LoadingScreen = () => {

    const [ t, setT ] = useState(0)
    useEffect(() =>{
        const time = setInterval(() => {
            setT( currentTime => currentTime + 1 )
        }, 1200)
        return () => clearInterval(time)
    },[])
    return <div className="LoadingScreen">Loading{".".repeat(1+t%3)}</div>
}

export default LoadingScreen