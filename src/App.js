import './App.css';
import { Signin } from './pages/login/Signin';
import { Signup } from './pages/login/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</>
	);
}

export default App;
