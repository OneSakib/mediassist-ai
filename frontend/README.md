# MediAssist AI — Frontend Demo

Frontend-only Next.js demo for a medical AI assistant.

## Features

- Login screen with mocked authentication
- Dashboard
- Medical report cards
- Health history timeline
- Patient profile
- Chat UI with session-based URLs
- Chat history sidebar
- New consultation button
- Demo symptom conversation
- Safety/disclaimer messaging
- Terms & Conditions page
- Responsive healthcare SaaS theme
- No backend required

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Backend integration

Replace the mock functions/data in `data/mockData.ts` and the client-side handlers with your FastAPI/Django APIs.

Suggested API groups:

- POST /auth/login
- POST /auth/register
- GET /patients/me
- GET /chat/sessions
- POST /chat/sessions
- GET /chat/sessions/:id/messages
- POST /chat/sessions/:id/messages
- POST /reports/upload
- GET /reports
- GET /patients/history

The current UI intentionally contains no diagnostic engine or real medication recommendation logic.
