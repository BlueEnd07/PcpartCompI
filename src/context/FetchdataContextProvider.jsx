import { useState } from "react";
import FetchDataContext from "./fetchdatacontext";

const FetchdataProvider = ({children}) =>{

  const [fetchdata, setFetchData] = useState(null)

  return(
  <FetchDataContext.Provider value={{fetchdata, setFetchData}}>
      {children}
    </FetchDataContext.Provider>
  )

}

export default FetchdataProvider
