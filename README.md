# 🦄 Unicorn Manager + 🛒 Products Module

Proyecto individual basado en React que refactoriza el módulo de Unicornios del trabajo grupal, y agrega un nuevo módulo independiente de Productos. Este desarrollo sigue buenas prácticas de arquitectura, separación de responsabilidades y modularización, incluyendo también mejoras visuales y validaciones con Formik + Yup.

## 📌 Objetivo

Desarrollar una aplicación web modular, reutilizable y organizada, donde:

- El módulo **Unicornios** está desacoplado, gestionado por contexto (`UnicornContext`), y separado en componentes por responsabilidad.
- El módulo **Productos** es independiente, usa estado local o `localStorage`, y no depende del contexto global.
- Se utilizan rutas específicas, validaciones, y estilos modernos con PrimeReact.

---

## 📁 Estructura del Proyecto

```
src/
├── context/
│   └── UnicornContext.jsx           # Contexto global para unicornios
│
├── unicorns/
│   ├── index.jsx                    # Rutas del módulo unicornios
│   ├── UnicornsView.jsx            # Tabla con listado y eliminar
│   ├── UnicornForm.jsx             # Formulario crear/editar
│   └── useUnicornForm.js           # Hook personalizado (opcional)
│
├── products/
│   ├── index.jsx                   # Rutas del módulo productos
│   ├── ProductsView.jsx           # Lista de productos
│   ├── ProductForm.jsx            # Crear nuevos productos
│   └── productsData.js            # Datos simulados/localStorage
│
├── App.jsx                         # Ruteo principal
└── main.jsx                        # Render principal + temas
```

---

## 🧩 Funcionalidades

### ✅ Parte 1: Módulo de Unicornios (con Contexto)

- `UnicornContext` maneja:
  - Lista de unicornios y funciones CRUD (`getUnicorns`, `createUnicorn`, etc.).
- `UnicornsView`: muestra la tabla con opción de eliminar.
- `UnicornForm`: formulario reutilizable para crear y editar.
- Validaciones con **Formik** + **Yup**.
- Ruteo modular en `unicorns/index.jsx`:
  - `/unicornios`
  - `/unicornios/crear`
  - `/unicornios/editar/:id`

### ✅ Parte 2: Módulo de Productos (independiente)

- `ProductsView`: muestra productos cargados.
- `ProductForm`: formulario para nuevos productos.
- Fuente de datos desde array local o persistencia con `localStorage`.
- No usa ningún contexto.
- Rutas:
  - `/productos`

---

## ⚙️ Tecnologías Usadas

- **React**
- **React Router DOM**
- **Formik + Yup** para validaciones
- **PrimeReact** para estilos y tablas
- **Context API** (solo para Unicornios)
- **LocalStorage** (en módulo productos, opcional)

---

## 🏆 Extras implementados

- ✅ Manejo de errores con `try/catch` y feedback visual
- ✅ Estilos personalizados y visuales mejorados con **PrimeReact**
- ✅ Separación estricta de responsabilidades
- ✅ Modularización total de rutas y contextos

---

## 🚀 Instalación y Uso

1. Cloná el repositorio:

```bash
git clone https://github.com/tuusuario/nombre-del-repo.git
cd nombre-del-repo
```

2. Instalá las dependencias:

```bash
npm install
```

3. Iniciá el servidor de desarrollo:

```bash
npm run dev
```

4. Abrí la app en tu navegador:

```
http://localhost:5173
```

---

