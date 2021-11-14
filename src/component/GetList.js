import axios from "axios";
import { useEffect, useState } from "react";

export default function GetList(){
	const [headers, setHeader] = useState([]);
	const [slides, setSlide] = useState([]);
	
	useEffect(() => {
		axios.get(`http://52.79.159.99:8080/api/header`)
		.then(({ data }) => setHeader(data));

		axios
		.get(`http://52.79.159.99:8080/api/slide`)
		.then(({ data }) => setSlide(data))
	}, []);

	return(
		<>
			<h2>Header</h2>
			<ul>
				{headers.map((header, index) => (
					<li key={index}>
						{header.header}
					</li>
				))}
			</ul>

			<h2>Slide</h2>
			<ul>
				{slides.map((slide, index) => (
					<li key={index}>
						{slide.slide}
					</li>
				))}
			</ul>
		</>
	);
}