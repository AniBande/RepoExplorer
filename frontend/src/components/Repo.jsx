import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/functions";
import { PROGRAMMING_LANGUAGES } from "../utils/constants";
import toast from "react-hot-toast";

const Repo = ({ repo }) => {
	const formattedDate = formatDate(repo.created_at);

	const handleCloneClick = async (repo) => {
		try {
			await navigator.clipboard.writeText(repo.clone_url);
			toast.success("Repo URL cloned to clipboard");
		} catch (error) {
			toast.error("Clipboard write failed. ");
		}
	};

	return (
		// <div className='bg-black shadow-md rounded-lg p-6 mx-2 w-full'>
		<div className='bg-blue-500 shadow-md rounded-lg p-6 mx-2 w-full'>

			<li className='relative list-none'>
				{/* <span
					className='absolute flex items-center justify-center w-8 h-8 bg-blue-100
    				rounded-full ring-8 ring-white -top-4 left-4'
				>
					<FaCodeBranch className='w-5 h-5 text-blue-800' />
				</span> */}
				<div className='flex gap-2 items-center flex-wrap mt-4'>
					<a
						href={repo.html_url}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 text-lg font-semibold'
					>
						{repo.name}
					</a>
					<span
						className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
        	py-0.5 rounded-full flex items-center gap-1'
					>
						<FaRegStar /> {repo.stargazers_count}
					</span>
					<span
						className='bg-purple-100 text-purple-800 text-xs font-medium
         	px-2.5 py-0.5 rounded-full flex items-center gap-1'
					>
						<FaCodeFork /> {repo.forks_count}
					</span>
					<span
						onClick={() => handleCloneClick(repo)}
						className='cursor-pointer bg-green-100 text-green-800 text-xs
        	font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
					>
						<FaCopy /> Clone
					</span>
				</div>

				<time
					className='block my-1 text-xs font-normal leading-none
     	text-gray-200'
				>
					Released on {formattedDate}
				</time>
				<p className='mb-4 text-base font-normal text-black'>
					{repo.description ? repo.description.slice(0, 500) : "No description provided"}
				</p>
				{PROGRAMMING_LANGUAGES[repo.language] ? (
					<img src={PROGRAMMING_LANGUAGES[repo.language]} alt='Programming language icon' className='h-8' />
				) : null}
			</li>
		</div>
	);
};
export default Repo;
