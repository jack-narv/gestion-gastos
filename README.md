# 📊 Registro de Gastos Personales
Aplicación web desarrollada con Angular 21 (frontend) y Flask (backend), utilizando persistencia en archivos JSON, sin base de datos.

Este proyecto fue desarrollado como parte de la actividad “Desarrollo de aplicaciones con asistentes de programación basados en IA”, donde todo el código fue generado mediante interacción con un asistente de IA, sin programación manual directa.

# 🧩 Descripción general

La aplicación permite:

- Registrar gastos personales (fecha, concepto y monto).

- Visualizar la lista de gastos registrados.

- Persistir los datos en un archivo JSON local.

- Consumir una API REST desarrollada en Flask desde un frontend Angular.

La arquitectura es simple, clara y pensada para facilitar su ejecución y comprensión.

# 🛠️ Tecnologías utilizadas
Backend

- Python 3.14.2

- Flask

- flask-cors

- Persistencia: archivo JSON

Frontend

- Angular 21 (standalone components)

- TypeScript

- HTML / CSS

- HttpClient

# ✅ Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Python 3.10 o superior

- Node.js 18+ (recomendado LTS)

- Angular CLI 21

- Git

# 🚀 Instrucciones de ejecución
# 🔙 Backend (Flask)

1️⃣ Clonar el repositorio:

  git clone <URL_DEL_REPOSITORIO>
  
  cd control-gastos

2️⃣ Entrar al backend:

  cd gastos-backend

3️⃣ Crear entorno virtual:

  python -m venv venv

4️⃣ Activar entorno virtual:

Windows (PowerShell):

  .\venv\Scripts\Activate

Linux / macOS:

  source venv/bin/activate
  
5️⃣ Instalar dependencias:

pip install -r requirements.txt

6️⃣ Ejecutar el backend:

python app.py

Salida esperada:

Running on http://127.0.0.1:5000

# 🖥️ Frontend (Angular)
8️⃣ Abrir una nueva terminal:

9️⃣ Entrar al frontend:

cd gastos-frontend

🔟 Instalar dependencias:

npm install

1️⃣1️⃣ Ejecutar Angular:

ng serve

Salida esperada:

Local: http://localhost:4200

Abre en el navegador:

http://localhost:4200

# 🔄 Flujo de la aplicación

- El usuario ingresa un gasto desde el formulario Angular.

- Angular envía una petición HTTP POST a Flask.

- Flask guarda el gasto en gastos.json.

- Angular consulta nuevamente los gastos y los renderiza en pantalla.

# 📂 Persistencia de datos

Los gastos se almacenan en el archivo:

gastos-backend/gastos.json

Este archivo se actualiza automáticamente al agregar nuevos registros.

# 🧪 Pruebas

Las peticiones HTTP pueden verificarse desde el navegador o herramientas como Postman.

En el navegador (DevTools → Network) se puede observar la petición a /gastos con respuesta 200 OK.

# ⚠️ Notas importantes

- El servidor Flask se ejecuta en modo desarrollo, adecuado para fines académicos.

- El entorno virtual (venv) no se incluye en el repositorio, siguiendo buenas prácticas.

- El backend debe ejecutarse antes que el frontend.

# 🤖 Uso de Inteligencia Artificial

Todo el código del proyecto fue generado mediante interacción con un asistente de IA.

El rol del desarrollador fue:

- Definir requisitos

- Formular prompts

- Validar resultados

- Solicitar correcciones

- No se escribió código manualmente.

# 📄 Licencia

Proyecto de uso académico.
