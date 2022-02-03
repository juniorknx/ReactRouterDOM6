import { useParams, Route, Routes, Link } from "react-router-dom"
import { Head } from "../../Head";
import { ProdutoAvaliacao } from "../ProdutoAvaliacao/ProdutoAvaliacao";
import { ProdutoCustomizado } from "../ProdutoCustomizado/ProdutoCustomizado";
import { ProdutoDescricao } from "../ProdutoDesc/ProdutoDescricao";

export function Produtos(){

    const params = useParams();
    <Head title="Produtos" />
    
    return (
        <div>
            <h1>Produto: {params.id}</h1>
            <nav>
                <Link to="">Descricao</Link>
                <Link to="avaliacao">Avaliacao</Link>
                <Link to="customizado">Customizado</Link>
            </nav>
            <Routes>
                <Route path="/" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="customizado" element={<ProdutoCustomizado />} />
            </Routes>
        </div>
    )
}