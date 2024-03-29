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
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
getAuth(app);
getDatabase(app);
getStorage(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
