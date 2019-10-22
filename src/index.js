import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import Cesium from "cesium";

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjEzOTc3Yi1mZGQ3LTQ2M2ItYWRhNy05YjQ4OWFjNDgzYjQiLCJpZCI6NDYyOCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MTI2NjUzNX0.IElSGP-gOEmsWxZRsWGM6z29yUD3xPQJvlaqEB98TkQ";

ReactDOM.render(<App />, document.getElementById('root'));