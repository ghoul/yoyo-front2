// import React, { Suspense } from "react";
// // import ReactDOM from "react-dom";
// import {createRoot} from 'react-dom/client';
// import "./assets/scss/style.scss";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { HashRouter } from "react-router-dom";
// import Loader from "./layouts/loader/Loader";
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // ReactDOM.render(
// //   <Router>
// //     <App />
// //   </Router>,
// //   document.getElementById('root')
// // );

// root.render(
//   <Suspense fallback={<Loader />}>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </Suspense>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Loader from './layouts/loader/Loader';
// import { BrowserRouter as Router } from 'react-router-dom'; // Change to BrowserRouter

// ReactDOM.render(
//   <React.StrictMode>
//     <Router> {/* Use BrowserRouter */}
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loader from './layouts/loader/Loader';
import {  HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();


