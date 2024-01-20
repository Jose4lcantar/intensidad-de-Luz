import React, { useState } from "react";

export function Contador() {
    const [cont, setCont] = useState(0);

    function avanzar() {
        setCont(cont + 1);
    }

    function retroceder() {
        setCont(cont - 1);
    }

    function reiniciar() {
        setCont(0);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div>El contador es: {cont}</div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button onClick={avanzar}>Incrementar el contador</button>
                <button onClick={retroceder}>Decrementar el contador</button>
                <button onClick={reiniciar}>Reiniciar el contador</button>
            </div>
        </div>
    );
}
