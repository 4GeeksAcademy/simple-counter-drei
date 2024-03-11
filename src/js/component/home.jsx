import React from "react";
import { useEffect, useState } from "react";
//include images into your bundle
import { SimpleCounter } from "./SimpleCounter";

//create your first component
const Home = () => {

	const [counter, setCounter] = useState(0);

	useEffect (() => {
		const interval = setInterval(() => {
			setCounter (counter => counter + 1)
		}, 1000);
		console.log()

		return () => clearInterval(interval)
	},[counter]);

	function calculateSeconds (aCounter, placeValue) {
		return Math.floor(aCounter /placeValue) % 10
	}

	return (
		<div className="container-fluid">
			<SimpleCounter 
			thousandDigit = {calculateSeconds(counter, 1000)}
			hudredsDigit = {calculateSeconds(counter, 100)}
			tensDigit = {calculateSeconds(counter, 10)}
			onesDigit = {calculateSeconds(counter, 1)}
			 />
		</div> 
	);
};

export default Home;
