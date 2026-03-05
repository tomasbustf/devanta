# Devanta — Landing Page en Angular 17

Proyecto Angular 17 standalone (sin NgModules), con arquitectura limpia y lista para producción.

---

## 🚀 Cómo correr el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm start
# → http://localhost:4200
```

### 3. Build para producción
```bash
npm run build:prod
# output en /dist/devanta
```

---

## 🖼️ Logos

Copia tus logos a:
```
src/assets/images/devanta-logo.png    ← logo horizontal (navbar y footer)
src/assets/images/dv-icon.png         ← ícono cuadrado (opcional)
```
Si no están, el código muestra el texto "DEVANTA" como fallback automático.

---

## ✏️ Agregar nuevos trabajos al portafolio

Abre el archivo:
```
src/app/services/portfolio.service.ts
```

Dentro del array `projects`, agrega un objeto como este:

```typescript
{
  id: '007',                          // ID único (string)
  title: 'Nombre del Proyecto',
  client: 'Nombre del Cliente',
  category: 'web',                    // 'web' | 'mobile' | 'platform' | 'ai' | 'design' | 'consulting'
  description: 'Descripción del proyecto. Qué resuelve, qué tecnología usa, cuál fue el impacto.',
  tags: ['React', 'Node.js', 'AWS'],  // tecnologías o keywords
  imageUrl: 'assets/images/proyecto-nombre.jpg',  // imagen (opcional)
  imageColor: '#1a0d2e',              // color de fondo si no hay imagen
  liveUrl: 'https://tusitio.com',     // link al sitio live (opcional)
  year: 2025,
  featured: true                      // opcional: para destacarlo
}
```

### Agregar imagen al proyecto
1. Coloca la imagen en `src/assets/images/`
2. Usa el path relativo en `imageUrl`: `'assets/images/mi-proyecto.jpg'`
3. Recomendado: 16:9, mínimo 800×450px

---

## 🎨 Cambiar colores de la paleta

Edita las variables CSS en `src/styles.scss`:
```scss
:root {
  --purple:  #803ac4;   // color primario
  --lavender:#bd98e0;   // acento/highlights
  --deep:    #2c1443;   // fondo oscuro profundo
  --muted:   #8c849c;   // texto secundario
  --light:   #c2bec6;   // texto terciario
}
```

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← Navegación sticky
│   │   ├── hero/            ← Hero con canvas animado
│   │   ├── services/        ← Grid de servicios
│   │   ├── portfolio/       ← Portafolio con filtros y modal
│   │   ├── process/         ← Proceso de trabajo
│   │   ├── pricing/         ← Planes de precios
│   │   ├── team/            ← Equipo
│   │   ├── contact/         ← Formulario de contacto
│   │   └── footer/          ← Footer
│   ├── models/
│   │   └── portfolio.model.ts   ← Interfaz PortfolioProject
│   └── services/
│       └── portfolio.service.ts ← 👈 AGREGA PROYECTOS AQUÍ
├── assets/
│   └── images/              ← Logos e imágenes de proyectos
├── styles.scss              ← Estilos globales y variables CSS
└── index.html
```

---

## 🔧 Personalizar textos y contenido

| Sección     | Archivo                                |
|-------------|----------------------------------------|
| Servicios   | `components/services/services.component.ts` |
| Proceso     | `components/process/process.component.ts`   |
| Precios     | `components/pricing/pricing.component.ts`   |
| Equipo      | `components/team/team.component.ts`         |
| Contacto    | `components/contact/contact.component.html` |
| Portafolio  | `services/portfolio.service.ts`             |

---

## 📦 Dependencias principales

- Angular 17 (standalone components)
- Angular Animations
- Angular Forms (para el formulario de contacto)
- TypeScript 5.2
- SCSS

---

Hecho con 💜 por Devanta.
