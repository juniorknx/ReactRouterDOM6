import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { QuemSomos } from './pages/Sobre';
import { Contato } from "./pages/Contato";
import { LoginPage } from "./pages/Login";
import { ErrorPage } from "./pages/404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Produtos } from "./pages/Produtos/Produtos";

function App() {
  return (
    <>
      <BrowserRouter>
            <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/produtos/*" element={<Produtos />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sobre" element={<QuemSomos />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
