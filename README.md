# Blood Donation App

A full-stack demonstration application for managing blood donations, built with Angular 21 and .NET 8 Minimal API.

## Features

- **Donors Management**: Create, list, and delete blood donors
- **Receivers Management**: Create, list, and delete blood receivers
- **FIFO Donation Assignment**: Automatically assigns the first available donor to the first pending receiver

## Tech Stack

- **Frontend**: Angular 21 (Standalone + Signals), PrimeNG
- **Backend**: .NET 8 Minimal API, Swagger

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd mediapp

# Start Backend
cd backend
dotnet run
# API: http://localhost:5000
# Swagger: http://localhost:5000/swagger

# Start Frontend (new terminal)
cd frontend
npm install
npm start
# App: http://localhost:4200
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/donors` | List all donors |
| POST | `/api/donors` | Create donor |
| GET | `/api/receivers` | List all receivers |
| POST | `/api/receivers` | Create receiver |
| GET | `/api/donations` | List all donations |
| POST | `/api/donations` | Assign donation (FIFO) |

## Architecture

```
src/app/features/
├── donors/      # model, service, store, pages, components
├── receivers/
└── donations/
```

## License

MIT License - see [LICENSE](LICENSE) file.

## Spanish Version

[Español](README.es.md)