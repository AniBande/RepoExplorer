import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import LikessPage from "./pages/Likesspage";

import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";
import ExtraPage from "./pages/ExtraPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
	const { authUser, loading } = useAuthContext();
	console.log("Authenticated user:", authUser);

	if (loading) return null;

	return (
	<div className="flex justify-center items-center mt-4 mb-4">
	{/* <div className="flex justify-center items-center min-h-screen bg-black p-4"> */}
  <div className="w-full max-w-5xl bg-black p-4 m-4">
    <ResponsiveAppBar />
    <div className="text-white mx-auto transition-all duration-300 flex-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
        <Route path="/explore" element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
        <Route path="/likes" element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} />
        <Route path="/likess" element={authUser ? <LikessPage/> : <Navigate to={"/login"} />} />
        <Route path="/extra" element={<ExtraPage />} />
      </Routes>
      <Toaster />
    {/* </div> */}
  </div>
  </div>

</div>

	);
}

export default App;
