import { Link } from "react-router-dom";

export function Header(){
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/login">Login</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    )
}