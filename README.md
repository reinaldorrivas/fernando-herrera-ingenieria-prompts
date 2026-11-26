# Prácticas Ingeniería de Prompts

## Curso Fernando Herrera

Este curso está dedicado a practicar con prompts y entender cómo interactuar con los modelos de lenguaje.

## Estructura por ejercicios

```text
src/
├── main.tsx
├── index.css
├── types/
│   └── exercise.ts
├── menu/
│   ├── ExercisesMenu.tsx
│   └── ExercisesMenu.css
└── exercises/
    ├── index.ts
    └── 01-completar-secuencias/
        ├── CompletarSecuencias.tsx
        ├── CompletarSecuencias.css
        └── index.ts
```

### Cómo agregar un nuevo ejercicio

1. Crea una carpeta dentro de `src/exercises/` (por ejemplo, `02-mi-ejercicio/`).
2. Implementa el componente del ejercicio y exporta su metadata `ExerciseModule` en un `index.ts` interno.
3. Registra el módulo en el arreglo `exercises` dentro de `src/exercises/index.ts` para que aparezca automáticamente en el menú principal.
