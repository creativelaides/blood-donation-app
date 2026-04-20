# Blood Donation App

## Stack
- **Frontend**: Angular 21 (Standalone + Signals)
- **Backend**: .NET 8 Minimal API
- **UI**: PrimeNG

## Comandos
```bash
# Frontend
cd frontend && npm start

# Backend
cd backend && dotnet run
```

## Arquitectura
```
src/app/features/
├── donors/      # pages, components, services, models, store
├── receivers/
└── donations/
```

## Convenciones
- Signals para estado (no RxJS BehaviorSubject)
- Standalone components
- Componente = UI | Store = Estado | Service = HTTP
- Rutas en `app.routes.ts`