import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth = false }) => {
	const className = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";

	return (
		<div className={`w-full bg-glass rounded-lg px-8 py-6`}>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{repos.map((repo) => (
					<Repo key={repo.id} repo={repo} />
				))}
				{repos.length === 0 && (
					<p className='flex items-center justify-center h-32 col-span-full'>No repos found</p>
				)}
			</div>
		</div>
	);
};
export default Repos;
