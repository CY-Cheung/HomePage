import React from 'react';
import { Link } from 'react-router-dom';
import '../components/button/button.css'
import '../components/button/button.js'
import Clock1 from '../components/clock/Clock1.jsx';
import Clock2 from '../components/clock/Clock2.jsx';

export default function SideMenu() {
    return (
		<nav className="container col-lg-2 col-3">
            <div className="HeaderHeight"></div>

            <h6>Menu</h6>
            <div className="container py-3" style={{'text-align': 'center'}}>
                <Link to=""><button className="button-rainbow" style={{'width': '100%'}}>Bookmarks</button></Link><br/>
                <Link to="clockdisplay"><button className="button-rainbow" style={{'width': '100%'}}>Clock Display</button></Link><br/>
            </div>

            <h6>Time</h6>
            <Clock1 />
            <Clock2 />
        </nav>
    );
}



