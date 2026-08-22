# my-express-app

A minimal Express.js app that exposes a single JSON health-check endpoint.

## What it does

`GET /` returns a JSON payload with a status flag, service name, and current
timestamp — useful as a starting point for a real service or as a target for
uptime checks.

Example response:

```json
{
  "status": "ok",
  "service": "my-express-app",
  "timestamp": "2026-08-22T12:00:00.000Z"
}
```

## Running locally

```bash
npm install
npm start
```

The server listens on port `3000` by default. Set the `PORT` environment
variable to change it:

```bash
PORT=8080 npm start
```

Then visit `http://localhost:3000/` (or your chosen port) in a browser or
with `curl`.
