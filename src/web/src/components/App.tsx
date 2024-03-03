import React from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { Outlet } from "react-router-dom";

debugData([
	{
		action: "setVisible",
		data: {
			visible: true,
			route: "/characters/list",
			data: {
				characters: [
					{
						citizenId: 1134252,
						license: "license:fcb",
						firstName: "John",
						lastName: "Doe",
						dob: 1647340149,
						height: 160,
						sex: "m",
						nationality: "Netherlands",
						backstory: "No",
					},
				],
			},
		},
	},
]);



const App: React.FC = () => {
	return (
		<div className="h-full w-full p-20 scrollbar-hide">
			<Outlet />
		</div>
	);
};

export default App;
