import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'normalize.css';
import 'react-rangeslider/lib/index.css'
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
