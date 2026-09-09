import { AtSign, LockKeyhole, LogIn, Mail, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import './user_card.css'

function UserCard({type_of_access}) {

    const navigate = useNavigate();

    const isLogin = type_of_access === 'Login';

    const inputsSignup = 
        [{label: 'Username',icon: <UserRound></UserRound>, type: 'text'},
        {label:'Email',icon: <Mail></Mail>, type: 'email'},
        {label: 'Password',icon: <LockKeyhole></LockKeyhole>, type: 'password'},
        {label: 'Confirm',icon: <LockKeyhole></LockKeyhole>, type: 'password'}];
    const inputsLogin = 
        [{label:'Email',icon: <Mail></Mail>, type: 'email'},
        {label: 'Password',icon: <LockKeyhole></LockKeyhole>, type: 'password'}];

    const inputs = isLogin ? inputsLogin : inputsSignup;

    return (
        <div className="principal-container-usercard">

            <div className="top-container">
                <h2>{isLogin ? 'Login' : 'Signup'}</h2>
                <p>{isLogin ? "Still don't have an account?" : "Alredy have an account?"} 
                    <button onClick={()=>navigate(isLogin ? '/signup' : '/')}>{isLogin ? "Sign-up": "Login"}</button></p>
            </div>

            <form action="">

                <div className="input-group">
                    {inputs.map((item,index)=>(
                        <div key={index} className="fields">
                            <input className="input-style" type={item.type} name="" id="" required />
                            <label className="input-label" htmlFor="">{item.icon}
                                <span>{item.label}</span>
                            </label>
                        </div>
                    ))}
                </div>

                <button className="btn_form">Submit <LogIn></LogIn></button>

            </form>
        </div>
    );
}

export default UserCard;
