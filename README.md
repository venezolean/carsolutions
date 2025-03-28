# AutoMax - Concesionaria de Autos

Sitio web profesional para la venta de autos 0km y usados, desarrollado con React y TypeScript.

## Características

- Catálogo de vehículos nuevos y usados
- Información detallada de cada vehículo
- Sección de vendedores con información de contacto
- Integración con WhatsApp para contacto directo
- Carrusel de imágenes automático
- Diseño responsive y moderno
- Sección de financiamiento y planes de ahorro

## Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (para íconos)
- Vite (bundler)

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes React
  ├── types/         # Tipos TypeScript
  ├── App.tsx        # Componente principal
  └── main.tsx       # Punto de entrada
```

## Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos de producción se generarán en el directorio `dist/`.