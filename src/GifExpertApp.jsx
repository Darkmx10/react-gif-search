import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //exportaciones unificadas en index.js

export const GifExpertApp = () => {
  //Si la informacion del HTML debe cambiar el estado, se debe usar un Hook
  // en este caso useState, utiliza espacios en memoria para las categorias
  //Se debe iniciar como un arreglo
  // const [categories, setCategories] = useState(["One Punch"]); //Agrego nombre aqui si quiero iniciar el sitio con una categoria precargada
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //Valida que la categorie ingresada en el input no se repita.
    //Si incluye el newCategories, no retorna nada
    if (categories.includes(newCategory)) return;

    // categories.push(newCategory);

    //Desestructuracion de categorias
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Valorant']);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li>ABC</li> */}

      {/* Gif item */}
    </>
  );
};
