import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './HelloWorldApp';
//import FirstApp from './FirstApp';

import './styles.css';
import CounterApp from './CounterApp';


ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        <CounterApp value={100}/>
        {/*<FirstApp title="Hola Soy Illika" subTitle />*/}
    </React.StrictMode>
);

