import streamlit as st
from ui.react_component import render_react_hero


def render_hero() -> None:
    """
    Renderiza la cabecera interactiva principal impulsada por React 18 + Lucide Icons.
    """

    render_react_hero(
        titulo="Preservación de Información y Lógica Reversible",
        subtitulo="Plataforma de Simulación Cuántica 2026",
        descripcion="Explora cómo la información pasa de ser destruida en la lógica tradicional (AND) a conservarse intacta en la lógica reversible (CNOT) y el cómputo cuántico.",
    )