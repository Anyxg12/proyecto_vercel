import pandas as pd
import streamlit as st

from logic.irreversible import (
    agrupar_entradas_por_salida,
    detectar_colisiones,
    generar_tabla_and,
    puerta_and,
)
from logic.reversible import (
    comprobar_recuperacion,
    generar_tabla_cnot,
    puerta_cnot,
    tiene_colisiones,
)
from ui.react_component import render_react_quantum_hud


def render_flujo_bits(
    entrada: str,
    operacion: str,
    salida: str,
    color: str,
) -> None:
    """
    Renderiza un nodo visual de transformación lógica con estética Vercel/Linear de alto nivel.
    """

    st.html(
        f"""
        <section class="logic-flow-node">
            <style>
                .logic-flow-node {{
                    display: grid;
                    grid-template-columns:
                        minmax(140px, 1fr)
                        auto
                        minmax(140px, 1fr);
                    align-items: center;
                    gap: 1.4rem;
                    margin: 1.6rem 0 2rem;
                }}

                .flow-card {{
                    position: relative;
                    padding: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 20px;
                    background:
                        linear-gradient(
                            145deg,
                            rgba(15, 22, 42, 0.88),
                            rgba(6, 10, 24, 0.95)
                        );
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
                    text-align: center;
                    backdrop-filter: blur(16px);
                }}

                .flow-card-label {{
                    display: block;
                    margin-bottom: 0.45rem;
                    color: #94a3b8;
                    font-size: 0.72rem;
                    font-weight: 750;
                    letter-spacing: 0.10em;
                    text-transform: uppercase;
                }}

                .flow-card-value {{
                    color: white;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 2.2rem;
                    font-weight: 850;
                    letter-spacing: 0.08em;
                }}

                .flow-operator {{
                    min-width: 140px;
                    padding: 1rem 1.4rem;
                    border: 1px solid {color};
                    border-radius: 999px;
                    color: white;
                    background: color-mix(
                        in srgb,
                        {color} 20%,
                        transparent
                    );
                    box-shadow: 0 0 35px
                        color-mix(
                            in srgb,
                            {color} 28%,
                            transparent
                        );
                    text-align: center;
                    font-weight: 850;
                    font-size: 1.08rem;
                }}

                .flow-arrow {{
                    margin-top: 0.2rem;
                    color: {color};
                    font-size: 1.5rem;
                }}

                @media (max-width: 650px) {{
                    .logic-flow-node {{
                        grid-template-columns: 1fr;
                    }}

                    .flow-operator {{
                        justify-self: center;
                    }}
                }}
            </style>

            <div class="flow-card">
                <span class="flow-card-label">Datos de Entrada</span>
                <span class="flow-card-value">{entrada}</span>
            </div>

            <div class="flow-operator">
                {operacion}
                <div class="flow-arrow">→</div>
            </div>

            <div class="flow-card">
                <span class="flow-card-label">Resultado Obtenido</span>
                <span class="flow-card-value">{salida}</span>
            </div>
        </section>
        """
    )


def render_and_section() -> None:
    """
    Laboratorio interactivo de la Puerta Tradicional (AND).
    """

    st.header("1. Puerta Tradicional (AND): Pérdida Irreversible de Datos")

    st.info(
        "💡 **Ejemplo de la Vida Real (Compresión de Imagen)**: "
        "Imagina que tomas una fotografía HD y la comprimes a un archivo microscópico de 10x10 píxeles. "
        "Los detalles del rostro original se mezclan y se pierden para siempre. Es imposible restaurar los megapíxeles originales."
    )

    columna_a, columna_b = st.columns(2)

    with columna_a:
        entrada_a = st.radio(
            "Primer Dato (Entrada A)",
            options=[0, 1],
            horizontal=True,
            key="and_entrada_a",
        )

    with columna_b:
        entrada_b = st.radio(
            "Segundo Dato (Entrada B)",
            options=[0, 1],
            horizontal=True,
            key="and_entrada_b",
        )

    salida = puerta_and(
        entrada_a,
        entrada_b,
    )

    # Renderizado del Streamlit Custom Component basado en React
    render_react_quantum_hud(
        titulo="Componente React: Puerta Tradicional AND",
        tipo_compuerta="AND",
        entrada=f"({entrada_a}, {entrada_b})",
        salida=str(salida),
        fidelidad=0.0 if salida == 0 else 100.0,
        es_reversible=False,
        key="react_hud_and"
    )

    render_flujo_bits(
        entrada=f"({entrada_a}, {entrada_b})",
        operacion="Puerta AND",
        salida=str(salida),
        color="#38bdf8",
    )

    grupos = agrupar_entradas_por_salida()
    colisiones = detectar_colisiones()
    entradas_compatibles = grupos[salida]

    metrica_1, metrica_2, metrica_3 = st.columns(3)

    with metrica_1:
        st.metric(
            "Resultado Obtenido",
            salida,
        )

    with metrica_2:
        st.metric(
            "Opciones Posibles",
            len(entradas_compatibles),
        )

    with metrica_3:
        st.metric(
            "¿Se puede recuperar el origen?",
            "No" if salida in colisiones else "Sólo si ambas son 1",
        )

    if salida in colisiones:
        st.error(
            f"El resultado {salida} puede provenir de varias combinaciones {entradas_compatibles}. "
            "Por lo tanto, los datos originales no se pueden restaurar."
        )
    else:
        st.success(
            "En este caso específico la salida fue 1 (ambos datos eran 1). "
            "Sin embargo, la regla general AND destruye datos cuando el resultado es 0."
        )

    st.subheader("📋 Tabla de Combinaciones (Puerta AND)")

    tabla = pd.DataFrame(
        generar_tabla_and()
    )

    tabla.columns = [
        "Primer Dato",
        "Segundo Dato",
        "Resultado Final",
    ]

    tabla["¿Se Pierde el Origen?"] = tabla["Resultado Final"].map(
        lambda valor: (
            "Sí (Mismo resultado para varios orígenes)"
            if valor in colisiones
            else "No (Caso transparente)"
        )
    )

    st.dataframe(
        tabla,
        use_container_width=True,
        hide_index=True,
    )


