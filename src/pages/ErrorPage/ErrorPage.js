import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<div className="container mx-auto px-3 py-10">
				<h1 className="text-5xl text-red-500 mb-10">404 Error!</h1>
				<Link to="/" className="underline">
					Go to homepage
				</Link>
			</div>
		</>
	);
};

export default ErrorPage;
