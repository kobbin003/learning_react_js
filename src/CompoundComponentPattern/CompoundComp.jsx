import React from "react";
import { useBearStore } from "../zustandStore";
/** 
 * //* normally I would do this:
 * function CompoundComp({ msg, callToAction }) {
	return (
		<>
			<p>{msg}</p>
			<button>{callToAction}</button>
		</>
	);
}
*/

//* In this Compound Component pattern:
//* Component is open for "extension" but closed for "modification"
function CompoundComp({ children }) {
	return <>{children}</>;
}

const P = ({ children }) => <p>{children}</p>;

const Button = ({ children }) => {
	const state = useBearStore();
	const handleClick = () => {
		state.increasePopulation();
	};
	return <button onClick={handleClick}>{children}</button>;
};
CompoundComp.P = P;
CompoundComp.Button = Button;
export default CompoundComp;
