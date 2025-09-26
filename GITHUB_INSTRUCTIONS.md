# GitHub Push Instructions

## Repository Structure
1. Create a new standalone repository: `3d-sneaker-configurator`
2. Push directly to the main branch

## Step-by-Step Instructions

### One-time Setup
```bash
# Navigate to your project directory
cd path/to/project

# Initialize Git repository
git init

# Add all files to staging
git add .

# Commit files
git commit -m "Initial commit: 3D Sneaker Configurator"

# Create a new repository on GitHub named "3d-sneaker-configurator"
# Then add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/3d-sneaker-configurator.git

# Push to the main branch
git push -u origin main
```

### If You Need to Update Later
```bash
# Add changes
git add .

# Commit changes
git commit -m "Update: [Brief description of changes]"

# Push changes
git push
```

## Troubleshooting
- If you get authentication errors, make sure you're logged in to GitHub
- If the branch already exists, you may need to pull first: `git pull origin visuals/3d-sneaker-configurator`
- For merge conflicts, resolve them in your code editor and then continue with the commit