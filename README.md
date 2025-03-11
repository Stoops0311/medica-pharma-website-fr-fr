# Medica Pharma Website

A modern website for Medica Pharma built with Next.js and React.

## Setup Instructions for Non-Developers

This guide will help you set up and run the Medica Pharma website on your computer, even if you have no coding experience. Follow the steps for your operating system.

## Windows Setup

### Step 1: Install Git

1. Download Git from [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Run the installer and follow the prompts, accepting the default options
3. After installation, open "Git Bash" from the Start menu

### Step 2: Install Node.js

1. Download Node.js from [https://nodejs.org/](https://nodejs.org/) (choose the LTS version)
2. Run the installer and follow the prompts, accepting the default options
3. To verify the installation, open Command Prompt (press Win+R, type `cmd`, and press Enter)
4. Type `node -v` and press Enter - you should see the Node.js version number
5. Type `npm -v` and press Enter - you should see the npm version number

### Step 3: Clone the Repository

1. Create a folder where you want to store the website files
2. Open Command Prompt
3. Navigate to the folder you created (use the `cd` command, for example: `cd C:\Users\YourName\WebsiteFolder`)
4. Clone the repository by typing:
   ```
   git clone https://github.com/your-username/medica-pharma.git
   ```
   (Make sure to replace "your-username" with your actual GitHub username)
5. Navigate into the project folder:
   ```
   cd medica-pharma
   ```

### Step 4: Install Dependencies and Run the Website

1. In the Command Prompt, while in the project folder, type:
   ```
   npm install
   ```
   This might take a few minutes
2. After installation completes, type:
   ```
   npm run dev
   ```
3. Open your web browser and navigate to: `http://localhost:3000`
4. You should now see the Medica Pharma website running locally on your computer

## Mac Setup

### Step 1: Install Git

1. Open Terminal (press Cmd+Space, type "Terminal", and press Enter)
2. Check if Git is already installed by typing: `git --version`
3. If Git is not installed, you'll be prompted to install the Xcode Command Line Tools. Click "Install" and follow the prompts
4. After installation, verify Git is installed by typing: `git --version`

### Step 2: Install Node.js and npm

1. Download Node.js from [https://nodejs.org/](https://nodejs.org/) (choose the LTS version)
2. Run the installer and follow the prompts
3. To verify the installation, open Terminal
4. Type `node -v` and press Enter - you should see the Node.js version number
5. Type `npm -v` and press Enter - you should see the npm version number

### Step 3: Clone the Repository

1. Create a folder where you want to store the website files
2. Open Terminal
3. Navigate to the folder you created (use the `cd` command, for example: `cd ~/Documents/WebsiteFolder`)
4. Clone the repository by typing:
   ```
   git clone https://github.com/your-username/medica-pharma.git
   ```
   (Make sure to replace "your-username" with your actual GitHub username)
5. Navigate into the project folder:
   ```
   cd medica-pharma
   ```

### Step 4: Install Dependencies and Run the Website

1. In Terminal, while in the project folder, type:
   ```
   npm install
   ```
   This might take a few minutes
2. After installation completes, type:
   ```
   npm run dev
   ```
3. Open your web browser and navigate to: `http://localhost:3000`
4. You should now see the Medica Pharma website running locally on your computer

## Building for Production

If you want to deploy the website to a server, you'll need to build it first:

1. In Command Prompt or Terminal, navigate to the project folder
2. Run:
   ```
   npm run build
   ```
3. After building completes, run:
   ```
   npm start
   ```
4. The production version will be available at `http://localhost:3000`

## Troubleshooting

### Common Issues:

1. **Port Already in Use**: If you see an error that port 3000 is already in use, you can try:
   - Close other applications that might be using port 3000
   - Or change the port by running: `npm run dev -- -p 3001` (this will use port 3001 instead)

2. **Installation Errors**: 
   - Make sure you have a stable internet connection
   - Try running the installation with admin privileges
   - On Windows: Right-click Command Prompt and select "Run as administrator"
   - On Mac: Use `sudo npm install` (you'll be prompted for your password)

3. **"command not found" Errors**:
   - Make sure you've installed Node.js correctly
   - Try restarting your computer
   - Make sure you're in the correct folder when running commands

For additional help, contact the website administrator.

## Developer Information

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Technical Details

- Built with Next.js 15.2.1
- Uses React 19.0.0
- Styled with TailwindCSS 4
- Form handling with react-hook-form and zod validation

### Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server
- `npm run lint` - Lints the codebase

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
