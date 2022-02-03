import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { QuemSomos } from './pages/Sobre';
import { Contato } from "./pages/Contato";
import { ErrorPage } from "./pages/404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/sobre" element={<QuemSomos />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas;