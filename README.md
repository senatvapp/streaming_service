# Proyecto Node.js con Firebase

Este proyecto utiliza Firebase para la autenticación y otros servicios. A continuación, se detallan los pasos necesarios para configurar Firebase, proteger tus rutas y ejecutar el proyecto.

## Requisitos

- Node.js y npm instalados.
- Proyecto en Firebase.
- Archivo de credenciales `login.json` (cuenta de servicio).

## Configuración de Firebase

### 1. Crear un Proyecto en Firebase

1. Inicia sesión en la Consola de Firebase y crea un nuevo proyecto.
2. Navega a **Configuración del proyecto** > **Cuentas de servicio**.
3. Haz clic en **Generar nueva clave privada** para descargar un archivo JSON con tus credenciales. Renómbralo a `login.json`.

⚠️ **Importante**: No compartas este archivo en repositorios públicos. Asegúrate de incluirlo en tu archivo `.gitignore`.

### 2. Guardar el Archivo `login.json`

Guarda `login.json` en el directorio `config` de tu proyecto o en una ubicación segura dentro del proyecto. Asegúrate de que esté mencionado en tu `.gitignore` para evitar que se suba al repositorio.

## Ejecución del Proyecto

Para ejecutar el proyecto en local:

```bash
npm install
node server.js

