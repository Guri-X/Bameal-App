import { Home } from "./components/Home";

function App() {
	return (
		<div>
			<div className="navbar bg-base-100">
				<span className="btn btn-ghost text-xl">Ba-meal Suggestions</span>
			</div>

			<Home />
		</div>
	);
}

export default App;
