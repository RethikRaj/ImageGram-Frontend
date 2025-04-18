import { Link } from "react-router-dom";
import Header from "../../components/HeaderSignInSignUp/Header";
import useAuthForm from "../../hooks/useAuthForm";

const Signin = ()=>{
    const formik = useAuthForm('signin');
    
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <Header pageName="Signin"/>
            <form onSubmit={formik.handleSubmit} className="flex flex-col border-2 border-white w-1/3 p-7 rounded-xl">
                <div className="m-2 flex flex-col">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                        placeholder="Enter your username"
                    />
                    {formik.errors.username ? <div className="text-red-500">{formik.errors.username}</div> : null}
                </div>
                
                <div className="m-2 flex flex-col">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                        placeholder="Enter your email"
                    />
                    {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
                </div>

                <div className="m-2 flex flex-col">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                        placeholder="Enter your password"
                    />
                    {formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
                </div>
                <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded m-2 cursor-pointer">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/signup" className="text-pink-500 ">Sign up</Link></p>
        </div>
        
    );
}

export default Signin;