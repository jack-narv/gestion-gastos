import json
import os
import sys
import pytest

# Agregar la carpeta raíz al path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app

@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_get_gastos(client):
    response = client.get("/gastos")
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_post_gasto(client):
    nuevo_gasto = {
        "fecha": "2025-01-01",
        "concepto": "Prueba Pytest",
        "monto": 10
    }

    response = client.post("/gastos", json=nuevo_gasto)
    assert response.status_code == 201

def test_persistencia_gasto(client):
    response = client.get("/gastos")
    assert response.status_code == 200
    assert len(response.json) > 0

    gasto = response.json[-1]
    assert "fecha" in gasto
    assert "concepto" in gasto
    assert "monto" in gasto
