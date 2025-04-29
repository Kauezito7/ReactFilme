import "./Lista.css"

//Importacao de imagems:
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
            <h1>{props.titulo}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* cabecalho da tabela: */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="table_cabecalho">
                            {/* th => table head*/}
                            <th>Nome</th>
                            <th style={{display:props.visibilidade}}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        <tr className="item_lista ">
                         <td data-cell= "Nome">Velozes e furiosos</td>
                         <td data-cell= "Genero" style={{display:props.visibilidade}}>Acao</td>
                         <td data-cell= "Editar"><img src={Editar} alt="Caneta" /></td>
                          <td data-cell= "Excluir"><img src={Excluir} alt="Lixeira" /></td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;
