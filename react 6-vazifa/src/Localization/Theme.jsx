import React from 'react'

const Context=React.createContext(null);


function Provider({children}){

    const [theme,setTheme]=React.useState('light')
    return <Context.Provider value={{theme,setTheme}}>{children}</Context.Provider>
}



export {Context,Provider}