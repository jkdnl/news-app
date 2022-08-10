import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import {newsAPI} from "./services/NewsService";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ApiProvider api={newsAPI}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApiProvider>
);
