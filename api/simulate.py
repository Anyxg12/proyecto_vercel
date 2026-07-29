from http.server import BaseHTTPRequestHandler
import json
from urllib.parse import parse_qs, urlparse

# Importaciones locales del motor de la aplicación original
from quantum.engine import ejecutar_motor_cuantico
from logic.irreversible import generar_tabla_and
from logic.reversible import generar_tabla_cnot

class handler(BaseHTTPRequestHandler):
    """
    Vercel Serverless Function - Python Runtime
    Maneja las peticiones de React para el Motor Cuántico y la Lógica.
    """
    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type")
        self.end_headers()

    def do_POST(self):
        content_len = int(self.headers.get('Content-Length', 0))
        post_body = self.rfile.read(content_len) if content_len > 0 else b'{}'
        
        try:
            data = json.loads(post_body.decode('utf-8'))
        except:
            data = {}

        self._process_request(data)

    def do_GET(self):
        parsed_path = urlparse(self.path)
        query_params = parse_qs(parsed_path.query)
        # Convert list values to single values
        data = {k: v[0] for k, v in query_params.items()}
        self._process_request(data)

    def _process_request(self, data):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

        # Parsear parámetros
        theta = float(data.get('theta', 90.0))
        phi = float(data.get('phi', 0.0))
        input_a = int(data.get('inputA', 1))
        input_b = int(data.get('inputB', 1))
        control = int(data.get('control', 1))
        target = int(data.get('target', 0))

        # 1. Lógica Irreversible (AND)
        and_tabla = generar_tabla_and()
        and_output = input_a & input_b
        
        # 2. Lógica Reversible (CNOT)
        cnot_tabla = generar_tabla_cnot()
        cnot_control_out = control
        cnot_target_out = target ^ control

        # 3. Motor Cuántico (Qiskit real!)
        resultado_cuantico = ejecutar_motor_cuantico(theta=theta, phi=phi)
        
        fidelidad = resultado_cuantico.fidelidad
        # Para la entropía, calculamos el promedio de los 3 cúbits en cada estado o usamos las métricas del motor
        from quantum.metrics import calcular_metricas_sistema
        metricas_entrada = calcular_metricas_sistema(resultado_cuantico.estado_inicial)
        metricas_dist = calcular_metricas_sistema(resultado_cuantico.estado_distribuido)
        metricas_salida = calcular_metricas_sistema(resultado_cuantico.estado_recuperado)

        entropia_in = sum(m.entropia for m in metricas_entrada) / len(metricas_entrada)
        pureza_in = sum(m.pureza for m in metricas_entrada) / len(metricas_entrada)
        
        entropia_dist = sum(m.entropia for m in metricas_dist) / len(metricas_dist)
        pureza_dist = sum(m.pureza for m in metricas_dist) / len(metricas_dist)

        entropia_out = sum(m.entropia for m in metricas_salida) / len(metricas_salida)
        pureza_out = sum(m.pureza for m in metricas_salida) / len(metricas_salida)

        response = {
            "logic": {
                "and": {
                    "output": and_output,
                    "reversible": False
                },
                "cnot": {
                    "controlOut": cnot_control_out,
                    "targetOut": cnot_target_out,
                    "reversible": True
                }
            },
            "quantum": {
                "theta": theta,
                "phi": phi,
                "fidelidad": fidelidad,
                "entrada": {
                    "entropia": entropia_in,
                    "pureza": pureza_in
                },
                "distribucion": {
                    "entropia": entropia_dist,
                    "pureza": pureza_dist
                },
                "salida": {
                    "entropia": entropia_out,
                    "pureza": pureza_out
                }
            }
        }
        
        self.wfile.write(json.dumps(response).encode('utf-8'))
