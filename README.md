# Web3 Sneaker Configurator

A browser-based, AI-powered 3D product configurator that lets users customize and preview their limited-edition smart sneaker in real time.

## Repository Information
- Repository: `3d-sneaker-configurator` (standalone repository)

See `GITHUB_INSTRUCTIONS.md` for detailed push instructions.

## Features

- Interactive 3D sneaker model with rotate, zoom, and pan functionality
- Material customization (leather, mesh, carbon fiber)
- Color customization for primary and accent colors
- AI Style Mode for natural language customization
- Cyberpunk-minimalist UI with dark gradients and glowing accents
- Fully responsive design for mobile and desktop

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- React Three Fiber + drei for 3D rendering
- Tailwind CSS for styling
- Framer Motion for animations

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization Options

- **Materials**: Choose between leather, mesh, and carbon fiber
- **Colors**: Select primary and accent colors using color pickers
- **AI Style**: Enable AI Style Mode and describe your dream sneaker in natural language

## Deployment

### Netlify Deployment

1. Push your code to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

The application will be automatically built and deployed to Netlify. Any future commits to your repository will trigger automatic redeployments.

You can also deploy on Vercel with zero configuration.