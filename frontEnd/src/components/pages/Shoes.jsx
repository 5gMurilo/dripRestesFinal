import { Component } from "react";

import Header from "../Header";
import Cards from "../cards";
import api from "../API/api";

class Shoes extends Component {
  state = {
    shoes: [],
  };

  async componentDidMount() {
    const response = await api.get("/api/Shoes");

    this.setState({ shoes: response.data });
  }
  render() {
    const { shoes } = this.state;

    console.log("====================================");
    console.log(this.state);
    console.log("====================================");
    return (
      <>
        <Header />

        <main>
          <article className="w-full h-auto flex flex-col align-center justify-center pb-20">
            <h1
              className="m-auto py-6 text-2xl font-bold tracking-widest
            md:text-3xl
          "
            >
              ' SHOES '
            </h1>
            <h3
              className="w-96 mx-auto py-2 tracking-wide font-normal text-center
            md:w-5/6
          ">
            Aqui você vai encontrar os tênis que vão fazer seus pés se sentirem nas nuvens
          </h3>
          <p className="pt-8 pl-10 text-quickSilver">Resultados: {shoes.length}</p>
        </article>

        <article className='grid grid-cols-1 w-11/12 m-auto rounded-xl mb-20 
        2xl:grid-cols-4 xl:w-85
        lg:grid-cols-3 
        md:grid-cols-2 md:align-center md:justify-center
        sm:grid-cols-1'>

            {shoes.map(shoes => (
              <Cards 
                categoria={shoes.categoria_id}
                length={shoes.length}
                index={shoes.produto_id}
                nomeProduto={shoes.nome_produto}
                id={shoes.produto_id}
                preco={shoes.preco_produto}
                imagem={shoes.imagem}
              />
            ))}
          </article>
        </main>
      </>
    );
  }
}

export default Shoes;
