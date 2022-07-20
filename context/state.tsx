import React, { createContext, ReactNode, useContext, useState } from 'react';
import { DAOS } from '../lib/constants';
import { DAOScheme } from '../lib/types';

const DashboardContext = createContext<{
  daoList: DAOScheme[];
  handleSearch: (e: any) => void;
} | undefined>(undefined);

const AppWrapper = ({children}: {children: ReactNode}) => {
  let state = {
    msg: "arre"
  }

  const [daoList, setDaoList] = useState<DAOScheme[]>(DAOS);
  const [inputSearch, setInputSearch] = useState<string>("");


  const handleSearch = (e: any) => {
    if (!e.target.value || e.target.value == "") {
      setDaoList(DAOS)
      return;
    }

    let inputParsed = e.target.value.toLowerCase();
    let daoListFiltered = daoList.filter(dao => dao.name.toLowerCase().includes(inputParsed));    
    setDaoList(daoListFiltered)



    daoList?.filter


  }



  return (
    <DashboardContext.Provider value={{
      daoList,
      handleSearch
    }}>
    {children}
    </DashboardContext.Provider>
  )

}

const useDashBoardContext = () => useContext(DashboardContext);

export { AppWrapper, useDashBoardContext }