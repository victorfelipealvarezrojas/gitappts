import { createContext, useReducer } from "react";
import { categorieReducer } from "./categorieReducer";

export const CategorieContext = createContext({});

export const InitialCategorieState = {
    categorie: [],
    digitando: 'One Punsh',
}

export const CategorieProvider = ({ children }: any) => {

    const [categorieState, despachador] = useReducer(categorieReducer, InitialCategorieState);

    return (
        <CategorieContext.Provider value={{
            categorieState,
            despachador,
        }} >
            {children}
        </CategorieContext.Provider>
    )
}

