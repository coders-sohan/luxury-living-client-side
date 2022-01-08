import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
	return (
		<>
			<div className="text-center">
				<p>Features</p>
				<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-10">
					All of our available features <br /> which we provided to our customer
				</h1>
			</div>
			<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</svg>
						<span className="title-font font-medium">
							24 hours and 7 days support
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</svg>
						<span className="title-font font-medium">Expert men power</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</svg>
						<span className="title-font font-medium">
							Give our customers best services
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</svg>
						<span className="title-font font-medium">
							Give discount to our regular customer
						</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</svg>
						<span className="title-font font-medium">Friendly behavior</span>
					</div>
				</div>
				<div className="p-2 sm:w-1/2 w-full">
					<div className="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</svg>
						<span className="title-font font-medium">
							Always committed for good service
						</span>
					</div>
				</div>
			</div>
			<div className="mt-12 mx-auto text-center">
				<Link
					to="/contact"
					className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg"
				>
					Contact us
				</Link>
			</div>
		</>
	);
};

export default Features;
