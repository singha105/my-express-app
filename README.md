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

## Screenshots

Deployed to an AWS EC2 instance (Ubuntu 22.04, `t3.micro`, `eu-west-2`),
running under [pm2](https://pm2.keymetrics.io/) so it survives SSH
disconnects.

**pm2 confirming the app is running:**

![pm2 status](docs/pm2-status.png)

**The app's JSON response, live on the public IP:**

![App JSON response](docs/app-response.png)

**The EC2 instance in the AWS Console:**

![EC2 instance details](docs/aws-instance-details.png)

**The security group's inbound rules (SSH restricted to a single IP, app
port open to the world):**

![Security group inbound rules](docs/sg-inbound-rules.png)
