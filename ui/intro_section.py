import streamlit as st

from logic.irreversible import detectar_colisiones
from logic.reversible import (
    comprobar_recuperacion,
    tiene_colisiones,
)
from quantum.engine import ejecutar_motor
from ui.react_component import render_react_intro


def render_intro() -> None:
    """
    Renderiza una introducción didáctica, limpia e impulsada por tarjetas interactivas en React 18.
    """

    st.subheader("💡 Ejemplos de la Vida Real (Compresión, Archivos y Videojuegos)")

    # Componente React 18
    render_react_intro()