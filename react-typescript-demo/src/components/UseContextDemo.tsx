import React from 'react'

type contextProps = {
    children: React.ReactNode,
}

type contextValueProps = {
    name: string,
    age: number,
}
export const nameContext = React.createContext({} as contextValueProps);
//<contextValueProps>({} as contextValueProps);
function UseContextDemo({children}: contextProps) {
  return (
    <>
    <div>UseContextDemo</div>
    <nameContext.Provider value={{name: 'Shiva', age: 24}}>
    {children}
    </nameContext.Provider>
    </>
  )
}

export default UseContextDemo