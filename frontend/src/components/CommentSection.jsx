import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const CommentSection = ({ userProfile }) => {
	const { authUser } = useAuthContext();
	const [commentText, setCommentText] = useState("");

	const handleCommentSubmit = async (e) => {
		e.preventDefault();
		if (!commentText) return;

		try {
			const res = await fetch(`/api/users/comment/${userProfile.login}`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ commentText }),
			});

			const data = await res.json();
			if (data.error) throw new Error(data.error);

			toast.success(data.message);
			setCommentText("");
			// Optionally, you could refresh the comment list here if you want to show the new comment immediately
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className="mt-4">
			<h3 className="text-lg font-semibold mb-2">Comments</h3>
			{userProfile.comments && userProfile.comments.length > 0 ? (
				<div className="space-y-2">
					{userProfile.comments.map((comment, index) => (
						<div key={index} className="bg-gray-100 rounded-md p-2">
							<p className="font-bold">{comment.username}</p>
							<p>{comment.commentText}</p>
							<p className="text-xs text-gray-500">{new Date(comment.commentDate).toLocaleString()}</p>
						</div>
					))}
				</div>
			) : (
				<p>No comments yet.</p>
			)}

			{authUser && authUser.username !== userProfile.login && (
				<form onSubmit={handleCommentSubmit} className="mt-4">
					<textarea
						className="w-full p-2 border rounded-md"
						placeholder="Add a comment..."
						value={commentText}
						onChange={(e) => setCommentText(e.target.value)}
						required
					></textarea>
					<button
						type="submit"
						className="mt-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default CommentSection;
