---
title: "Como crear un sitio como este"
---

# Pasos para crear un sitio como este

1. Instalar [Hugo](https://gohugo.io/getting-started/installing/#quick-install)

2. Una vez este instalado Hugo, valida que haya sido instalado correctamente con el siguiente comando:

```
  hugo version
```

3. Para crear un sitio desde cero, vamos a abrir la terminal y dirigirnos al directorio donde queremos instalar el repositorio. Correr el comando:

```
  hugo new site <MI-SITIO>
```

4. se creará un directorio llamado <MI-SITIO>, donde <MI-SITIO> es cualquier nombre que quiera dar a tu proyecto. Te recomendamos sea en inglés.
Debemos navegar con la terminal hacia este sitio.

5. Haremos algunos cambios en la estructura por defecto que trae hugo

```
  <MI-SITIO>
    └───archetypes
    │   │   default.md
    └───content
    └───data
    └───layouts <-- VAMOS A ELIMINAR ESTA CARPETA
    └───public
    └───static
    └───themes
    config.toml 
```
  - El primer cambio será eliminar la carpeta `layouts`
  - Ahora vamos a correr el siguiente comando (aseguremonos de estar dentro de la carpeta del proyecto):

      ```
        hugo new theme default
      ```
  - Nuestra estructura ahora será la siguiente:

  ```
    <MI-SITIO>
      └───archetypes
      │   │   default.md
      └───content
      └───data
      └───public
      └───static
      └───themes
          └───default
            └───archetypes
            │   │   default.md
            └───layouts <-- VAMOS A MOVER ESTA CARPETA A LA RAIZ
                └───_default
                    │ baseof.html
                    │ list.html
                    │ single.html
                └───partials
                    │ footer.html
                    │ head.html
                    │ header.html
            │   │ 404.html <-- VAMOS A MOVER ESTE ARCHIVO AL DIRECTORIO "content"
            │   │ index.html <-- VAMOS A MOVER ESTE ARCHIVO AL DIRECTORIO "content"
            
            └───static
                └───css
                └───js
            LICENSE
            theme.toml
      config.toml 
  ```

  Como verás en la anterior hay algunas instrucciones que implican que vamos a mover algunas carpetas:

  - moveremos la carpeta `themes/default/layouts` a la raíz del proyecto
  - luego moveremos los archivos `layouts/404.html` y `layouts/index.html` hacia la carpeta `content`
  - Ahora eliminamos la carpeta `themes/default`
  - EDITAR INDEX HTML

6. Reemplazar los siguientes archivo:
   
  `layouts/_default/baseof.html` por el siguiente HTML al contendo:

  ```html
  <!DOCTYPE html>
  <html>
      {{- partial "head.html" . -}}
      <body>
          {{- partial "header.html" . -}}
          
          <main id="content">
              {{ .Content }}
          </main>

          {{- partial "footer.html" . -}}
      </body>
  </html>
  ```

  `layouts/_default/list.html` por el siguiente HTML al contendo:

  ```html
    {{ define "main" }}
      {{ .Content }}
    {{ end }}
  ```

  `layouts/_default/single.html` por el siguiente HTML al contendo:

  ```html
    {{ define "main" }}
      {{ .Content }}
    {{ end }}
  ```

  Más adelante editaremos estos últimos 2 archivos, pero de momento quedarán con este contenido genérico.

  