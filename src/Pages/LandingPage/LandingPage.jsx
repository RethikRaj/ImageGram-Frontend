import { Link } from "react-router-dom";
import LandingPageImage from "../../assets/images/LandingPageImage.png";

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen gap-16 ">
            <div className="w-[500px] max-w-full">
                <img src={LandingPageImage} alt="LandingPageImage" className="rounded-3xl shadow-2xl" />
            </div>

            <div className="flex flex-col gap-6 max-w-md">
                <h1 className="text-5xl font-bold text-pink-300 drop-shadow-md">Imagegram</h1>
                <p className="text-lg text-pink-100">Capture, Share, and Inspire. Welcome to your new favorite image-sharing platform.</p>
                <Link 
                    to="/signup"
                    className="bg-pink-500 hover:bg-pink-600 transition-colors duration-200 text-white text-center py-3 px-6 rounded-xl font-semibold shadow-md"
                >
                    New to Imagegram: Sign Up
                </Link>
                <Link 
                    to="/signin"
                    className="bg-transparent border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-500 transition-colors duration-200 text-white text-center py-3 px-6 rounded-xl font-semibold shadow-md"
                >
                    Already have an account: Sign In
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
