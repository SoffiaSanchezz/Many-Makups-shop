import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import So from '../../assets/Producto05.jpeg'
import mini from '../../assets/Producto65.jpeg'
import Som from '../../assets/Producto84.jpeg'
import Somb from '../../assets/Producto28.jpeg'
import Sombr from '../../assets/Producto.2.png'
import Sombra from '../../assets/Producto.jpeg'

const MyModal = () => {
    const [modals, setModal] = useState(false)
    const [Espeji, setEspejo] = useState(false)
    const [CosMe, setOpen] = useState(false)
    const [Boti, SetSection] = useState(false)
    const [Brosh, SetBoch] = useState(false)
    const [Secti, setModal1] = useState(false)

    return (
        <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">

            {/* img One modal */}
            <div className="" onClick={() => setModal(!modals)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={So} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Sombras Love Is Sweet</h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">
                            $25.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {modals && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal(!modals)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Love Is Sweet
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Esta paleta de sombras con 15 tonos es perfecta para ti si eres amante de las tonalidades tierra y neutras. Acabados mate y satinado. Buena pigmentación. Textura suave. Aplicación sedosa. Incluye aplicador y espejo.

                    </p>

                </div>
            )}

            {/* img two esp */}
            <div className="" onClick={() => setEspejo(!Espeji)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={mini} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Sombras Star Luz</h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Espeji && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setEspejo(!Espeji)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Sombras Star Luz
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Esta paleta de sombras con 4 tonos es perfecta para ti si eres amante de las tonalidades para diferentes tonos de pieles y neutras. Acabados mate y satinado. Buena pigmentación. Textura suave. Aplicación sedosa. Incluye aplicador y espejo.

                    </p>

                </div>
            )}

            {/* img Three  */}
            <div className="" onClick={() => setOpen(!CosMe)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Som} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Sombra Pizza
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {CosMe && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setOpen(!CosMe)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Sombras Pizza
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        ¡Déjate conquistar por el hermoso diseño de nuestra paleta Pizza de Trendy! Trae 6 sombras entre mates y satinadas. Son tonos neutros. Tienen muy buena pigmentación. Se difuminan muy fácil y son suaves al tacto. Por su tamaño es perfecta para llevarla en la cosmetiquera.


                    </p>

                </div>
            )}
            {/* img Four  */}
            <div className="" onClick={() => SetSection(!Boti)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Somb} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Sombra Kitty
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Boti && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => SetSection(!Boti)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Sombra Kitty
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Unidad de empaque (Display) = 12 unidadesSi eres amante de los tonos cáildos esta paleta es para ti. Tiene 16 sombras. Acabados mate y satinado. Buena pigmentación. Fácil de difuminar.


                    </p>

                </div>
            )}

            <div className="" onClick={() => SetBoch(!Brosh)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Sombr} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Eyeshadow Always Perfect
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$30.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Brosh && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => SetBoch(!Brosh)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Sombra Kitty
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Tonos de full pigmentación en la gama de tonos tierra, vienen tonos matte, satinados y glitters presados super fácil de posicionar en nuestro parpado.


                    </p>

                </div>
            )}

            <div className="" onClick={() => setModal1(!Secti)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Sombra} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Sombras Liquidas Cosmic
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$30.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Secti && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal1(!Secti)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Sombras Liquidas Cosmic
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Estas sombras líquidas son todo lo que siempre has querido, tienen aplicador como de labial. Son súper fáciles de aplicar directamente del producto al párpado, puedes difuminarlo con los dedos, con una brocha o puedes mezclarlo con sombras tradicionales en polvo para hacer un difuminado perfecto. Es muy pigmentada, su brillo es hermoso y te encantará.
                    </p>

                </div>
            )}


        </div>

    )
}

export default MyModal