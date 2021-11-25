import React from "react";

const Project = (props) => {
	const { name, location, img } = props.project;

	return (
		<>
			<div className="p-4 lg:w-1/3 md:w-1/2 w-full">
				<div className="h-full overflow-hidden">
					<img
						className="lg:h-96 md:h-72 shadow w-full object-cover object-center rounded-md"
						src={img}
						alt={name}
					/>
					<div className="px-6 py-3 text-center">
						<h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
							{name}
						</h1>
						<h1 className="flex justify-center items-center title-font text-sm font-medium text-gray-900">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 mr-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</span>
							<span>{location}</span>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
