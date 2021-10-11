import React from 'react';
import Board from './components/Board';
import { Header } from './components/Header';
import './tailwind.output.css';

function App() {
	return (
		<div>
			<Header />
			<Board />
		</div>
	);
}

export default App;
