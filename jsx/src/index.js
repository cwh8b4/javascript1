// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
const butonText = {text: 'Click me'}

    return(
    <div>Hi there!</div>
    );
};

functioin getButtonText() {
    return 'Click on me!';
}

//Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')

);