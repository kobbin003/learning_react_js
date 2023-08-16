import { useBearStore } from "../zustandStore";
import CompoundComp from "./CompoundComp";
function index() {
	const state = useBearStore();

	return (
		<CompoundComp>
			<CompoundComp.P>No. of Bears: {state.bears}</CompoundComp.P>
			<CompoundComp.Button>Click</CompoundComp.Button>
		</CompoundComp>
	);
}

export default index;
