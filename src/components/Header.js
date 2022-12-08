import React from "react";
const Header = ({ heading }) => {
	return (
		<header>
			<h1>
				{heading} <br />
				Shopping List
			</h1>
		</header>
	);
};

export default Header;
