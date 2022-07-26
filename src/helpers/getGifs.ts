import { getInputUnstyledUtilityClass } from "@mui/base";

export const getGifs = async (categorie:any) => {
    const ulr = `https://api.giphy.com/v1/gifs/search?api_key=OyCMYQ84oDSARVPAVCzpUpej1WHu0qhB&q=${categorie}&limit=6`

    const response = await fetch(ulr);
    const { data } = await response.json();

    const gits = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gits;

}