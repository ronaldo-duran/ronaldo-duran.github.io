# ronaldo-duran.github.io

Portafolio personal de Ronaldo Duran — Software, Datos e IA. Publicado en <https://ronaldo-duran.github.io>.

Sitio estático (HTML, CSS y JavaScript sin dependencias), bilingüe ES/EN.

## Estructura

```
index.html              página principal
404.html                página de error
assets/js/data.js       TODO el contenido: textos, proyectos, experiencia, cifras
assets/js/main.js       render, idioma y animaciones
assets/css/style.css    estilos
assets/img/             retrato, capturas de proyectos e imagen para redes (og.jpg)
assets/docs/            CV en PDF
```

## Editar contenido

Casi todo se cambia en `assets/js/data.js`. Para agregar un proyecto, añade un objeto en
`projects.es` y `projects.en` con su `slug` (nombre del repo), `img` y, si tiene, `demo`.

## Ver en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar

En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
