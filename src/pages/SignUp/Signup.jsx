import BackgroundGradient from "../../components/BackgroundGradient/BackgroundGradient";
import UserCard from "../../components/UserCard/UserCard";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

function Signup(){
    return(
        <>
            <BackgroundGradient/>
            <WelcomeCard/>
            <UserCard
                type_of_access='Signup'
            />
        </>
    );
}

export default Signup;