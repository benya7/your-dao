import React, { createContext, ReactNode, useContext } from 'react';

const DashboardContext = createContext<{msg: string}>({msg: "arre"});

const AppWrapper = ({children}: {children: ReactNode}) => {
  let state = {
    msg: "arre"
  }

  return (
    <DashboardContext.Provider value={state}>
    {children}
    </DashboardContext.Provider>
  )

}

const useDashBoardContext = () => useContext(DashboardContext);

export { AppWrapper, useDashBoardContext }