# Personal Finance Tracker - Cheah Loke Yin

This is a Next.js application using Drizzle ORM for database management, Neon for PostgreSQL hosting, and Clerk for authentication.

## Getting Started

To get started with this project, follow the steps below.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/stanleman/https://github.com/stanleman/PSW-finance.git
   cd PSW-finance
   ```

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Setting up .env.local**
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP=/dashboard
   
   NEXT_PUBLIC_DATABASE_URL=your-database-url
   ```

   ### Important Note!
   Replace the url in the drizzle.config.js file with your own database URL. I was unable to make it so that it reads the value from .env.local, even when i used dotenv. Apologies for the inconvenience!

4. **Running application**
   ```
   npm run dev
   # or
   yarn dev
   ```

Open http://localhost:3000 in your browser to see the application in action.
