import { useNavigate } from "react-router-dom"
import { Head } from "../../Head";

export function LoginPage(){

    const navigate = useNavigate();
    
    <Head title="Login" />

    function handleLogin(){
        navigate('/contato');
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}