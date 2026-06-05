# 📘 FREEALERTS — LIBRERÍA DE ALERTAS, TOASTS Y CONFIRMACIONES

> [!NOTE]
> FreeAlerts es una librería ligera de JavaScript para mostrar notificaciones modernas en aplicaciones web.

> [!IMPORTANT]
> Permite mostrar:
>
> ✔ Toasts
>
> ✔ Alertas
>
> ✔ Confirmaciones

---

## 🎯 Objetivo

Mejorar la experiencia de usuario (UX) con una API simple y sin dependencias.

---

# 📘 🟢 ¿QUÉ ES FREEALERTS?

> [!NOTE]
> Es una librería UI de notificaciones.

## 👉 Características principales

✔ Zero dependencies

✔ Ligera

✔ Fácil de usar

✔ Compatible con cualquier framework

✔ Personalizable mediante CSS

✔ API intuitiva

---

### 💡 Compatible con

* Vanilla JavaScript
* React
* Vue
* Angular

> [!TIP]
> Al no depender de ningún framework, puede integrarse fácilmente en proyectos nuevos o existentes.

---

# 📘 🔵 ¿POR QUÉ USAR FREEALERTS?

## 🎯 Beneficios

✔ Ligera y rápida

✔ Sin dependencias externas

✔ Mejora la UX

✔ Fácil integración

✔ Personalización sencilla

✔ API amigable para desarrolladores

👉 Ideal para proyectos pequeños y medianos.

---

# 📘 🟣 INSTALACIÓN

### 💡 NPM

```bash
npm install free-alerts
```

👉 Instala la librería en tu proyecto.

---

# 📘 🟡 IMPORTACIÓN

## 🧠 ES Modules (recomendado)

```js
import FreeAlerts from 'free-alerts';
```

### 💡 Ejemplo

```js
FreeAlerts.success('¡Operación exitosa!');
```

---

# 📘 🟠 USO EN NAVEGADOR

> [!NOTE]
> Puede utilizarse sin Vite, Webpack o bundlers.

### 💡 CSS

```html
<link rel="stylesheet" href="free-alerts.css" />
```

### 💡 JavaScript

```html
<script src="free-alerts.umd.js"></script>
```

### 💡 Uso

```js
FreeAlerts.info('Bienvenido al sitio!');
```

---

# 📘 🔴 TOASTS 🔔

> [!NOTE]
> Notificaciones temporales.

👉 Aparecen unos segundos y desaparecen automáticamente.

### 💡 Toast básico

```js
FreeAlerts.toast('Mensaje rápido');
```

👉 Perfecto para feedback rápido.

---

# 📘 ⚫ TIPOS DE TOAST

## ✔ Success

```js
FreeAlerts.success('Guardado correctamente');
```

👉 Operaciones exitosas.

---

## ✔ Error

```js
FreeAlerts.error('Ha ocurrido un error');
```

👉 Fallos o excepciones.

---

## ✔ Warning

```js
FreeAlerts.warning('Cuidado con esta acción');
```

👉 Advertencias.

---

## ✔ Info

```js
FreeAlerts.info('Nueva actualización disponible');
```

👉 Información general.

> [!TIP]
> Utiliza el tipo adecuado de notificación para que el usuario identifique rápidamente el contexto del mensaje.

---

# 📘 ⚪ ALERT

> [!NOTE]
> Modal informativo.

👉 Muestra información importante al usuario.

### 💡 Ejemplo

```js
FreeAlerts.alert({
  title: 'Atención',
  message: 'Esta acción no se puede deshacer'
});
```

👉 No requiere confirmación.

---

# 📘 🟤 CONFIRM

> [!NOTE]
> Modal de confirmación.

👉 Solicita una decisión al usuario.

### 💡 Ejemplo

```js
const confirmed = await FreeAlerts.confirm({
  title: 'Eliminar registro',
  message: '¿Estás seguro?'
});
```

### 👉 Retorna

```ts
Promise<boolean>
```

✔ `true` → acepta

✔ `false` → cancela

---

### 👉 Muy usado antes de

* Eliminar registros
* Cerrar sesión
* Operaciones críticas

> [!IMPORTANT]
> `confirm()` devuelve una Promise que debe resolverse antes de continuar con la operación.

---

# 📘 🟢 API PRINCIPAL

## 🧠 Métodos disponibles

| Método             | Descripción            |
| ------------------ | ---------------------- |
| `toast(message)`   | Toast temporal         |
| `success(message)` | Mensaje de éxito       |
| `error(message)`   | Mensaje de error       |
| `warning(message)` | Mensaje de advertencia |
| `info(message)`    | Mensaje informativo    |
| `alert(options)`   | Modal informativo      |
| `confirm(options)` | Modal de confirmación  |

---

# 📘 🔵 FLUJO MENTAL

