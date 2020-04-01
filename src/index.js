import React from 'react';
import ReactDOM from 'react-dom';
import SubscripApp from './SubscripApp';
import * as serviceWorker from './serviceWorker';
import { APP_ROOT } from './utils/constants'

ReactDOM.render(<SubscripApp />, document.getElementById(APP_ROOT)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
