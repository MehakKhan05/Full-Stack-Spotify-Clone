# Full-Stack Spotify Clone

This project is a Spotify clone built with [Next.js](https://nextjs.org/) using the `create-next-app` starter template. It includes features to provide users with a seamless music streaming experience inspired by Spotify. This app leverages [Supabase](https://supabase.io) for authentication and backend services.

## Features

- **Authentication** with Supabase, including email/password login
- **Music Library**: Users can upload and store their own music library
- **Responsive Design**: Optimized for various screen sizes
- **Component-based Structure**: Reusable and maintainable React components

## Project Structure

- **components**: Contains reusable UI components like `AuthModal`, `Button`, `Header`, `Sidebar`, `UploadModal`, etc.
- **providers**: Includes context providers for `ModalProvider`, `SupabaseProvider`, `ToasterProvider`, and `UserProvider`.
- **hooks**: Custom React hooks to manage state and business logic.
- **public**: Static assets used in the project.
- **styles**: Global styling using Tailwind CSS and PostCSS configuration.

## Technologies Used

- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: For type safety across the project.
- **Supabase**: Backend services including authentication and database.
- **Tailwind CSS**: For rapid styling with utility classes.
- **React Context API**: State management for modals, user authentication, and notifications.
- **PostCSS**: CSS processing with Tailwind and autoprefixing.

## Prerequisites

- **Node.js** (>=14.x) and **npm** installed on your machine.
- Supabase account and setup to manage user authentication.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/full-stack-spotify-clone.git

```

2. **Install dependencies**: 

 ```bash
    
    npm install 

    ```
3. **Environment Variables**: 

Create a .env.local file in the root of your project and add your Supabase credentials and other environment variables. 

4. **Run the Development Server**: 

 ```bash
    
    npm run dev

    ```
5. **Start Editing**:

The main entry point for pages is in the app/pages.tsx. Edits here will reflect immediately thanks to Next.js' hot-reloading feature.