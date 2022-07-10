## Decisions

I think one of the most crucial decisions i made was regarding how i was gonna handle the request sent to the graphql server and the response coming from it. I made some research and discovered `Apollo Client`. It was a top of the list of recommended libraries out of many others. I read documentation and realised that it had a lot to offer and it was relatively easy to grasp but maybe not at first read, trust me i had to read it over a couple of times before i could wrap my head around it. 😎

The other decisions i made were regarding the other libraries i used in getting the project ready. libraries like `TailwindCss` for styling, `React-spinner` for the loading state etc. 

And before i forget this part, i used the react contextAPI for managing the state because i didn't want to keep firing requests at every search query that was made and at every filter that was fired, and anyway the API i used did not have arguments to fetch specific listings in that manner, so i guess i had no choice but to implement a state management and also use the local storage as a buffer. This, in my opinion, might affect the entire time it takes to load all the jobs but i figured it would be easier to make search and filter queries once that hurdle has been surmounted. One has to trade one quirk for the other.


## Shortcuts

Well, i think the only shortcut i took was to avoid writing too much comments, but instead made my variable names descriptive of what they do, and also wrote my code in a way that most people would understand it, even if i had to make the code a little longer. 😊 I most likely would priotize readability over functionality. I am open to corrections anyway.

# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
