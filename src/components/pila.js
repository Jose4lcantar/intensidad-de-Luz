import React, { useState } from "react";

export function Pila() {
    const intensidades = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
    const [nivel, setNivel] = useState("apagado");

    function aumentarIntensidad() {
        const currentIndex = intensidades.indexOf(nivel);
        if (currentIndex < intensidades.length - 1) {
            setNivel(intensidades[currentIndex + 1]);
        } else {
            setNivel("apagado");
        }
    }

    function disminuirIntensidad() {
        const currentIndex = intensidades.indexOf(nivel);
        if (currentIndex > 0) {
            setNivel(intensidades[currentIndex - 1]);
        } else {
            setNivel("encendido al 100%");
        }
    }

    function resetearIntensidad() {
        setNivel("apagado");
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div>Estado de la luz: {nivel}</div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button onClick={aumentarIntensidad}>Aumentar</button>
                <button onClick={disminuirIntensidad}>Disminuir</button>
                <button onClick={resetearIntensidad}>Resetear</button>
            </div>
        </div>
    );
}
