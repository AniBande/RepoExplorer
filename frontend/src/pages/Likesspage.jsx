import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { formatDate } from "../utils/functions";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const LikessPage = () => {
	const [likes, setLikes] = useState([]);

	useEffect(() => {
		const getLikes = async () => {
			try {
				const res = await fetch("/api/users/likes", { credentials: "include" });
				const data = await res.json();
				if (data.error) throw new Error(data.error);

				setLikes(data.likedBy);
			} catch (error) {
				toast.error(error.message);
			}
		};
		getLikes();
	}, []);
	console.log("likes:", likes);

	const dummyData = [
		{
			username: "user1",
			avatarUrl: "https://via.placeholder.com/40",
			likedDate: "2024-01-27T10:30:00Z"
		},
		{
			username: "user2",
			avatarUrl: "https://via.placeholder.com/40",
			likedDate: "2024-01-28T11:00:00Z"
		},
		{
			username: "user3",
			avatarUrl: "https://via.placeholder.com/40",
			likedDate: "2024-01-29T11:30:00Z"
		},
		{
			username: "user4",
			avatarUrl: "https://via.placeholder.com/40",
			likedDate: "2024-02-20T12:00:00Z"
		},
		{
			username: "user5",
			avatarUrl: "https://via.placeholder.com/40",
			likedDate: "2024-02-20T12:30:00Z"
		}
	];



	return (
		<>
			{/* <br />
			<span>*dummy data is maped here </span>
			<br />
			<a href="/likesspage" className="text-blue-500">Click here for real data</a>
			<br /> <br /> */}
			<div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
				<table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
					<thead className='text-xs uppercase bg-glass'>
						<tr>
							<th scope='col' className='p-4'>
								<div className='flex items-center'>No</div>
							</th>
							<th scope='col' className='px-6 py-3'>
								Username
							</th>
							<th scope='col' className='px-6 py-3'>
								Action
							</th>
							<th scope='col' className='px-6 py-3'>
								Date
							</th>
						</tr>
					</thead>
					{/* <tbody>
					{likes.map((user, idx) => (
						<tr className='bg-glass border-b' key={user.username}>
							<td className='w-4 p-4'>
								<div className='flex items-center'>
									<span>{idx + 1}</span>
								</div>
							</td>
							<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
								<img className='w-10 h-10 rounded-full' src={user.avatarUrl} alt='User Avatar' />
								<div className='ps-3'>
									<div className='text-base font-semibold'>{user.username}</div>
								</div>
							</th>
							
							<td className='px-6 py-4'>
								<div className='flex items-center'>
									<FaHeart size={22} className='text-red-500 mx-2' />
									Liked your profile
								</div>
							</td>
							<td className='px-6 py-4'>{formatDate(user.likedDate)}</td>
						</tr>
					))}
				</tbody> */}
				</table>

				<div className='flex flex-col gap-4'>
					{likes.map((user, idx) => (
						<div className='flex flex-col gap-4'>
							 {likes.map((user, idx) => ( 
							// {dummyData.map((user, idx) => (
								<div
									className='bg-black border border-gradient rounded-full p-4 flex items-center justify-between'
									key={user.username}
								>
									<div className='flex items-center'>
										<NotificationsNoneIcon className='text-white' />
									</div>
									<div className='flex items-center px-6 py-4 whitespace-nowrap'>
										<img className='w-10 h-10 rounded-full' src={user.avatarUrl} alt='User Avatar' />
										<div className='ps-3'>
											<div className='text-base font-semibold text-white'>{user.username}</div>
										</div>
									</div>
									<div className='px-6 py-4'>
										<div className='flex items-center text-white'>
											<FaHeart size={22} className='text-red-500 mx-2' />
											Liked your profile
										</div>
									</div>
									<div className='px-6 py-4 text-white'>{formatDate(user.likedDate)}</div>
								</div>
							))}
						</div>
					))}
				</div>


			</div>
		</>

	);
};
export default LikessPage;
