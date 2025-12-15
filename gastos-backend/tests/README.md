# 🧪 Entorno de Pruebas Automatizadas
Backend Flask – Registro de Gastos Personales

Este documento describe cómo configurar, ejecutar y comprender las pruebas automatizadas del backend de la aplicación Registro de Gastos Personales, desarrolladas con Pytest y generadas mediante asistencia de Inteligencia Artificial.

# 📌 Objetivo de las pruebas

El objetivo de este entorno de pruebas es:

- Validar el correcto funcionamiento de la API REST desarrollada en Flask.

- Verificar los endpoints críticos del sistema.

- Comprobar la persistencia de datos en el archivo JSON.

- Detectar errores funcionales de manera automatizada.

- Facilitar la replicabilidad del proceso de testing.

# 🏗️ Alcance de las pruebas

Las pruebas cubren exclusivamente el backend de la aplicación.

Funcionalidades evaluadas:

- Endpoint GET /gastos

- Endpoint POST /gastos

- Persistencia de los datos en gastos.json

- Códigos de estado HTTP correctos (200 y 201)

⚠️ No se incluyen pruebas de interfaz gráfica ni pruebas end-to-end.

# 🧰 Tecnologías utilizadas

- Python 3.14.2

- Flask

- Pytest

- Entorno virtual (venv)

# ⚙️ Requisitos previos

Antes de ejecutar las pruebas, asegúrate de tener instalado:

- Python 3.10 o superior

- pip

- Git (opcional)

# 🚀 Configuración del entorno de pruebas

1️⃣ Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>

cd control-gastos/gastos-backend

2️⃣ Crear entorno virtual

python -m venv venv

3️⃣ Activar entorno virtual

Windows (PowerShell):

.\venv\Scripts\Activate

Linux / macOS:

source venv/bin/activate


La activación correcta se confirma cuando aparece (venv) en la terminal.

4️⃣ Instalar dependencias del backend

pip install -r requirements.txt

5️⃣ Instalar dependencias de testing

pip install -r requirements-test.txt

# 🧪 Ejecución de las pruebas

Desde la carpeta gastos-backend, con el entorno virtual activo:

pytest

Resultado esperado:
==================== test session starts ====================
collected 3 items

tests/test_gastos.py ...                              [100%]

===================== 3 passed in X.XXs =====================

# 🧠 Descripción de los casos de prueba

✔ test_get_gastos

- Verifica que el endpoint /gastos responde correctamente.

- Comprueba que la respuesta es una lista JSON.

- Valida el código HTTP 200.

✔ test_post_gasto

- Envía un nuevo gasto mediante una petición POST.

- Verifica que el backend devuelve código HTTP 201.

- Confirma que el endpoint acepta datos válidos.

✔ test_persistencia_gasto

- Realiza una consulta GET tras registrar un gasto.

- Verifica que la lista no esté vacía.

- Comprueba que los campos esperados existen en el objeto gasto.

# ❌ Simulación de un test fallido (documentado)

Durante el desarrollo del entorno de pruebas se simuló un fallo intencional:

- Se validó un campo inexistente (categoria) en la respuesta JSON.

- Pytest detectó correctamente el error (KeyError).

- El test fue corregido ajustándolo al modelo real de datos.

- Este proceso permitió validar la eficacia del testing automatizado y la corrección asistida por IA.

# ⚠️ Consideraciones importantes

- Las pruebas utilizan el archivo gastos.json como persistencia real.

- Al ejecutar los tests, el archivo puede modificarse.

- Para entornos productivos se recomienda usar archivos mock o temporales.

# 🤖 Uso de Inteligencia Artificial

Todo el código de pruebas fue generado mediante interacción con un asistente de IA.
El rol del desarrollador fue:

- Definir el alcance de las pruebas.

- Formular prompts claros.

- Ejecutar y analizar los resultados.

- Solicitar correcciones cuando se detectaron fallos.

- No se escribió código de pruebas manualmente.

# 📄 Licencia

Este entorno de pruebas fue desarrollado con fines académicos.