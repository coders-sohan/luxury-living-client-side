import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route exact path="*">
						<ErrorPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
