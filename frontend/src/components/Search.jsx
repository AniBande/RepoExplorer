import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ onSearch }) => {
	const [username, setUsername] = useState("");

	return (
		<form className="max-w-xl mx-auto p-2" onSubmit={(e) => onSearch(e, username)}>
			{/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
				Search
			</label> */}
			<div className="relative flex items-center">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<IoSearch className="w-5 h-5 text-white-500" />
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-full p-4 pl-10 text-sm rounded-full mx-2 bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent"
					placeholder="i.e. johndoe"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					type="submit"
					className="animated-button rounded-r-lg border-l-0 p-4"
				>Search
					<svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
						></path>
					</svg>
					<span className="text">Search</span>
					<span className="circle"></span>
					<svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
						></path>
					</svg>
				</button>
			</div>
		</form>
	);
};

export default Search;
