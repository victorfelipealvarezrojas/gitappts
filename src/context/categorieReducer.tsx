import { types } from "../types/ types";

export const categorieReducer = (state: any, action: any) => {
    switch (action.type) {
        case types.cargarCategorie:
            return {
                ...state,
                categorie: [...state.categorie, action.payload]
            }

        case types.digitandoCategorie:
            return {
                ...state,
                digitando: action.payload
            }
        case types.emptyCategorie:
            return {
                ...state,
                digitando: ''
            }


        default:
            return state;
    }
}