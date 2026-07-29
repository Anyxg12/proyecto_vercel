import os
import streamlit as st
import streamlit.components.v1 as components

# Directorio del Build de Producción en React para Vercel / Streamlit
DIRECTORIO_ACTUAL = os.path.dirname(os.path.abspath(__file__))
RUTA_BUILD_REACT = os.path.join(DIRECTORIO_ACTUAL, "react_frontend", "build")

# Declarar oficialmente el Custom Component conectado al Build de React
if os.path.exists(RUTA_BUILD_REACT):
    _react_component_native = components.declare_component(
        "react_quantum_hud",
        path=RUTA_BUILD_REACT
    )
else:
    _react_component_native = None


def render_react_hero(
    titulo: str = "Preservación de Información y Lógica Reversible",
    subtitulo: str = "Plataforma de Simulación Cuántica 2026",
    descripcion: str = "Explora cómo la información pasa de ser destruida en la lógica tradicional (AND) a conservarse intacta en la lógica reversible (CNOT) y el cómputo cuántico.",
):
    """
    Renderiza el Hero Banner interactivo del proyecto React 18.
    """
    if _react_component_native is not None:
        return _react_component_native(
            titulo=titulo,
            subtitulo=subtitulo,
            descripcion=descripcion,
            key="react_vercel_hero",
            default=None
        )
    return None


def render_react_intro():
    """
    Renderiza las tarjetas introductorias en React 18.
    """
    if _react_component_native is not None:
        return _react_component_native(
            titulo="Ejemplos de la Vida Real y Tecnología",
            key="react_vercel_intro",
            default=None
        )
    return None


def render_react_quantum_hud(
    titulo: str = "Tablero Interactivo de Lógica React",
    tipo_compuerta: str = "CNOT",
    entrada: str = "(1, 0)",
    salida: str = "(1, 1)",
    fidelidad: float = 100.0,
    es_reversible: bool = True,
    key=None,
):
    """
    Renderiza el Nodo de Compuertas Lógicas en React 18 + Framer Motion.
    """
    if _react_component_native is not None:
        return _react_component_native(
            titulo=titulo,
            tipoCompuerta=tipo_compuerta,
            entrada=entrada,
            salida=salida,
            fidelidad=fidelidad,
            esReversible=es_reversible,
            key=key,
            default=None
        )
    return None


def render_react_advanced_motor_hud(theta: float = 90.0, phi: float = 0.0, fidelidad: float = 100.0):
    """
    Renderiza el Panel HUD del Motor Avanzado en React 18.
    """
    if _react_component_native is not None:
        return _react_component_native(
            titulo=f"Motor Cuántico Avanzado (θ={theta}°, φ={phi}°)",
            fidelidad=fidelidad,
            key="react_vercel_motor",
            default=None
        )
    return None
