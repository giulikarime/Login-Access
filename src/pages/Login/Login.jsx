import BackgroundGradient from "../../components/BackgroundGradient/BackgroundGradient";
import UserCard from "../../components/UserCard/UserCard";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import './login.css'

function Login(){
    return(
        <>
            <BackgroundGradient/>
            <div className="principal-container-login">
                <WelcomeCard/>
                <UserCard
                    type_of_access='Login'
                />
            </div>
        </>
    );
}

export default Login;