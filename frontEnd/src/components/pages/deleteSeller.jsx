import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from "../../img/logoSVG.svg";
import api from '../API/api';

export default class deleteSeller extends Component {


    render() {
        const session = localStorage.getItem('sellerData');
        const id = this.props.match.params.vendedor_id;


        function redirect(){
            return 
        }

        function sellerFunction() {
            api.get(`/deleteSellerAcc/${id}`).then((resp) => {
                alert('sua conta foi deletada com sucesso!');
                localStorage.removeItem('sellerData');
            });
            <Redirect to='/login' />
        }

        
        if(session){

            return (
                <>
                    <header> 
                        <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                    </header>

                    <main className='w-11/12 mx-auto'>
                        <article className='w-10/12 h-auto flex flex-col mx-auto'>
                            
                                <h1 className='text-3xl font-bold tracking-wide text-center'>
                                    Deseja realmente excluir sua conta?
                                </h1>

                                <h3 className='text-xl font-medium text-quickSilver text-center'>
                                    Ao excluir sua conta todos os seus produtos serão deletados da plataforma
                                </h3>

                            <div className='w-max mx-auto'>
                                <button onClick={sellerFunction} className='w-20 h-10 m-4 border-4 border-eireBlack transition duration-200 ease-in hover:border-maximumBlue hover:text-maximumBlue'>
                                    <p>Sim</p>
                                </button>

                                <button onClick={redirect} className='w-20 h-10 m-4 border-4 border-eireBlack transition duration-200 ease-in hover:border-maximumBlue hover:text-maximumBlue'>
                                    <p>Não</p>
                                </button>
                            </div>
                        </article>
                    </main>
                </>
            )

        }else{ 
            return <Redirect to='/login' />
        }
    }
}
