# Inspiration
Beginning this program knowing close to nothing about blockchain, XRP, and building fullstack projects in general, I knew I wanted to take it easy. Given blockchain's association with financial technology, I thought it'd be fun to implement a personal wallet that tells you all the information you need, all the while keeping it engaging, rewarding, and interactive so that asset management is not a chore! This is the bare beginnings of that project.

# What it does
This is primarily a personal wallet UI that displays information about your XRP account. It includes the following features:
- Generate Wallet: Creating new wallets on XRP Testnet Faucet. To increase security, the secret key of your new wallet disappears in 30 seconds after generation. 
- Balance Display: After logging into your wallet with the secret key, your XRP balance will be displayed.
- Sending XRP to others: To send XRP, enter the recipient's address, specify the amount, and press 'send XRP'! This will automatically deduct your wallet balance. Since this often takes a moment, there is a 'Loading...' symbol that lets you know if your click registered. 
- Receive XRP: If someone else sends you XRP, it will update the balance once you click the button again
- Flower Pet: If you have more XRP, your flower will grow bigger. And if you have less XRP, your flower will grow smaller. This feature is intended to encourage people to take care of their flower pet and save up. 


# How I built it
Emma deserves so much credit for helping me get started and introducing me to react.js.
The front-end UI and managing client-side states are all done through react. Using the xrpl.js package, I was able to bring xrpl technology to the frontend, allowing the user to display and manipulate its states. The wallets come from the XRP Testnet faucet. CSS was then used to add instructions, make the UI more pleasing to the eye, and add the fun little flower animation. 
# Challenges I ran into
The biggest challenges I ran into arose from time constraints and having this be my first time building a project on my own from scratch. As I'm overcoming that steep learning curve, I think of more ideas and possibilities of what I can do. 
Again, thank you to Emma for all her guidance in getting a repo set up and guiding me through integrating with XRP. 
# What I learned
Because I am a beginner, there was so much to learn! From what blockchain is and its benefits to implementing a fullstack project to package managers to deployment -- everything I did in this project was brand new to me (except git)!

# Running this repo locally
To run this project locally, follow these steps:

Clone the Repository:

`git clone https://github.com/your-username/xrp-wallet-generator.git`
`cd xrp-wallet-generator`

Install Dependencies: 

`npm install`

Create local instance:
`npm start`
Open in Browser: Navigate to http://localhost:3000 in your browser to interact with the application.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
