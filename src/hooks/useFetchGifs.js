import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Hook es una funcion que regresa algo
//Contiene la logica de cargar y manejar las imagenes
export const useFetchGifs = ( category ) => {
 

      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState(true);  //Cuando se carga por primera vez, se carga en true

      const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); //Cuando deja de cargar, se pasa a false
      }

      //useEffect funciona para disparar efectos secundarios(procesos que quiero ejecutar cuando algo sucede)
      useEffect(() => {
        getImages();
      }, []);

  return {
    images,
    isLoading
  }


}
