import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-16">
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
							About Us
						</h1>
						<p className="font-normal text-base leading-6 text-gray-600 md:mb-0 mb-5">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum.In the first place we have granted to
							God, and by this our present charter confirmed for us and our
							heirs forever that the English Church shall be free, and shall
							have her rights entire, and her liberties inviolate; and we will
							that it be thus observed; which is apparent from
						</p>
					</div>
					<div className="w-full lg:w-8/12 ">
						<img
							className="w-full h-full"
							src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
							alt="A group of People"
						/>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
							Our Story
						</h1>
						<p className="font-normal text-base leading-6 text-gray-600 ">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum.In the first place we have granted to
							God, and by this our present charter confirmed for us and our
							heirs forever that the English Church shall be free, and shall
							have her rights entire, and her liberties inviolate; and we will
							that it be thus observed; which is apparent from
						</p>
					</div>
					<div className="w-full lg:w-8/12 lg:pt-8">
						<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
									alt="Alexa featured Img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
									alt="Alexa featured Img"
								/>
								<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
									Alexa
								</p>
							</div>
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
									alt="Olivia featured Img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
									alt="Olivia featured Img"
								/>
								<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
									Olivia
								</p>
							</div>
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
									alt="Liam featued Img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
									alt="Liam featued Img"
								/>
								<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
									Liam
								</p>
							</div>
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
									alt="Elijah featured img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
									alt="Elijah featured img"
								/>
								<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
									Elijah
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-16">
				<h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
					More Than 10 Years We Provide Service{" "}
					<br className="md:block hidden" />
					in Real State Industry
				</h1>
				<div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
					<img
						src="https://i.ibb.co/KjrPCyW/map.png"
						alt="world map"
						className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
					/>
					<img
						src="https://i.ibb.co/SXKj9Mf/map-bg.png"
						alt="mobile"
						className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
					/>
					<div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
						<p className="text-3xl font-semibold text-gray-800">20K+</p>
						<p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
							Recently Property Listed
						</p>
					</div>
					<div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
						<p className="text-3xl font-semibold text-gray-800">8K+</p>
						<p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
							Active Listening
						</p>
					</div>
					<div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
						<p className="text-3xl font-semibold text-gray-800">15K+</p>
						<p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
							Recently Sold Lands
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
