# Odyssey Homestead Site

A React + TypeScript application for Odyssey Homestead: showcasing sustainable living and farm experiences.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode on http://localhost:3000.

### `npm run build`

Bundles the app for production in the `build` folder.

### `npm test`

Launches the test runner in interactive watch mode.

## Deployment

This project uses GitHub Actions for automated deployment to a VPS. The deployment workflow is configured in `.github/workflows/deploy.yml` and can be triggered manually from the GitHub Actions tab.

### Required GitHub Secrets

To enable deployment, set up the following secrets in your GitHub repository settings:

- `VPS_SSH_KEY`: Your private SSH key for VPS authentication
- `VPS_USER`: SSH username for the VPS
- `VPS_HOST`: Hostname or IP address of your VPS
- `VPS_DEPLOY_PATH`: Target directory on the VPS where the build files should be deployed

### Deployment Process

1. The workflow builds the React application
2. Using rsync, it securely transfers the build files to your VPS
3. Finally, it reloads Nginx to serve the new content

To deploy:
1. Go to the Actions tab in your GitHub repository
2. Select "Manual Deploy to VPS"
3. Click "Run workflow"
4. Select the branch you want to deploy (defaults to 'main')

## Project Structure

```
src/
  ├── pages/         # Page components
  ├── components/    # Reusable components
  ├── App.tsx       # Root application component
  └── index.tsx     # Application entry point
```

## Best Practices

This project follows React and TypeScript best practices:

- Functional components with TypeScript
- Component-based architecture
- Clean and maintainable code structure
- Automated testing with Jest and React Testing Library
- Modern React features (hooks, functional components)

## Contributing

1. Create a feature branch from 'main'
2. Make your changes
3. Submit a pull request
