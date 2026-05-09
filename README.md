# 🛒 React Shopping Cart: Una Aventura en el Manejo de Estado

¡Bienvenido! Este no es solo un carrito de compras; es un laboratorio didáctico diseñado para dominar los conceptos fundamentales y avanzados de **React**. Aquí exploramos cómo construir una aplicación escalable, limpia y eficiente.

---

## 🎯 ¿Qué aprenderás con este proyecto?

Este repositorio ha sido estructurado para demostrar patrones modernos de desarrollo en React:

1.  **Gestión de Estado Global (Context API):** Olvídate del *prop drilling*. Aprenderás cómo proveer datos (productos y carrito) a toda la aplicación de forma centralizada.
2.  **Lógica Compleja con Reducers:** Implementamos `useReducer` para gestionar las acciones del carrito (agregar, eliminar, aumentar/disminuir cantidad), manteniendo el código organizado y predecible.
3.  **Enrutamiento Dinámico:** Uso de `react-router-dom` para navegar entre la tienda y el resumen de compra sin recargar la página.
4.  **UI Moderna con Material UI:** Integración de componentes profesionales y responsive.
5.  **Hooks en Acción:** Uso intensivo de `useState`, `useEffect`, y `useContext`.

---

## 🚀 Características Principales

-   **Catálogo de Productos:** Listado dinámico con opción de añadir al carrito en tiempo real.
-   **Gestión del Carrito:** 
    -   Visualización detallada de artículos seleccionados.
    -   Cálculo automático de totales.
    -   Control de cantidades.
-   **Feedback Visual:** Notificaciones elegantes mediante SweetAlert2 para una mejor experiencia de usuario.
-   **Diseño Limpio:** Interfaz minimalista y funcional.

---

## 🛠️ Stack Tecnológico

-   **Core:** [React 19](https://react.dev/)
-   **Herramientas de Construcción:** [Vite](https://vitejs.dev/)
-   **Estilos & Componentes:** [Material UI (MUI)](https://mui.com/)
-   **Navegación:** [React Router 7](https://reactrouter.com/)
-   **Alertas:** [SweetAlert2](https://sweetalert2.github.io/)

---

## 📦 Instalación y Uso

Sigue estos pasos para tener el laboratorio funcionando en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/javiboin/carrito-compras-react.git
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Lanzar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Explorar:** Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📂 Estructura del Corazón del Proyecto

-   `/src/context`: Donde reside la "magia" del estado global.
-   `/src/components`: Piezas de UI reutilizables y atómicas.
-   `/src/pages`: Las vistas principales de nuestra aplicación.
-   `/src/hooks`: Lógica extraída para mantener los componentes limpios (si aplica).

---

## 🤝 Contribuciones e Ideas

¿Tienes alguna idea para mejorar el flujo didáctico? ¡Las contribuciones son bienvenidas! Siéntete libre de abrir un *Issue* o enviar un *Pull Request*.

---

*Desarrollado con ❤️ para la comunidad de aprendizaje de React.*

