import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation from './admin/navigation/Navigation'

ReactDOM.render(<Navigation />, document.getElementById('root'));

serviceWorker.unregister();
