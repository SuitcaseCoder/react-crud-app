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
FYI - I definitely used [this](https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/) tutorial from FreeCodeCamp

#### Additional Resources used:
- [freecodecamp crud blog](https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/)
- [react-router tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-routes)
- bits and pieces from the [official React Documentation](https://reactjs.org/)
- how to pass props in React-Router v6, thanks [stack overflow](https://stackoverflow.com/questions/70443591/how-to-pass-props-using-element-in-react-router-v6)
- [using localStorage hooks](https://designcode.io/react-hooks-handbook-uselocalstorage-hook)


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

 ### Add Word
  - 1. Created `Form`, `AddWord`, and `VocabList` components
  - 2. In the `Form` component:
   - - Rendered a `<form>`, each `input` had a `name` and `value` attribute (this is important!), and of course a `button`
   - - Each input also had a `onChange={handleInputChange}` attribute
   - - - the `handleInputChange` function was then added to the `Form` component __above__ the `render` method
   - - - the `button` had a `type="submit` attribute and the `form` had a `onSubmit={handleSubmit}` attr. 
 - 3. The `handleInputChange`:
  - - grabbed the `name` and `value` values by destructuring those values from the target event: `const { name, value } = e.target;`
  - - then using the `setWord` method we created in the hook, we set the word to whatever the user inputs
 - 4. The `handleSubmit`:
  - -  saves the input values in an array to make sure that they'v all been filled 
  - - if all fields have been filled, define the word with those values
  - - pass the newly added word to the `handleSubmit` that was passed in from the `AddWord` component, that way we can use this same form for add, edit, and delete


### Rendering Vocab List
 - 1. 