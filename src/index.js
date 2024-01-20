// En index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { Contador } from "./components/contador";
import { Texto } from "./components/texto";
import { Pila } from "./components/pila";  // Asegúrate de importar el componente Pila

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador />
        <Texto />
        <Pila />  {/* Agrega el componente Pila aquí */}
    </>
);
