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
)
from quantum.engine import (
    ResultadoMotor,
    ejecutar_motor,
)


def render_dashboard_comparativo(
    resultado: ResultadoMotor,
) -> None:
    """
    Renderiza el panel comparativo didáctico entre los tres modelos.
    """

    colisiones_and = detectar_colisiones()
    entradas_colisionadas = len(
        colisiones_and.get(0, [])
    )

    recuperacion_cnot = comprobar_recuperacion()
    porcentaje_cnot = (
        sum(recuperacion_cnot.values())
        / len(recuperacion_cnot)
        * 100
    )

    fidelidad_cuantica = (
        resultado.fidelidad * 100
    )

    st.html(
        f"""
        <section class="comparison-dashboard">
            <style>
                .comparison-dashboard {{
                    position: relative;
                    overflow: hidden;

                    padding: 2.8rem;
                    margin: 1.4rem 0 2rem;

                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 28px;

                    background:
                        linear-gradient(
                            145deg,
                            rgba(14, 22, 48, 0.94),
                            rgba(5, 10, 26, 0.98)
                        );

                    box-shadow:
                        0 30px 90px rgba(0, 0, 0, 0.45);
                }}

                .comparison-heading {{
                    max-width: 880px;
                    margin-bottom: 2.6rem;
                }}

                .comparison-kicker {{
                    color: #38bdf8;
                    font-size: 0.80rem;
                    font-weight: 800;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                }}

                .comparison-title {{
                    margin: 0.5rem 0 0.85rem;

                    color: white;
                    font-size: clamp(2.1rem, 4.4vw, 3.4rem);
                    font-weight: 880;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                }}

                .comparison-description {{
                    color: #cbd5e1;
                    font-size: 1.08rem;
                    line-height: 1.78;
                }}

                .comparison-cards {{
                    position: relative;

                    display: grid;
                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));

                    gap: 1.4rem;
                }}

                .comparison-card {{
                    position: relative;
                    z-index: 2;
                    overflow: hidden;

                    min-height: 380px;
                    padding: 1.8rem;

                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 24px;

                    background: rgba(10, 14, 24, 0.65);

                    backdrop-filter: blur(16px);

                    transition:
                        transform 0.30s ease,
                        border-color 0.30s ease,
                        box-shadow 0.30s ease;
                }}

                .comparison-card:hover {{
                    transform: translateY(-8px);
                    border-color: rgba(56, 189, 248, 0.45);
                    box-shadow: 0 25px 75px rgba(0, 0, 0, 0.45);
                }}

                .model-symbol {{
                    display: grid;
                    place-items: center;

                    width: 62px;
                    height: 62px;
                    margin-bottom: 1.3rem;

                    border-radius: 20px;

                    font-size: 1.5rem;
                    font-weight: 850;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: white;
                }}

                .model-type {{
                    margin-bottom: 0.45rem;

                    color: #8f9bb3;
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.11em;
                    text-transform: uppercase;
                }}

                .model-name {{
                    margin: 0 0 0.85rem;

                    color: white;
                    font-size: 1.45rem;
                    font-weight: 850;
                }}

                .model-description {{
                    min-height: 98px;
                    margin: 0;

                    color: #cbd5e1;
                    font-size: 0.92rem;
                    line-height: 1.70;
                }}

                .result-box {{
                    margin-top: 1.4rem;
                    padding: 1.1rem;

                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 18px;

                    background: rgba(3, 6, 18, 0.80);
                }}

                .result-label {{
                    display: block;
                    margin-bottom: 0.38rem;

                    color: #828fa8;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 0.10em;
                    text-transform: uppercase;
                }}

                .result-value {{
                    display: block;

                    color: white;
                    font-size: 1.15rem;
                    font-weight: 850;
                }}

                @media (max-width: 900px) {{
                    .comparison-cards {{
                        grid-template-columns: 1fr;
                    }}
                }}
            </style>

            <div class="comparison-heading">
                <span class="comparison-kicker">
                    Comparación Clara y Directa
                </span>

                <h2 class="comparison-title">
                    Resumen de los Tres Sistemas
                </h2>

                <p class="comparison-description">
                    Una vista rápida para entender cómo responde cada modelo al reto de conservar los datos originales.
                </p>
            </div>

            <div class="comparison-cards">
                <div class="comparison-card">
                    <div class="model-symbol">&amp;</div>
                    <span class="model-type">Lógica Tradicional</span>
                    <h3 class="model-name">Puerta AND</h3>

                    <p class="model-description">
                        No conserva los datos de origen. Diferentes combinaciones dan el mismo resultado, imposibilitando volver atrás.
                    </p>

                    <div class="result-box">
                        <span class="result-label">Resultado</span>
                        <span class="result-value">
                            Pérdida de datos ({entradas_colisionadas} a 1)
                        </span>
                    </div>
                </div>

                <div class="comparison-card">
                    <div class="model-symbol">⊕</div>
                    <span class="model-type">Lógica Reversible</span>
                    <h3 class="model-name">Puerta CNOT</h3>

                    <p class="model-description">
                        Guarda la información mediante parejas de bits. Permite regresar exactamente a la entrada inicial.
                    </p>

                    <div class="result-box">
                        <span class="result-label">Resultado</span>
                        <span class="result-value">
                            {porcentaje_cnot:.0f}% Recuperable
                        </span>
                    </div>
                </div>

                <div class="comparison-card">
                    <div class="model-symbol">Ψ</div>
                    <span class="model-type">Lógica Cuántica</span>
                    <h3 class="model-name">Simulación Cuántica</h3>

                    <p class="model-description">
                        La información se reparte entre los cúbits. Ningún dato desaparece y el sistema se recupera por completo.
                    </p>

                    <div class="result-box">
                        <span class="result-label">Resultado</span>
                        <span class="result-value">
                            Fidelidad = {fidelidad_cuantica:.2f}%
                        </span>
                    </div>
                </div>
            </div>
        </section>
        """
    )


