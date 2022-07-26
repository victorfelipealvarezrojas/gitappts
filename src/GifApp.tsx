import { useContext, useState } from "react"
import { Button, Box, Container } from "@mui/material"
import { CategorieContext } from './context/CategorieContext';
import { types } from "./types/ types";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const { categorieState, despachador }: any = useContext(CategorieContext);

    const onClickEvent = (event: any) => {
        if (categorieState.digitando.trim().length <= 1) return;


        if (categorieState.categorie.includes(categorieState.digitando)) return;


        despachador({
            type: types.cargarCategorie,
            payload: categorieState.digitando
        })

        despachador({
            type: types.emptyCategorie
        })
        //<li key={categorie}>{categorie}</li>

    }

    return (

        <Box alignItems="center" >
            {/**List to gifs */}
            <Button variant="outlined" onClick={onClickEvent}>Agregar</Button>

            {
                categorieState.categorie.map((categorie: any) => (
                    <div key={categorie}>
                        <h3>{categorie}</h3>
                        <GifGrid categorie={categorie} />
                    </div>
                ))
            }

        </Box>

    )
}
