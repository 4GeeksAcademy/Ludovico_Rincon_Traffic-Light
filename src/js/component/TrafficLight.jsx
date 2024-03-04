import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("green");
	return (
		<div>
			<div className="support bg-dark"></div>
			<div className="container">
				<div className="container bg-dark p-3 rounded">
					<div
						className={
							"light red " + (color === "red" ? "selected" : "")
						}
						onClick={() => setColor("red")}></div>
					<div
						className={
							"light yellow " + (color === "yellow" ? "selected" : "")
						}
						onClick={() => setColor("yellow")}></div>
					<div
						className={
							"light green " + (color === "green" ? "selected" : "")
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
		</div>

	);
};

export default TrafficLight;
