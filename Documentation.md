# Documentación del Proyecto

## Introducción
Este proyecto es una aplicación web que utiliza Angular en el frontend y Express con la API de Square en el backend para procesar pagos. El propósito del proyecto es proporcionar una solución simple y efectiva para gestionar pagos en línea.

## Instalación
### Requisitos
- Node.js y npm instalados en tu máquina.
- Una cuenta de Square para obtener el token de acceso.
- Angular CLI instalado globalmente (`npm install -g @angular/cli`).

### Pasos para Instalar el Proyecto
1. Clona el repositorio:
    ```bash
    git clone https://github.com/Jesus41844/Payment-System-FabLab.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Instala las dependencias del backend:
    ```bash
    npm install
    ```
4. Navega al directorio del frontend:
    ```bash
    cd frontend
    ```
5. Instala las dependencias del frontend:
    ```bash
    npm install
    ```

### Configuración Inicial
- Crea un archivo `.env` en la raíz del proyecto y añade tu token de acceso de Square:
    ```env
    SQUARE_ACCESS_TOKEN=tu-token-de-acceso
    ```
- Configura el entorno de desarrollo en Angular:
    ```bash
    ng serve
    ```

## Uso
### Instrucciones Detalladas
1. **Iniciar el Servidor Backend**:
    ```bash
    npm start
    ```
    El servidor estará corriendo en `http://localhost:3000`.

2. **Iniciar el Servidor Frontend**:
    ```bash
    cd frontend
    ng serve
    ```
    La aplicación estará disponible en `http://localhost:4200`.

3. **Procesar un Pago**:
    - Navega a la página de productos.
    - Selecciona un producto y haz clic en "Pagar".
    - Completa el formulario de pago y confirma.

## Tecnologías Usadas

### Frontend
- **Angular CLI**: 19.0.2
- **Angular Material**: 18.0.2

### Backend
- **Node.js**: 22.12.0 con Express

### Pasarela de Pago
- **Square**: 2024.11.20

## Notas Adicionales
- Asegúrate de tener configurado el token de acceso de Square en las variables de entorno.
- Utiliza el entorno de sandbox para pruebas antes de pasar a producción.