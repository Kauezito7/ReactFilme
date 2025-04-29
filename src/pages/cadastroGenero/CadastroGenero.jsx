
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";



const  CadastroGenero = () => {
    return(
        <>
        <Header/>
        <main>
          <Cadastro titulo = "Cadastro de Genero"  visibilidade = "none" placeholder = "Genero"/>
          
          <Lista titulo = "Lista de Genero" visibilidade = "none"/>
        </main>
        <Footer/>
        </>
      
    )
}
export default CadastroGenero;
