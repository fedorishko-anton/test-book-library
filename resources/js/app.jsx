import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import BookList from "./components/BookList.jsx";
import Books from "./components/Books.jsx";

function App() {
    return (
        <Books />
    );
}

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App />);