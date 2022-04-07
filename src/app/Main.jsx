import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Bookmarks from './pages/Bookmarks.jsx';
import ClockDisplay from './pages/ClockDisplay.jsx';


export default function Main() {
    return (
        <Routes basename="/homepage">
            <Route path='*' element={<Bookmarks />} />
            <Route path='/' element={<Bookmarks />} />
            <Route path='/clockdisplay' element={<ClockDisplay />} />
        </Routes>
    );
}