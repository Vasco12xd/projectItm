import React from "react";
import { useContext, useEffect, useState } from "react";

//Context
interface AppContextType {
    user: any;
    setUser: (user: any) => void;
}

const AppContext = React.createContext<AppContextType>({
    user: null,
    setUser: () => {},
});

export const AppProvider = ({children}: any) => {
    const [user, setUser] = useState<any>(null);


    return (
        <AppContext.Provider value={{
            user,
            setUser,
            }}>
            {children}
        </AppContext.Provider>
    )
}   