def render_matriz_comparativa(
    resultado: ResultadoMotor,
) -> None:
    """
    Muestra la tabla comparativa simple y fácil de explicar.
    """

    st.subheader("📊 Tabla Comparativa Sencilla")

    datos = [
        {
            "Característica": "¿Se pueden recuperar los datos originales?",
            "Lógica Tradicional (AND)": "No",
            "Lógica Reversible (CNOT)": "Sí",
            "Simulación Cuántica": "Sí",
        },
        {
            "Característica": "Tipo de relación",
            "Lógica Tradicional (AND)": "Varias entradas dan la misma salida",
            "Lógica Reversible (CNOT)": "Cada entrada tiene su propia salida única",
            "Simulación Cuántica": "Relación 100% conservativa",
        },
        {
            "Característica": "Operación Inversa",
            "Lógica Tradicional (AND)": "Imposible",
            "Lógica Reversible (CNOT)": "Aplicar la misma puerta CNOT otra vez",
            "Simulación Cuántica": "Aplicar el circuito inverso",
        },
        {
            "Característica": "Porcentaje de Recuperación",
            "Lógica Tradicional (AND)": "0 %",
            "Lógica Reversible (CNOT)": "100 %",
            "Simulación Cuántica": f"{resultado.fidelidad * 100:.1f} %",
        },
    ]

    df_comparativo = pd.DataFrame(datos)

    st.dataframe(
        df_comparativo,
        use_container_width=True,
        hide_index=True,
    )


def render_seccion_comparativa(
    resultado: ResultadoMotor | None = None,
) -> None:
    """
    Renderiza la sección completa de comparación final con aplicaciones avanzadas en Videojuegos, IA y Qiskit.
    """

    if resultado is None:
        resultado = ejecutar_motor(
            theta_grados=120,
            phi_grados=95,
        )

    render_dashboard_comparativo(resultado)
    render_matriz_comparativa(resultado)

    st.success(
        "💡 **Aplicaciones en Videojuegos, IA y Tecnología Futura**: "
        "Las reglas que conservan la información abren posibilidades revolucionarias: "
        "1) **Motores de Física y Gráficos en Videojuegos**: Simulaciones hiper-realistas en tiempo real sin ralentizar el hardware. "
        "2) **Inteligencia Artificial Avanzada**: Redes neuronales que procesan millones de datos en paralelo. "
        "3) **Seguridad Digital y Criptografía**: Transmisión de datos 100% segura e inmune a hackeos utilizando librerías como Qiskit."
    )


render_comparison_section = render_seccion_comparativa