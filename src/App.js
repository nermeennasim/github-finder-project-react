import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<NavBar />
				<main className="container mx-auto px-3 pb-12">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/notfound" element={<NotFound />}></Route>
						<Route path="/*" element={<NotFound />}></Route>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
