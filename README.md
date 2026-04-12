# Second Brain

A full-stack web app for collecting and organizing links and notes—YouTube videos, tweets, documents, and generic URLs—with tags, a dashboard, and optional read-only sharing via a public link.

## Tech stack

| Layer    | Technologies |
|----------|----------------|
| Frontend | [React](https://react.dev/) 19, [Vite](https://vite.dev/) 7, [Tailwind CSS](https://tailwindcss.com/) 4, [React Router](https://reactrouter.com/) 7, [Axios](https://axios-http.com/) |
| Backend  | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) 5, [TypeScript](https://www.typescriptlang.org/) |
| Data     | [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) |
| Auth     | [JWT](https://jwt.io/) stored in an HTTP-only cookie (`withCredentials` + CORS credentials) |

## Features

- **Accounts**: Sign up and sign in; session uses a secure cookie.
- **Dashboard**: View saved items in a card layout; filter by all content, tweets, or YouTube.
- **Add content**: Save items with a title, URL, type (`document`, `twitter`, `youtube`, or `link`), and tags.
- **Delete**: Remove items you own.
- **Share “brain”**: Generate a shareable URL so others can open a read-only view of your collection (when implemented end-to-end in the UI).

## Project structure

```
second_brain/
├── backend/          # Express API (TypeScript)
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── ...
└── frontend/         # React SPA (Vite)
    └── src/
        ├── Pages/
        ├── componenets/
        └── ...
```

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- A MongoDB database (e.g. [MongoDB Atlas](https://www.mongodb.com/atlas) or a local `mongod` instance)

## Backend setup

1. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

2. **Environment variables**

   Create a `.env` file in `backend/` (this repo does not ship one):

   | Variable     | Description |
   |--------------|-------------|
   | `MONGO_URL`  | MongoDB connection string (required). |
   | `JWT_SECRET` | Secret used to sign JWTs (required). |
   | `PORT`       | Server port (optional; defaults to `8000` if unset). |

   Example:

   ```env
   MONGO_URL=mongodb+srv://user:password@cluster.example.mongodb.net/second_brain
   JWT_SECRET=your-long-random-secret
   PORT=5000
   ```

3. **Run in development**

   ```bash
   npm run dev
   ```

4. **Production build**

   ```bash
   npm run build
   npm start
   ```

   The compiled output is written to `backend/dist/`.

API routes are mounted under **`/api/v1/user`** (for example, `POST /api/v1/user/sign-in`).

## Frontend setup

1. **Install dependencies**

   ```bash
   cd frontend
   npm install
   ```

2. **Development server**

   ```bash
   npm run dev
   ```

   By default the app is served at `http://localhost:5173`. API calls use the path prefix `/api/v1`, and **Vite proxies** requests under `/api` to `http://localhost:5000` (see `frontend/vite.config.ts`).

   **Align ports**: If your API listens on a port other than `5000`, either set `PORT=5000` in the backend `.env` or change the `server.proxy` target in `vite.config.ts` to match your backend port.

3. **Production build**

   ```bash
   npm run build
   ```

   Serve the `frontend/dist/` output behind any static host; configure that host (or a reverse proxy) so `/api` routes to your Express server.

## Environment summary

| Service  | Variables / notes |
|----------|-------------------|
| Backend  | `MONGO_URL`, `JWT_SECRET`, optional `PORT` |
| Frontend | Uses relative `/api/v1` in `frontend/src/Config.tsx`; relies on the dev proxy or production reverse proxy for `/api` |

## Scripts

**Backend** (`backend/package.json`)

- `npm run dev` — development with hot reload (`nodemon` + `tsx`)
- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run compiled server

**Frontend** (`frontend/package.json`)

- `npm run dev` — Vite dev server
- `npm run build` — typecheck and production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — ESLint

## License

Add a `LICENSE` file and reference it here if you publish the repository publicly.
