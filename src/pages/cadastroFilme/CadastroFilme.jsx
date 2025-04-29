import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro titulo = "Cadastro de Filme" placeholder = "Filme"/>
            
            <Lista titulo = "Lista do Filme"/>
        </main>
        <Footer/>
        </>
    )
}

export default CadastroFilme;