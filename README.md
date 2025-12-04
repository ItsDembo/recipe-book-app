<<<<<<< HEAD
# NourishAI Kitchen

A modern, tasteful startup web app that uses AI to help with cooking and health in a realistic, non-toxic way.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, React Query, Framer Motion.
- **Backend**: Node.js (Express), PostgreSQL, Prisma ORM.
- **AI**: Integration with OpenAI (or similar) for lifestyle coaching and recipe generation.

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL installed and running.

### Setup

1.  **Clone the repository** (if you haven't already).
2.  **Install dependencies**:

    ```bash
    # Backend
    cd server
    npm install
    
    # Frontend
    cd ../client
    npm install
    ```

3.  **Environment Variables**:
    - Create `server/.env` based on `server/.env.example` (you need to create this).
    - Set `DATABASE_URL` in `server/.env`.
    - Set `OPENAI_API_KEY` (or equivalent) in `server/.env`.

4.  **Database Setup**:

    ```bash
    cd server
    npx prisma migrate dev --name init
    ```

5.  **Run the App**:

    ```bash
    # Backend (Terminal 1)
    cd server
    npm run dev

    # Frontend (Terminal 2)
    cd client
    npm run dev
    ```

## Features

- **Lifestyle Coach**: Gentle, habit-based guidance.
- **Recipe Creator**: AI-generated recipes based on your preferences.
- **Daily Planner**: Smart meal planning for your schedule.
=======
# recipe-book-app
>>>>>>> 2aa5fa4bd359c6821dcd33f36838ecddbb1bda17
