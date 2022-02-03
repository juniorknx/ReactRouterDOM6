import { Link } from "react-router-dom"

export function ErrorPage(){
    return (
        <>
        <h1>PÁGINA NÃO ENCONTRADA - 404</h1>
        <Link to="/">Retornar</Link>
        </>
    )
}