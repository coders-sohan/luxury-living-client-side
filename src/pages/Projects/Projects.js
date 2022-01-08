import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import Features from "./Features";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("https://mysterious-beyond-20514.herokuapp.com/projects")
			.then((res) => res.json())
			.then((data) => setProjects(data.slice(0, 3)));
	}, []);

	return (
		<>
			<Navbar />
			<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-20">
				<div className="text-center">
					<p>Projects</p>
					<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-10">
						Discover the latest Interior Design <br /> available today
					</h1>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects.map((project) => (
						<Project key={project._id} project={project} />
					))}
				</div>
			</div>
			<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-20">
				<Features />
			</div>
			<Footer />
		</>
	);
};

export default Projects;
