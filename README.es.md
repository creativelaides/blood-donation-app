# Blood Donation App

Una aplicación de demostración full-stack para gestionar donaciones de sangre, construida con Angular 21 y .NET 8 Minimal API.

## Características

- **Gestión de Donantes**: Crear, listar y eliminar donantes de sangre
- **Gestión de Receptores**: Crear, listar y eliminar receptores de sangre
- **Asignación FIFO**: Asigna automáticamente el primer donante disponible al primer receptor pendiente

## Tecnologías

- **Frontend**: Angular 21 (Standalone + Signals), PrimeNG
- **Backend**: .NET 8 Minimal API, Swagger

## Inicio Rápido

```bash
# Clonar el repositorio
git clone <repository-url>
cd mediapp

# Iniciar Backend
cd backend
dotnet run
# API: http://localhost:5000
# Swagger: http://localhost:5000/swagger

# Iniciar Frontend (nueva terminal)
cd frontend
npm install
npm start
# App: http://localhost:4200
```

## Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/donors` | Listar donantes |
| POST | `/api/donors` | Crear donante |
| GET | `/api/receivers` | Listar receptores |
| POST | `/api/receivers` | Crear receptor |
| GET | `/api/donations` | Listar donaciones |
| POST | `/api/donations` | Asignar donación (FIFO) |

## Arquitectura

```
src/app/features/
├── donors/      # model, service, store, pages, components
├── receivers/
└ donations/
```

## Licencia

Licencia MIT - ver archivo [LICENSE](LICENSE).