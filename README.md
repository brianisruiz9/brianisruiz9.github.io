# Brianis Ruiz · Portafolio

Home en React + Vite, en español y compatible con GitHub Pages.

## Desarrollo

Requiere Node.js 22.12+ (CI usa Node.js 24).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Estructura

- `src/components/`: navegación responsive, Hero, iconos y encabezados.
- `src/App.jsx`: composición del Home y sus cinco secciones.
- `src/data/portfolio.js`: enlaces, proyectos, experiencia y tecnologías.
- `src/styles.css`: diseño responsive y variables semánticas para un futuro tema claro.
- `public/`: archivos estáticos que Vite copia a `dist/`.
- `.github/workflows/deploy.yml`: compilación de PRs y despliegue de `master`.
- `images/octa.mp4`: recurso original conservado; no se carga en el nuevo Home.

## GitHub Pages

1. En el repositorio, selecciona **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Sube los cambios a `master` (rama existente). El workflow ejecuta `npm ci` y `npm run build`, y publica `dist/`.
3. La URL prevista es `https://brianisruiz9.github.io/`. La configuración `base: '/'` corresponde a este sitio de usuario. Si cambias a un repositorio de proyecto, usa `base: '/nombre-del-repositorio/'`.

Las secciones usan anclas, sin router ni necesidad de redirecciones o un `404.html` especial. Los PRs solo compilan. Este trabajo prepara el despliegue; no modifica la configuración remota ni publica el sitio.

Referencia: https://vite.dev/guide/static-deploy#github-pages

## Contenido y pendientes

- Los enlaces de GitHub, LinkedIn y correo proceden del HTML original. Los más de 5 años de experiencia proceden de la indicación de la propietaria.
- Digiturno y Certika proceden del bloque comentado original. Certika y MiNegocio Control cuentan con URLs facilitadas por la propietaria y capturas de sus páginas públicas. Digiturno conserva una ilustración conceptual hasta disponer de su URL y captura. No se han añadido clientes, fechas ni resultados.
- El HTML original apuntaba a un `script.js` inexistente y a un CV ausente. Se retiraron el script y el modal sin implementación.
- **CV:** coloca el PDF real en `public/assets/CV-Brianis-Ruiz.pdf` y configura `profile.cvPath` como `'assets/CV-Brianis-Ruiz.pdf'`. Hasta entonces, el botón está deshabilitado con una explicación visible, para evitar un enlace roto.
- La experiencia se muestra por áreas: no hay empresas, cargos con fechas ni trayectoria cronológica documentados en el proyecto original.
- **Gestión de Pedidos en Tiempo Real:** título genérico solicitado por la propietaria para la aplicación de recepción y gestión de pedidos. Usa una ilustración conceptual; quedan pendientes el enlace, una captura real y las tecnologías. No se asume que el proyecto local `pedidos_front-main` corresponda a esta aplicación.
- **Vistas previas de proyectos:** guarda las capturas reales en `public/projects/` y configura `previewImage` con una ruta relativa, por ejemplo `projects/certika.png`. Configura `liveUrl` con la URL pública confirmada de cada aplicación. Toda la tarjeta será un enlace que abre una pestaña nueva, con aviso accesible. Mientras falten estos datos, se conserva la ilustración conceptual y no se genera un enlace ficticio.
- El diseño usa DM Sans y Manrope desde Google Fonts, con fallback sans-serif. No depende de imágenes, videos ni librerías de animación para renderizarse.
- Se incluyen navegación con teclado, enlace para saltar al contenido, menú móvil con Escape, foco visible y respeto por `prefers-reduced-motion`.
- El modo claro/oscuro queda preparado mediante variables CSS y `data-theme`; no se muestra un control de tema sin implementar.
