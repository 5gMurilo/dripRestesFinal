import React from "react";
import * as rRoutes from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "HOME", //titulo
    path: "/" //diretório
  },
  {
    title: "BOTTOM",
    path: "/Bottom"
  },
  {
    title: "TOP",
    path: "/Top"
  },
  {
    title: "SHOES",
    path: "/Shoes"
  },
  {
    title: "SHOP ALL",
    path: "/ShopAll"
  },
  {
    title: "CARRINHO",
    path:"/Cart"
  }
];

function Menu(ativo, closeMenu) {

    const classe = ativo.ativo ? "relative top-0 z-30 inset-0 bg-eireBlack bg-opacity-60 w-screen h-screen transition duration-300 ease-in-out" : "hidden top-0 inset-0 bg-eireBlack bg-opacity-60 w-screen h-screen transition duration-300 ease-in-out";

    const close = closeMenu.closeMenu ? "hidden top-0 inset-0 bg-eireBlack bg-opacity-60 w-screen h-screen transition duration-150 ease-in-out" : "absolute top-0 inset-0 bg-eireBlack bg-opacity-60 w-screen h-screen transition duration-150 ease-in-out";
    
  return (
    <>
      {/*menu*/}
      <div className={classe}>
        <nav className="float-right right-0 bg-cultured w-72 justify-center items-center text-center h-screen lg:w-96 2xl:w-2/6">
          <div className="flex align-center justify-center m-auto w-full h-auto my-10">
            <BiIcons.BiUser className="w-14 h-auto mr-4 " />

            <button className="border-4 rounded-md h-10 w-20 border-eireBlack mx-4 my-auto transition ease-in-out duration-150 font-semibold hover:border-myrtleGreen hover:text-myrtleGreen">
              Login
            </button>

            <button
              className="border-4 rounded-md h-10 w-20 border-eireBlack mx-6 my-auto transition ease-in-out duration-200 text-cultured bg-eireBlack font-semibold
              hover:border-myrtleGreen hover:bg-myrtleGreen"
            >
              Cadastro
            </button>

            <button className='ml-10' onClick={close}>
                <AiIcons.AiOutlineClose className='w-10 h-10 transition ease-in-out duration-200 hover:text-red600'  />
            </button>
          </div>
          <ul className="divide-y divide-quickSilver ">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="text-base py-6 lg:text-2xl">
                  <rRoutes.Link to={item.path}>
                    <span className="transition duration-200 font-medium hover:text-maximumBlue ">
                      {item.title}
                    </span>
                  </rRoutes.Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