def render_cnot_section() -> None:
    """
    Laboratorio interactivo de la Puerta Reversible (CNOT).
    """

    st.header("2. Puerta Reversible (CNOT): Conservación y Recuperación Total")

    st.info(
        "💡 **Ejemplo de la Vida Real (Archivos ZIP y Firma Digital)**: "
        "Imagina que empaquetas un archivo en un contenedor ZIP con clave. Al desarchivar el contenedor, "
        "el software reconstruye exactamente el documento original bit a bit, sin perder una sola letra."
    )

    columna_control, columna_objetivo = st.columns(2)

    with columna_control:
        control = st.radio(
            "Dato Principal (Control)",
            options=[0, 1],
            horizontal=True,
            key="cnot_control",
        )

    with columna_objetivo:
        objetivo = st.radio(
            "Dato Secundario (Objetivo)",
            options=[0, 1],
            horizontal=True,
            key="cnot_objetivo",
        )

    entrada = (
        control,
        objetivo,
    )

    salida = puerta_cnot(
        control,
        objetivo,
    )

    recuperada = puerta_cnot(
        *salida
    )

    # Renderizado del Streamlit Custom Component basado en React
    render_react_quantum_hud(
        titulo="Componente React: Puerta Reversible CNOT",
        tipo_compuerta="CNOT",
        entrada=f"({entrada[0]}, {entrada[1]})",
        salida=f"({salida[0]}, {salida[1]})",
        fidelidad=100.0,
        es_reversible=True,
        key="react_hud_cnot"
    )

    render_flujo_bits(
        entrada=f"({entrada[0]}, {entrada[1]})",
        operacion="CNOT (Paso 1)",
        salida=f"({salida[0]}, {salida[1]})",
        color="#c084fc",
    )

    st.subheader("🔄 Proceso Inverso (Recuperación Exacta)")

    render_flujo_bits(
        entrada=f"({salida[0]}, {salida[1]})",
        operacion="CNOT Inverso (Paso 2)",
        salida=f"({recuperada[0]}, {recuperada[1]})",
        color="#34d399",
    )

    resultados = comprobar_recuperacion()

    metrica_1, metrica_2, metrica_3 = st.columns(3)

    with metrica_1:
        st.metric(
            "¿Pierde datos?",
            "No (100% Invertible)",
        )

    with metrica_2:
        st.metric(
            "¿Se recuperó la entrada?",
            (
                "Sí, exactamente igual"
                if recuperada == entrada
                else "No"
            ),
        )

    with metrica_3:
        porcentaje = (
            sum(resultados.values())
            / len(resultados)
            * 100
        )

        st.metric(
            "Efectividad del Proceso",
            f"{porcentaje:.0f} %",
        )

    if recuperada == entrada:
        st.success(
            "¡Excelente! Al aplicar el proceso inverso CNOT, los datos se reconstruyen al 100%."
        )

    st.subheader("📋 Tabla Biyectiva (CNOT)")

    tabla = pd.DataFrame(
        generar_tabla_cnot()
    )

    tabla["Entrada Recuperada"] = tabla[
        "salida"
    ].map(
        lambda valor: puerta_cnot(
            *valor
        )
    )

    tabla["¿Es idéntica al origen?"] = tabla.apply(
        lambda fila: (
            "Sí (100% Idéntica)"
            if fila["entrada"]
            == fila["Entrada Recuperada"]
            else "No"
        ),
        axis=1,
    )

    st.dataframe(
        tabla,
        use_container_width=True,
        hide_index=True,
    )