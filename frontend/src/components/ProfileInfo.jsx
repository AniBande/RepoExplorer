import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "../utils/functions";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({ userProfile }) => {
	const memberSince = formatMemberSince(userProfile?.created_at);

	return (
		<div className='flex flex-col lg:flex-row gap-4 justify-start items-start w-full'>
			<div className='bg-glass rounded-lg p-4 w-full lg:w-2/3'>
				<div className='flex gap-3 items-center'>
					<a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>
					<div className='flex gap-2 items-center flex-col'>
						<LikeProfile userProfile={userProfile} />
						<a
							href={userProfile?.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaEye size={16} />
							View on Github
						</a>
					</div>
				</div>
				{userProfile?.bio && (
					<div className='flex items-center gap-2'>
						<TfiThought />
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				)}
				{userProfile?.location && (
					<div className='flex items-center gap-2'>
						<IoLocationOutline />
						{userProfile?.location}
					</div>
				)}
				{userProfile?.twitter_username && (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<FaXTwitter />
						{userProfile?.twitter_username}
					</a>
				)}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Member since</p>
					<p className=''>{memberSince}</p>
				</div>
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Email address</p>
						<p className=''>{userProfile.email}</p>
					</div>
				)}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Full name</p>
						<p className=''>{userProfile?.name}</p>
					</div>
				)}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Username</p>
					<p className=''>{userProfile?.login}</p>
				</div>
			</div>

			<div className='flex flex-col gap-2 w-full lg:w-1/3'>
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Followers: {userProfile?.followers}</p>
				</div>
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowLine className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Following: {userProfile?.following}</p>
				</div>
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
				</div>
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public gists: {userProfile?.public_gists}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;



// import { IoLocationOutline } from "react-icons/io5";
// import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
// import { FaXTwitter } from "react-icons/fa6";
// import { TfiThought } from "react-icons/tfi";
// import { FaEye } from "react-icons/fa";
// import { formatMemberSince } from "../utils/functions";
// import LikeProfile from "./LikeProfile";
// import CommentSection from "./CommentSection"; // Import CommentSection

// const ProfileInfo = ({ userProfile }) => {
// 	const memberSince = formatMemberSince(userProfile?.created_at);

// 	return (
// 		<div className='flex flex-col lg:flex-row gap-4 justify-start items-start w-full'>
// 			<div className='bg-glass rounded-lg p-4 w-full lg:w-2/3'>
// 				<div className='flex gap-3 items-center'>
// 					<a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
// 						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
// 					</a>
// 					<div className='flex gap-2 items-center flex-col'>
// 						<LikeProfile userProfile={userProfile} />
// 						<a
// 							href={userProfile?.html_url}
// 							target='_blank'
// 							rel='noreferrer'
// 							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
// 						>
// 							<FaEye size={16} />
// 							View on Github
// 						</a>
// 					</div>
// 				</div>
// 				{/* Other profile info code */}

// 				{/* Comment Section */}
// 				<CommentSection userProfile={userProfile} />
// 			</div>

// 			<div className='flex flex-col gap-2 w-full lg:w-1/3'>
// 				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
// 					<RiUserFollowFill className='w-5 h-5 text-blue-800' />
// 					<p className='text-xs'>Followers: {userProfile?.followers}</p>
// 				</div>
// 				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
// 					<RiUserFollowLine className='w-5 h-5 text-blue-800' />
// 					<p className='text-xs'>Following: {userProfile?.following}</p>
// 				</div>
// 				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
// 					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
// 					<p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
// 				</div>
// 				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
// 					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
// 					<p className='text-xs'>Public gists: {userProfile?.public_gists}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ProfileInfo;
