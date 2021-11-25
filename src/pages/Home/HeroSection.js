import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<>
			<div className="bg-gray-50">
				<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-16">
					<div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4">
						{/*backup: grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 */}
						<div>
							<div>
								<h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-6 lg:mb-8">
									We Build
									<br />
									Your dream
								</h1>
								<p className="mb-6 md:mb-6 lg:mb-8">
									Online Real Estate Agency, the modern way to sell your own
									home,
									<br className="hidden md:block" /> You can use Griffin
									Residential to market your property
								</p>
								<div>
									<Link
										className="inline-flex items-center justify-center w-36 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
										aria-label="Our Projects"
										title="Our Projects"
										to="/projects"
									>
										Booking
									</Link>
								</div>
							</div>
						</div>
						<div className="mt-10 md:mt-0 lg:mt-0">
							<div>
								<img
									className="object-cover hero-img mx-auto"
									src="https://luxury-living-website.netlify.app/photo/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash%201.png"
									alt="hero-img"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
