# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


---

# Notes for me:

### Splash Page
 - 1. Created two folders `components` and `pages`
 - 2. Created the following components each with a react functional component (using the rfc shortcut in vscode)
    - Navbar
    - Image
    - Header
    - Footer
- 3. Created the splash page file and brought in some of the components
- 4. Added the splash page to App.js file

### Routing
 - 1. installed react-router `npm install react-router-dom@6` read more [here](https://reactrouter.com/docs/en/v6/getting-started/overview)
 - 2. Imported `{ BrowswerRouter }` in my index.js as per [these](https://reactrouter.com/docs/en/v6/getting-started/tutorial#connect-the-url) instructions
 - 3. Added links to my navbar by importing `{ Link }` into the navbar
 - 4. Told my react-router which paths lead to which components (read more [here](https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-routes)) in Index.js
