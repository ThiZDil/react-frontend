import React, { createContext, useContext } from 'react';

const RouterContext = createContext();

export const RouterProvider = ({ children, history }) => {
    return (
        <RouterContext.Provider value={{ history }}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouter = () => {
    return useContext(RouterContext);
};
