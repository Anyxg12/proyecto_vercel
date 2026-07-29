import streamlit as st


def aplicar_estilos() -> None:
    """
    Sistema de diseño visual futurista 2026: Cyber-Quantum React Bento HUD.
    Transforma radicalmente toda la plataforma Streamlit con estética Bento Grid,
    gradientes cromáticos, bordes neón resplandecientes y tipografía Outfit / JetBrains Mono.
    """

    st.markdown(
        """
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

        /* =====================================================
           VARIABLES Y PALETA DE COLOR CYBER-QUANTUM
        ===================================================== */
        :root {
            --bg-void: #030712;
            --bg-card: linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(6, 10, 26, 0.96));

            --cyan-neon: #00f3ff;
            --cyan-glow: rgba(0, 243, 255, 0.35);
            --purple-neon: #c084fc;
            --purple-glow: rgba(192, 132, 252, 0.35);
            --emerald-neon: #4ade80;
            --emerald-glow: rgba(74, 222, 128, 0.35);

            --text-main: #ffffff;
            --text-sub: #cbd5e1;
            --text-muted: #94a3b8;
        }

        /* =====================================================
           FONDO DE PÁGINA CYBER-GRID DE ALTO IMPACTO
        ===================================================== */
        .stApp {
            background:
                radial-gradient(
                    circle at 85% 10%,
                    rgba(192, 132, 252, 0.28),
                    transparent 40%
                ),
                radial-gradient(
                    circle at 15% 45%,
                    rgba(0, 243, 255, 0.25),
                    transparent 38%
                ),
                radial-gradient(
                    circle at 75% 85%,
                    rgba(74, 222, 128, 0.18),
                    transparent 35%
                ),
                linear-gradient(
                    180deg,
                    #030712 0%,
                    #070d24 45%,
                    #040716 100%
                ) !important;
            font-family: 'Outfit', 'Inter', sans-serif !important;
        }

        /* Grid holográfica animada de fondo */
        .stApp::before {
            content: "";
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(0, 243, 255, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 243, 255, 0.07) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.65;
        }

        [data-testid="stAppViewContainer"] {
            background: transparent;
        }

        [data-testid="stHeader"] {
            background: rgba(3, 7, 18, 0.85) !important;
            backdrop-filter: blur(25px) !important;
            border-bottom: 1px solid rgba(0, 243, 255, 0.35) !important;
        }

        .block-container {
            position: relative;
            z-index: 1;
            max-width: 1380px;
            padding-top: 1.5rem;
            padding-bottom: 5rem;
        }

        /* =====================================================
           TITULARES CON DEGRADADO CROMÁTICO REVOLUCIONARIO
        ===================================================== */
        h1, h2, h3, h4 {
            font-family: 'Outfit', sans-serif !important;
            color: var(--text-main);
            letter-spacing: -0.04em;
        }

        h1 {
            font-size: clamp(2.8rem, 6vw, 4.8rem) !important;
            font-weight: 900 !important;
            line-height: 1.05 !important;
            background: linear-gradient(110deg, #ffffff 15%, #c084fc 50%, #00f3ff 90%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            margin-bottom: 0.8rem !important;
            filter: drop-shadow(0 0 35px rgba(0, 243, 255, 0.35)) !important;
        }

        h2 {
            font-size: clamp(1.9rem, 3.8vw, 2.6rem) !important;
            font-weight: 850 !important;
            background: linear-gradient(90deg, #ffffff, #c084fc, #00f3ff) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            margin-top: 2rem !important;
            margin-bottom: 1rem !important;
        }

        p, li {
            color: var(--text-sub);
            line-height: 1.75;
            font-size: 1.05rem;
        }

        /* =====================================================
           PESTAÑAS ESTILO REACT BENTO NAVIGATION
        ===================================================== */
        .stTabs [data-baseweb="tab-list"] {
            gap: 0.8rem;
            padding: 0.8rem;
            border-radius: 24px;
            background: rgba(8, 14, 32, 0.90);
            border: 1px solid rgba(0, 243, 255, 0.40);
            backdrop-filter: blur(25px);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.55), inset 0 0 30px rgba(0, 243, 255, 0.12);
        }

        .stTabs [data-baseweb="tab"] {
            height: 54px;
            padding: 0 1.6rem;
            border-radius: 18px;
            color: #94a3b8 !important;
            font-family: 'Outfit', sans-serif;
            font-weight: 750;
            font-size: 0.98rem;
            transition: all 0.28s ease-in-out;
        }

        .stTabs [data-baseweb="tab"]:hover {
            color: #ffffff !important;
            background: rgba(255, 255, 255, 0.12);
            transform: translateY(-2px);
        }

        .stTabs [aria-selected="true"] {
            color: #ffffff !important;
            background: linear-gradient(135deg, rgba(192, 132, 252, 0.55), rgba(0, 243, 255, 0.40)) !important;
            border: 1px solid rgba(0, 243, 255, 0.75) !important;
            box-shadow: 0 0 35px rgba(0, 243, 255, 0.45) !important;
        }

        .stTabs [data-baseweb="tab-highlight"] {
            display: none !important;
        }

        /* =====================================================
           TARJETAS Y METRICAS CYBER-QUANTUM
        ===================================================== */
        [data-testid="stMetric"] {
            background: linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(6, 10, 26, 0.96)) !important;
            border: 1px solid rgba(0, 243, 255, 0.40) !important;
            border-radius: 22px !important;
            padding: 1.3rem 1.5rem !important;
            backdrop-filter: blur(20px) !important;
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.45) !important;
            transition: all 0.3s ease !important;
        }

        [data-testid="stMetric"]:hover {
            border-color: rgba(0, 243, 255, 0.70) !important;
            box-shadow: 0 0 40px rgba(0, 243, 255, 0.35) !important;
            transform: translateY(-4px) !important;
        }

        [data-testid="stMetricLabel"] {
            color: #94a3b8 !important;
            font-size: 0.78rem !important;
            font-weight: 750 !important;
            text-transform: uppercase;
            letter-spacing: 0.10em;
        }

        [data-testid="stMetricValue"] {
            color: #ffffff !important;
            font-family: 'JetBrains Mono', monospace !important;
            font-weight: 850 !important;
            font-size: 2.1rem !important;
        }

        /* Radio Buttons */
        [data-testid="stMarkdownContainer"] p {
            font-weight: 700;
        }

        .stRadio [role="radiogroup"] {
            gap: 1.2rem;
            background: rgba(8, 14, 32, 0.80);
            padding: 0.8rem 1.2rem;
            border-radius: 20px;
            border: 1px solid rgba(0, 243, 255, 0.35);
        }

        /* Custom Scrollbars */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #030712;
        }
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #c084fc, #00f3ff);
            border-radius: 999px;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )