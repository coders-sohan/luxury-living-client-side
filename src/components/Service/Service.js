import React from "react";

const Service = (props) => {
	const { name, img, desc, price } = props.service;
	return (
		<>
			<div className="p-4 lg:w-1/3 md:w-1/2 w-full single-service transition ease-linear rounded mb-5">
				<div className="h-full overflow-hidden text-center">
					<div className="rounded-full border-2 inline-block p-5">
						<img
							className="h-16 w-16 mx-auto object-cover object-center rounded-md"
							src={img}
							alt={name}
						/>
					</div>
					<div className="px-6 py-3">
						<h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
							{name}
						</h1>
						<h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
							${price}
						</h1>
                        <p className="font-light text-sm text-justify">{desc}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
