# valen.solutions

Sitio estático de Valen Solutions. Sin build en el deploy: el CSS ya viene compilado en el repo.

- `index.html` español · `en/index.html` inglés. Estilos en `site.css`, compilado con Tailwind (config en `tailwind.config.js`); íconos Material Symbols y fuentes de Google Fonts.
- Si tocás clases de Tailwind en los HTML, recompilá y commiteá `site.css`:

      npm install && npx tailwindcss -c tailwind.config.js -i src/input.css -o site.css --minify
- `gracias.html` / `en/thanks.html`: páginas post-envío, usan `style.css`.
- Para tocar textos, editar los dos HTML a mano: son la misma estructura, uno por idioma.
- Editar y hacer `git push` a `main`: GitHub Pages publica solo.

## Pendientes manuales (una sola vez)

1. **Dominio**: comprar `valen.solutions` en Cloudflare Registrar. En Cloudflare DNS:
   `A @ → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153`,
   `CNAME www → <usuario>.github.io`. Luego crear el archivo `CNAME` con `valen.solutions`
   y activar "Enforce HTTPS" en Settings → Pages.
2. **Email**: Cloudflare → Email Routing → `contact@valen.solutions` → casilla de la empresa.
3. **Formulario**: pedir access key en https://web3forms.com con `contact@valen.solutions`
   y reemplazar `WEB3FORMS_ACCESS_KEY` en `index.html` y `en/index.html`.
   El form ya trae hCaptcha (clave compartida de Web3Forms, no hace falta registrar nada); en localhost muestra un aviso rojo que desaparece en el dominio real.

## Probar local

    python3 -m http.server 8000
