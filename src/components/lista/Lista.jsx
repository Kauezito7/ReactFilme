import "./Lista.css"

//Importacao de imagems:
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = () => {
    return(
        <section className="layout_grid listagem">
            <h1>Lista dos Filmes</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* cabecalho da tabela: */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="cabecalho">
                            {/* th => table head*/}
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        <tr className="item_lista ">
                         <td>Velozes e furiosos</td>
                         <td>Acao</td>
                         <td><img src={Editar} alt="Caneta" /></td>
                          <td><img src={Excluir} alt="Lixeira" /></td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;
