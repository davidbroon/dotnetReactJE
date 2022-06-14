import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/pages/home/Home';
//import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<div className='appContainer'>
					<Routes>
						<Route path='/' element={<Home />} />
						{/* <Route path="/dashboard" element={<Dashboard />} /> */}
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
