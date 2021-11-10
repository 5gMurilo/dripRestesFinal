import React from "react";
import * as BiIcons from "react-icons/bi";

function CartCards(props) {
    return (
        <>
            <div className='border-2 border-eireBlack w-11/12 mx-auto h-auto flex flex-row bg-cultured py-2'>
                <div className=' flex flex-row ml-2 w-10/12'>
                    <img src={props.img} alt="Imagem produto" className="w-52 h-auto" />
                    <div className='ml-2 my-auto'>
                        <h1 className='text-2xl font-bold tracking-wide'>{props.nomeProduto}</h1>
                        <p className='text-xl text-price font-semibold'>R$ {props.precoProduto}</p>
                        <p className='text-xl'>tamanho:{props.size}</p>
                    </div>
                </div>
                <div className='flex w-1/12 mx-auto'>
                    <button className='object-right my-auto mx-auto transition duration-200 ease-out
                    hover:text-red600' >
                        <BiIcons.BiTrash className='w-8 h-8'/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default CartCards;
