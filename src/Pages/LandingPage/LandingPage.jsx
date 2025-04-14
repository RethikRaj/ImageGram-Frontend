import { Link } from "react-router-dom";
const LandingPage = ()=>{
    return (
        <div>
            <h1>LandingPage</h1>
            <p>New to Imagegram : <Link to={"/signup"}>Sign up</Link></p>
            <p>Already have an account : <Link to={"/signin"}>Sign in</Link></p>
        </div>
    )
}

export default LandingPage;