import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<div
				onClick={() => setExpanded(!expanded)}
				className="flex justify-between p-5 my-5 rounded-md single-question cursor-pointer transition duration-300 ease-in-out hover:text-gray-600"
			>
				<h4 className="text-base md:text-lg lg:text-2xl">{title}</h4>
				<button className="text-gray-700 text-xl md:text-2xl lg:text-3xl">
					{expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			{expanded && (
				<p className="p-5 -mt-5 rounded-b-md bg-gray-900 text-white text-lg text-justify">
					{info}
				</p>
			)}
		</>
	);
};

export default Question;
