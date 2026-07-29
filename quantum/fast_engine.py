import math
import cmath

def calcular_metricas_cuanticas(theta_grados, phi_grados):
    # Convertir a radianes
    theta = math.radians(theta_grados)
    phi = math.radians(phi_grados)
    
    # Amplitudes del estado inicial (Qubit 0)
    alpha = math.cos(theta / 2.0)
    # beta = e^(i * phi) * sin(theta / 2)
    beta = cmath.rect(math.sin(theta / 2.0), phi)
    
    # El estado inicial es puro para todos los qubits
    entropia_in = 0.0
    pureza_in = 1.0
    
    # Después de H y CX CX, las amplitudes del estado entrelazado |000> y |111> son:
    # gamma = (alpha + beta) / sqrt(2)
    # delta = (alpha - beta) / sqrt(2)
    gamma = (alpha + beta) / math.sqrt(2)
    delta = (alpha - beta) / math.sqrt(2)
    
    # Probabilidades de medir 0 o 1 en la matriz de densidad reducida
    p0 = abs(gamma)**2
    p1 = abs(delta)**2
    
    # Limpiar pequeños errores de punto flotante
    if p0 < 1e-12: p0 = 0.0
    if p1 < 1e-12: p1 = 0.0
    
    # Entropía de Shannon (Von Neumann para estado diagonal)
    entropia_dist = 0.0
    if p0 > 0: entropia_dist -= p0 * math.log2(p0)
    if p1 > 0: entropia_dist -= p1 * math.log2(p1)
    
    # Pureza (Traza de rho al cuadrado)
    pureza_dist = p0**2 + p1**2
    
    # El estado recuperado es exactamente el inicial (fidelidad 1.0)
    entropia_out = 0.0
    pureza_out = 1.0
    fidelidad = 1.0
    
    return {
        "theta": theta_grados,
        "phi": phi_grados,
        "fidelidad": fidelidad,
        "entrada": {
            "entropia": entropia_in,
            "pureza": pureza_in
        },
        "distribucion": {
            "entropia": entropia_dist,
            "pureza": pureza_dist
        },
        "radiacion": {
            "entropia": entropia_dist,
            "pureza": pureza_dist
        },
        "salida": {
            "entropia": entropia_out,
            "pureza": pureza_out
        }
    }
