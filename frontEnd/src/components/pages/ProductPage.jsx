import React, {Component } from 'react'
import Header from '../Header';
import api from "../API/api";

class ProductPage extends Component {

    state = {
        objs: [],
    } 
 
    async componentDidMount(){
        const id = this.props.match.params.id;
        const response = await api.get(`/api/prod/${id}`);
        this.setState({objs: response.data})
    }
    render(){
        
        const {objs} = this.state;

        console.log('====================================');
        console.log(objs);
        console.log('====================================');
       
        return (
            <>
                <Header />
    
                <main>
                    
                    {objs.map(obj => (
                        <article key={obj.produto_id} className="flex w-10/12 h-auto border border-black mx-auto mt-10 divide-black">
                            <img src={obj.imagem} alt="imagem do produto"
                                className='w-4/12 h-auto m-8 shadow-lg'
                            />
                            <div>
                                
                                <div className='py-10'>
                                    <h1 className='text-3xl font-bold tracking-widest'>{ obj.nome_produto }</h1>
                                    <h3 className='text-xl font-semibold tracking-wide my-8'>R$ {obj.preco_produto}</h3>
                                </div>

                                <div className='mb-8'>
                                    <p>
                                        {obj.descricao}
                                    </p>
                                </div>

                                <div className='mb-8 w-max ml-10 border-2 p-4 border-black rounded-full transition durantion-200 ease-in-out
                                    hover:border-myrtleGreen
                                '>
                                    <p>
                                        {obj.tamanho}
                                    </p>
                                </div>

                                <div className='w-max mx-auto'>
                                    <button className='mx-auto border-2 border-black px-4 py-2 transition duration-200 ease-in-out bg-cultured 
                                    hover:border-myrtleGreen hover:shadow-green
                                    '
                                    >Comprar</button>
                                </div>
                            </div>
                        </article>
                    ))}
                
                </main>
            </>
        )
    }


    
}

export default ProductPage
