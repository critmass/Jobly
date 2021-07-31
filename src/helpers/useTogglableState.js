import React, { useState } from "react";

const useTogglableState = ( initialState = false ) => {

    const [ state, setState ] = useState( initialState )
    const toggleState = () => {
        setState( s => s ? false : true )
    }

    return [ state, toggleState ]
}

export default useTogglableState