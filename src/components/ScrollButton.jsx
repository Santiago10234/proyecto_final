import React, { useState } from 'react';
import '../styles/ScrollBotton.css';
// Componente ScrollButton que permite al usuario volver al inicio de la página
export default function ScrollButton() {
    // Estado que determina si el botón es visible o no
    const [visible, setVisible] = useState(false);
    // Función que controla la visibilidad del botón en función del desplazamiento de la página
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop; // Obtiene la posición del scroll
        // Si se ha desplazado más de 300 píxeles, muestra el botón
        if (scrolled > 300) {
            setVisible(true);
        // Si el scroll es menor o igual a 300 píxeles, oculta el botón
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    // Función que desplaza suavemente la página hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Desplaza la página a la parte superior
            behavior: 'smooth' // Desplazamiento suave
        });
    };
    window.addEventListener("scroll", toggleVisible);
    // Renderiza el botón de scroll hacia arriba solo si es visible
    return (
        <div className='topArrow' onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }}><i className="bi bi-arrow-up-circle-fill"></i></div>
    );
}