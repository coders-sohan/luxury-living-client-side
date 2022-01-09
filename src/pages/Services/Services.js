import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Service from "../../components/Service/Service";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("https://mysterious-beyond-20514.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<>
			<Navbar />
			<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-20">
				<div className="text-center">
					<p>Services</p>
					<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-16">
						We're an agency tailogray to all <br /> clients' needs that always
						delivers
					</h1>
				</div>
				<div className="flex flex-wrap">
					{services.map((service) => (
						<Service key={service._id} service={service} />
					))}
				</div>
			</div>
			<div className="bg-gray-50">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<h2 className="text-lg md:text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block my-3">Do you want to place a custom order?</span>
						<span className="block my-3 text-gray-800">
							Just leave a message for us
						</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
							>
								Contact now
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Services;
