import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ({ categorie }: any) => {

     const [images, setImages] = useState([]);
     const [isLoading, setisLoading] = useState(true);

     const getImages = async () => {
          const newImages: any = await getGifs(categorie);
          setImages(newImages);
          setisLoading(false);
     }

     useEffect(() => {
          getImages();
     }, []);

     return {
          images,
          isLoading
     }
}
