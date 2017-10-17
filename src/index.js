import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="app">hi</div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);