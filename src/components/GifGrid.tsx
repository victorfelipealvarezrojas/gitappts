import { Paper, Divider, Stack, styled, ImageList, ImageListItem } from '@mui/material';
import { useFetchGifs } from '../hooks/useFetchGifs';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const GifGrid = ({ categorie }: any) => {

    const { images, isLoading } = useFetchGifs(categorie);


    return (
        <>
            {
                isLoading && <h2>Cargando</h2>
            }
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <ImageList sx={{ width: "90%", height: 450 }} cols={3} rowHeight={164}>
                    {
                        images.map((image: any) => (
                            <ImageListItem key={image.url}>
                                <img
                                    src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={image.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Stack>

        </ >
    );
}

