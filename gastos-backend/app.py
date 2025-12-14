from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_FILE = "gastos.json"

# -----------------------------
# Utilidades
# -----------------------------
def load_gastos():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_gastos(gastos):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(gastos, f, indent=4, ensure_ascii=False)

def generate_id(gastos):
    """
    Genera un ID único incremental.
    """
    if not gastos:
        return 1
    return max(gasto["id"] for gasto in gastos) + 1

# -----------------------------
# Endpoints
# -----------------------------

@app.route("/gastos", methods=["GET"])
def get_gastos():
    return jsonify(load_gastos())

@app.route("/gastos", methods=["POST"])
def add_gasto():
    nuevo_gasto = request.json
    gastos = load_gastos()

    nuevo_gasto["id"] = generate_id(gastos)

    gastos.append(nuevo_gasto)
    save_gastos(gastos)

    return jsonify(nuevo_gasto), 201

@app.route("/gastos/<int:id>", methods=["DELETE"])
def delete_gasto(id):
    gastos = load_gastos()
    gastos_filtrados = [g for g in gastos if g["id"] != id]

    if len(gastos_filtrados) == len(gastos):
        return jsonify({"error": "Gasto no encontrado"}), 404

    save_gastos(gastos_filtrados)
    return jsonify({"message": "Gasto eliminado correctamente"})

# -----------------------------
# Main
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)
