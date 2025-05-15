import { useEffect, useState } from "react";
import api from "../../Services/services";

//Importar o sweet alert:
import Swal from 'sweetalert2'

// import { useEffect } from "react";

// importacao de componentes:
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { Await } from "react-router-dom";


const CadastroGenero = () => {

  //nome do genero
  const [genero, setGenero] = useState("");
  const [listaGenero, setListaGenero] = useState([]);
  const [excluiGenero, setExluirGenero] = useState();


  function alerta(icone, mensagem) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: icone,
      title: mensagem
    });
  }

  // vai acontecer depois que eu clicar no botao cadastrar
  async function cadastrarGenero(e) {
    e.preventDefault();
    //Verificar se o input esta vindo vazio
    if (genero.trim() != "") {
      //try => tentar(o esperado)
      //catch => pega a exceção
      try {
        //cadastrar um gênero: post
        await api.post("genero", { nome: genero })
        alerta("success", "Cadastro realizado com sucesso!")
        setGenero("")
      }
      catch (error) {
        alerta("error", "Erro! Entre em contato com o suporte!")
        console.log(error);
      }
    }
    else {
      alerta("error", "Erro! Campo vazio!")
    }

  }

  //sicrono => acontece simultaneamente
  //assicrono => Esperar algo/resposta para ir para outro bloco do
  async function listarGenero() {
    try {
      //await -> Aguarde ter uma resp da solicitacao
      const resposta = await api.get("genero");
      // console.log(resposta.data[3].idGenero)
      setListaGenero(resposta.data);
    } catch (error) {
      console.log(error);

    }
  }

  // funcao de excluir o genero;)

  async function excluirGenero(idDoGenero) {
    try {
      const excluir = await api.delete(`genero/${idDoGenero}`);
      
      // Animacao quando aperta o excluir
      setExluirGenero(excluir.data);
      Swal.fire({
        title: "Voce tem certeza que deseja excluir?",
        text: "Você não poderá reverter isso!",
        icon: "cuidado",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, apague!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deletado!",
            text: "Seu genero foi excluido.",
            icon: "success"
          });

          // --------------------------------- //
        }
      });
    } catch (error) {
      console.log(error);

    }
  }


  //  //Teste
  //   useEffect(() => {
  //     console.log(genero);
  //   },[genero]);
  //   //Fim do teste


  // Assim que a pagina renderizar, o metodo listarGenero() sera chamado
  useEffect(() => {
    listarGenero()

  }, [listarGenero])





  return (
    
    <>
      <Header />
      <main>

        <Cadastro titulo="Cadastro de Genero"
          visibilidade="none"
          placeholder="Genero"


          //Atribuindo a funcao:
          funcCadastro={cadastrarGenero}

          //Atribuindo o valor ao input:
          valorInput={genero}

          //Atribuindo a funcao que atualiza meu genero:
          setValorInput={setGenero}

        />

        <Lista titulo="Lista de Genero"
          visibilidade="none"

          //atribuir para lista, o meu estado atual:
          lista={listaGenero}

          onExcluir={excluirGenero}
        />

      </main>
      <Footer />
    </>

  )
}
export default CadastroGenero;

