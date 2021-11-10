import Header from "../Header";
import React, { Component } from "react";
import api from "../API/api";
import Cards from "../cards";

class Top extends Component {
  state = {
    Top: [],
  };
  async componentDidMount() {
    const response = await api.get("/api/top");

    this.setState({ Top: response.data });
  }
  render() {
    const { Top } = this.state;
    console.log("====================================");
    console.log(this.state);
    console.log("====================================");
    return (
      <>
        <Header />

        <article className="w-full h-auto flex flex-col align-center justify-center pb-20">
          <h1
            className="m-auto py-6 text-2xl font-bold tracking-widest
            md:text-3xl
          "
          >
            ' TOP '
          </h1>
          <h3
            className="w-96 mx-auto py-2 tracking-wide font-normal text-center
            md:w-5/6
          "
          >
            Acha que ta faltando aquela peita de respeito? aqui você vai encontrar aquela que você tanto procura!
          </h3>
          <p className="pt-8 pl-10 text-quickSilver">
            Resultados: {Top.length}
          </p>
        </article>

        <article
          className="grid grid-cols-2 w-12/12 m-auto rounded-xl mb-20
        md:grid-cols-4 md:w-10/12"
        >

            {Top.map(top => (
                <Cards
                    length={top.length}
                    index={top.produto_id}
                    nomeProduto={top.nome_produto}
                    id={top.produto_id}
                    preco={top.preco_produto}
                    imagem={top.imagem}
                />
            ))}

        </article>
      </>
    );
  }
}

export default Top;