## 🧠 ¿Qué quiero mostrar?

### 👉 Mensaje temporal

```js
toast()
```

---

### 👉 Información importante

```js
alert()
```

---

### 👉 Decisión del usuario

```js
confirm()
```

---

> [!TIP]
> Elegir correctamente entre Toast, Alert y Confirm mejora significativamente la experiencia de usuario.

---

# 📘 🟣 PERSONALIZACIÓN

> [!NOTE]
> Toda la apariencia puede modificarse con CSS.

### 💡 Ejemplo

```css
.free-alerts-toast {
  background: #111;
  color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  font-family: Arial, sans-serif;
}
```

👉 Permite adaptar la librería al diseño de tu proyecto.

---

# 📘 🟡 USO EN REACT

### 💡 Ejemplo

```jsx
import FreeAlerts from 'free-alerts';

function App() {

  const handleClick = () => {
    FreeAlerts.success('Guardado desde React!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

---

# 📘 🟠 USO EN VUE 3

### 💡 Ejemplo

```vue
<template>
  <button @click="showAlert">
    Mostrar Toast
  </button>
</template>

<script setup>

import FreeAlerts from 'free-alerts';

function showAlert() {
  FreeAlerts.info('Mensaje desde Vue 3');
}

</script>
```

---

# 📘 🔴 USO EN ANGULAR

### 💡 Ejemplo

```ts
import FreeAlerts from 'free-alerts';

export class AppComponent {

  notify() {
    FreeAlerts.success(
      'Guardado desde Angular!'
    );
  }

}
```

👉 Puede utilizarse igual que cualquier librería JavaScript.

---

# 📘 ⚫ CASOS DE USO

✔ Notificaciones de éxito

✔ Mensajes de error

✔ Confirmaciones

✔ Feedback visual

✔ Formularios

✔ CRUDs

✔ Dashboards

✔ Paneles administrativos

---

# 📘 ⚪ BUILD

> [!NOTE]
> Generar compilación de producción.

### 💡 Comando

```bash
npm run build
```

### 👉 Archivos generados

```text
dist/
├── free-alerts.es.js
├── free-alerts.umd.js
└── free-alerts.css
```

---

# 📘 🟤 TESTING

> [!NOTE]
> Ejecutar pruebas.

### 💡 Tests

```bash
npm run test
```

### 💡 UI de Vitest

```bash
npm run test:ui
```

---

# 📘 🟢 DESARROLLO

### 💡 Instalar dependencias

```bash
npm install
```

### 💡 Levantar entorno local

```bash
npm run dev
```

---

# 📘 🔵 ROADMAP

## 🚀 Funcionalidades futuras

✔ Dark Mode

✔ Posicionamiento de toasts

✔ Barra de progreso

✔ Animaciones avanzadas

✔ Soporte TypeScript

✔ Sistema de plugins

---

# 📘 🟣 TIPOS DE NOTIFICACIÓN

## 🧠 Comparación rápida

| Tipo    | Uso                       |
| ------- | ------------------------- |
| Toast   | 👉 Mensaje temporal       |
| Alert   | 👉 Información importante |
| Confirm | 👉 Requiere decisión      |

---

# 📘 🟡 BUENAS PRÁCTICAS

✔ Success para operaciones exitosas

✔ Error para fallos

✔ Confirm antes de eliminar datos

✔ Mensajes cortos y claros

✔ No abusar de los toasts

✔ Mantener consistencia visual

> [!TIP]
> Una notificación efectiva comunica información útil sin interrumpir innecesariamente al usuario.

---

# 📘 🟠 UX Y FREEALERTS

## 🧠 Una buena notificación debe:

✔ Ser clara

✔ Ser breve

✔ Explicar qué ocurrió

✔ Indicar qué hacer después

👉 Las notificaciones son parte importante de la experiencia de usuario.

---

# 📘 🔴 LICENCIA

## 📄 MIT

👉 Uso libre para proyectos personales y comerciales.

---

# ⚠️ COSAS IMPORTANTES

> [!IMPORTANT]
> No tiene dependencias.

> [!IMPORTANT]
> `confirm()` devuelve `Promise<boolean>`.

> [!IMPORTANT]
> Compatible con cualquier framework.

> [!IMPORTANT]
> Se personaliza con CSS.

> [!IMPORTANT]
> Diseñada para mejorar UX.

---

# ✨ RESUMEN

> [!NOTE]
> FreeAlerts = sistema de notificaciones ligero.

---

## 🚀 Métodos principales

👉 `toast()` → mensajes rápidos

👉 `success()` → éxito

👉 `error()` → errores

👉 `warning()` → advertencias

👉 `info()` → información

👉 `alert()` → modal informativo

👉 `confirm()` → confirmación

---

> [!TIP]
> Una librería simple, moderna y flexible para dar feedback visual al usuario 🚀
