import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';
import List from './containers/List';

const App = () => {
    return(
       
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom-white">
                <div className="container">
                    <a href="/" className="navbar-brand">Movie App</a>
                </div>
            </nav>
            <main className="bg-dark">
                <div className="container">
                    <List/>
                </div>
            </main>
           
        </Fragment>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));