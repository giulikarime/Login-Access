import BackgroundGradient from "../../components/BackgroundGradient/BackgroundGradient";
import UserCard from "../../components/UserCard/UserCard";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import './signup.css'

function Signup(){
    return(
        <>
            <BackgroundGradient/>
            <div className="principal-container-signup">
                <WelcomeCard/>
                <UserCard
                    type_of_access='Signup'
                />
            </div>
        </>
    );
}

export default Signup;