import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./translate/i18n.ts";

import { Provider } from "react-redux";
import { store } from "./store/index.ts";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebase/config.ts";
import { getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
