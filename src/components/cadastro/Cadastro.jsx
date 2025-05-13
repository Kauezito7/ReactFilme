import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return(
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
            <h1>{props.titulo}</h1>
            <hr/>
            <div className="campos_cadastro">
                <div className="campo_cad_nome">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text"  name="nome" placeholder={`Digite o nome do ${props.placeholder}`} value={props.valorInput}
                    // ao mudar o input algo acontece: 
                    // Atualizar o estado do pai ao digitar 
                    // taregt esta indo buscar o valor do "e"//
                    onChange={(e) => props.setValorInput(e.target.value)} />
                </div>
                <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                    <label htmlFor="genero">Genero:</label>
                    <select name="" id="" >
                        /*disabled: desabilita a opcao de selecionar */
                        /*selected: faz com a opcao ja venha selecionada */
                        <option value="" disabled selected>Selecione</option>
                        <option value="">op 1</option>
                        <option value="">op 2</option>
                        <option value="">op 3</option>
                    </select>
                </div>
                <Botao nomeDoBotao ="Cadastrar"/>
            </div>
            </form>
        </section>
    )
}

export default Cadastro;