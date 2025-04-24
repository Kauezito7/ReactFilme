import './App.css';
import CadastroFilme from './pages/cadastroFilme/CadastroFilme.jsx'
// import Login from './pages/login/Login.jsx';
// Responsavel pela criacao de telas
function App() {
  return (
    <>
    {/* Chamar as paginas !! */}
    {/* <Login/> */}
    <CadastroFilme/>
    </>

  );
}
// serve para exportar uma única entidade (classe, função, objeto, etc.) de um módulo como a exportação padrão
export default App;
