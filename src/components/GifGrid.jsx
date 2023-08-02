
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {


  //Custom hook useFetchGifs
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      
      <h3>{category}</h3>
      
      
      {
        //Condicion If corto con una sola condicion para mostrar h2 si esta cargando 
        //Si isLoading es true, ejecuta la segunda parte, si esta en false, ejecuta la primera parte y la segunda no
        isLoading && ( <h2>Cargando...</h2> )
      }

     

      <div className="card-grid">

        {images.map((image) => (
            <GifItem 
            key={image.id}
            { ...image }
            />
        ))}

      </div>
    </>
  );
};
