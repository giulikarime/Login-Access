import { AtSign, LockKeyhole, LogIn, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function UserCard({type_of_access}) {

    const navigate = useNavigate();

    const isLogin = type_of_access === 'Login';

    const inputsSignup = 
        [{label: 'Username',icon: <AtSign></AtSign>},
        {label:'Email',icon: <UserRound></UserRound>},
        {label: 'Password',icon: <LockKeyhole></LockKeyhole>},
        {label: 'Confirm Password',icon: <LockKeyhole></LockKeyhole>}];
    const inputsLogin = 
        [{label:'Email',icon: <UserRound></UserRound>},
        {label: 'Password',icon: <LockKeyhole></LockKeyhole>}];

    const inputs = isLogin ? inputsLogin : inputsSignup;

    return (
        <div>

            <div>
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>
                <p>{isLogin ? "Still don't have an account?" : "Alredy have an account?"} 
                <button onClick={()=>navigate(isLogin ? '/signup' : '/')}>{isLogin ? "Sign-up": "Login"}</button></p>
            </div>

            <form action="">

                {inputs.map((item,index)=>(
                    <div key={index} className="fields">
                        <label htmlFor="">{item.icon}{item.label}</label>
                        <input type="text" name="" id="" />
                    </div>
                ))}

                <button>Submit <LogIn></LogIn></button>

            </form>
        </div>
    );
}

export default UserCard;
