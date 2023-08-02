import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    // Evita el refresh del navegador
    event.preventDefault();

    //si hay al menos una letra, devuelve un retur para que se salga de la funcion y no
    // funcione el enter cuando el input esta vacio
    if (inputValue.trim().length <= 1) return;

    //Limpiar input despues de un enter
    setinputValue("");

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Escribe el nombre del Gif que deseas buscar"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
