import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import BookList from "./components/BookList.jsx";

function App() {
    return (
        <BookList />
    );
}

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App />);