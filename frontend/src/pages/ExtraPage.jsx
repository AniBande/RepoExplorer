import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const ExtraPage = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-black p-4">
				<ResponsiveAppBar />
				<h1 className="text-2xl font-bold mb-4 text-white self-start">Hi!</h1>
				{/* Add other components or content here */}
		</div>
		
	);
};
export default ExtraPage;
