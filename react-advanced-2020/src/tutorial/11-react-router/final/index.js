import React from "react";
//Step 2: import react router from Package
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// just components that become virtual pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";

// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				{/* path="/" means direct domain. google.com.. */}
				{/* exact path="/" means exact path for nondoubling pages "/ + about" */}
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/people">
					<People />
				</Route>
				<Route path="/person/:id" children={<Person />}></Route>
				{/*_path="\*"_
If I enter an incorrect / unwritten link in all cases I will go to the page specified by me. Used for outputing URL Errors.. means: Matches allways!

We need there **switch** property, for handle switching links into each other
*/}
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default ReactRouterSetup;
