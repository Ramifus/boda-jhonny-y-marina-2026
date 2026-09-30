// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección del sitio publicado. Sin esto, la vista previa de WhatsApp no
  // aparece: las etiquetas og: necesitan la URL completa de la imagen.
  site: 'https://boda-jhonny-y-marina-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});
