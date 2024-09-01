# Next.js App with Drizzle ORM and Neon Database

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
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. ***Install dependencies:***
```
npm install
# or
yarn install
```

3. ***Setting up .env.local***
```
# Clerk publishable key for frontend authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

# Clerk secret key for backend authentication
CLERK_SECRET_KEY=your-clerk-secret-key

# URL to redirect users after signing in
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

# URL to redirect users after signing up
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# URL to redirect users after successful sign in
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN=/dashboard

# URL to redirect users after successful sign up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP=/dashboard

# Database connection URL
NEXT_PUBLIC_DATABASE_URL=your-database-url
```

### Running application
```
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to see the application in action.
