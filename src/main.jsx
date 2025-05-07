import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { HashRouter } from 'react-router-dom';

import App from "./App";
import './index.css'; // Assurez-vous d'importer votre fichier CSS si nécessaire
import '@fortawesome/fontawesome-free/css/all.min.css';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter>
  </React.StrictMode>
);

;
// import ReactDOM from "react-dom";




// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename="/site_projet8">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
