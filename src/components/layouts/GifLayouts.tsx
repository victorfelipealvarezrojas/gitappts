import { FC, PropsWithChildren } from "react";
import { Container } from '@mui/material';
import { SearchAppBar } from "../navigation/NavigationBar";


export const GifLayouts: FC<PropsWithChildren> = ({ children }) => {

    return (
        <>
            {/*nav bar menu productos*/}
            <SearchAppBar title="GifApp" />

            <Container
                sx={{ marginTop: 5 }}
            >
                {children}
            </Container>
        </>
    )
}
