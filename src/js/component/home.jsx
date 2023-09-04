import React from "react";
import Nav from "./nav.jsx";
import Container from "./container.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home =()=>{
	return (
		<>
			<Nav/>
			<Container/>
			<Footer/>
		</>
	);
};

export default Home;
