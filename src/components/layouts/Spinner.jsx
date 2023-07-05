import React from "react";
import spinner from "../layouts/assets/spinner.gif";

function Spinner() {
	return (
		<div className="w-100 mt-20">
			<img
				width={100}
				src={spinner}
				className="text-center mx-auto"
				alt="Loading..."
			/>
		</div>
	);
}

export default Spinner;
