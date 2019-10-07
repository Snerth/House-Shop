import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from './routing'

ReactDOM.render(<Routing />, document.getElementById('root'));


serviceWorker.unregister();
