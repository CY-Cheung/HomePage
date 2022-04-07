import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';

import HeaderBar from './app/HeaderBar.jsx';
import SideMenu from './app/SideMenu.jsx';
import Main from './app/Main.jsx';


export default function App() {
	return (
		<React.StrictMode>
			<Router>
				<div className="App">
					<div className="row">
						<HeaderBar />
						<SideMenu />
						<Main />
					</div>
				</div>
			</Router>
		</React.StrictMode>
	);
}