import logoDarkMode from '../assets/dark.png'
import Amigos from '../assets/wraith4.png'
import AppStoreImage from '../assets/appstore.png'
import GooglePlayImage from '../assets/googleplay.png'
import bruja from '../assets/bruja.png'
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


export const Home = () => {
    return (
        <>
            <header className="container mx-auto h-40 text-center py-4 md:flex justify-between items-center px-4 md:h-15">
                <h1 className='font-bold text-2xl my-2 text-amber-700 text-blue-900'style={{fontFamily: 'monospace'}} >Wraith<span className='text-black'style={{fontFamily: 'monospace'}}>-Delta Studio </span></h1>
                <ul className='flex gap-5 justify-center my-4 flex-wrap'>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline hover:text-blue-900'style={{fontFamily: 'monospace',fontSize: '16px'}}>Home</a></li>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline hover:text-blue-900'style={{fontFamily: 'monospace',fontSize: '16px'}}>About US</a></li>
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline hover:text-blue-900'style={{fontFamily: 'monospace',fontSize: '16px'}}>Services</a></li>                    
                    <li><a href="#" className='font-bold hover:text-amber-700 hover:underline hover:text-blue-900'style={{fontFamily: 'monospace',fontSize: '16px'}}>Contact</a></li>
                </ul>
                <ul className='flex justify-center items-center gap-5 my-4'>
                    <li><img src={logoDarkMode} alt="logo" width={35} height={35} />
                    </li>
                </ul>
            </header>



            <main className='text-center py-6 px-8 bg-gray-200  md:text-left md:flex justify-between items-center gap-10 md:py-1'>
                <div className=''>
                    <h1 className='font-lato font-extrabold text-amber-800 uppercase text-4xl my-4 md:text-6xl text-gray-900' style={{fontFamily: 'monospace'}}>Wraith 么</h1>

                    <p className='font-bold text-left my-8 md:text-2xl 'style={{fontFamily: 'monospace'}}> Delta-Studio ∆ by</p>

                    <p className='text-2xl my-6 font-sans' style={{fontFamily: 'monospace'}}>El destino te ha elegido. No es solo un juego... es el comienzo de una aventura que pondrá a prueba tu valor, tu ingenio y tu voluntad. ¿Estás listo para descubrir lo que te espera?</p>

                    <Link to="/login" href="#" className='bg-black block  w-40 py-2 mx-auto text-white rounded-2xl text-center sm:mx-0  hover:bg-gray-900'style={{fontFamily: 'monospace'}} >Get started</Link>


                    <p className='font-bold text-left my-4 md:text-2xl 'style={{fontFamily: 'monospace'}}>Find us</p>

                    <div className="flex justify-center gap-4">
                        <a href="#">
                            <img src={AppStoreImage} alt="App Store" />
                        </a>
                        <a href="#">
                            <img src={GooglePlayImage} alt="Google Play" />
                        </a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src={Amigos} alt="smart" />
                </div>
            </main>


            <section className='container mx-auto px-4'>

                <div className='container mx-auto relative mt-6'>
                    <h2 className='font-semibold text-3xl relative z-1 w-50 text-center mx-auto bg-white' style={{fontFamily: 'monospace'}} >ABOUT US</h2>
                    <div className='text-gray-900 border-2 absolute top-1/2 w-full z-0' />
                </div>

                <div className='my-10 flex flex-col gap-10 items-center sm:flex-row sm:justify-around sm:items-center'>

                    <div className='sm:w-1/2'>
                        <img src={bruja} alt="App Store" className='w-full h-full object-cover' />
                    </div>

                    <div className='px-10 sm:w-1/2'>
                        <p className='my-4'>🎮 ¡Bienvenido a Wraith! 🏹⚔️
                        </p>
                        <ul className='space-y-4'>
                            <li>
                                🌄 Historia
                            </li>
                            <li>
                                🕹️Características del Juego
                            </li>
                            <li>
                                🧩 Exploración de entornos pixel-art: desiertos, bosques encantados, y ruinas ancestrales.
                            </li>
                        </ul>
                    </div>

                </div>

            </section>


            <section className='container mx-auto px-4'>

                <div className='container mx-auto relative mt-6'>
                    <h2 className='font-semibold text-3xl relative z-1 w-50 text-center mx-auto bg-white'>SERVICES</h2>
                    <div className='text-gray-900 border-2 absolute top-1/2 w-full z-0' />
                </div>

                <div className='my-10 flex justify-between flex-wrap gap-5'>

                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 sm:flex-1">
                        <p>🎮</p>
                        <h4 className="text-xl font-bold py-4 text-gray-700 hover:underline"style={{fontFamily: 'monospace', fontSize: '25px'}}>¡Bienvenido a Wraith!</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-gray-900 absolute w-full" />
                    </div>


                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 bg-gray-200 sm:flex-1">
                        <p>🌄</p>
                        <h4 className="text-xl font-bold py-4 text-gray-900 hover:underline"style={{fontFamily: 'monospace', fontSize: '39px'}}> Historia</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-gray-900 absolute w-full" />
                    </div>

                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 bg-gray-200 sm:flex-1">
                        <p> 🕹️</p>
                        <h4 className="text-xl font-bold py-4 text-gray-900 hover:underline"style={{fontFamily: 'monospace'}}>Características del Juego</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-gray-900 absolute w-full" />
                    </div>

                    <div className="text-center shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.3)] hover:shadow-[0.1rem_0.1rem_1rem_rgba(0,0,0,0.5)] transition-shadow duration-300 relative pt-4 sm:flex-1">
                        <p>🧩</p>
                        <h4 className="text-xl font-bold py-4 text-gray-700 hover:underline"style={{fontFamily: 'monospace'}}>Exploración de entornos pixel-art</h4>
                        <p className="my-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                            similique sint eius consectetur rerum voluptate rem tenetur quisquam veniam quos ad facilis alias
                            necessitatibus.</p>
                        <hr className="border-1 border-gray-900 absolute w-full" />
                    </div>
                </div>
            </section>


            <footer className='text-center bg-gray-200 p-6 sm:px-20 sm:py-10 mt-20 rounded-tr-3xl rounded-tl-3xl space-y-8'>

                <div className='flex justify-between items-center'>
                    <div className='text-3xl font-extrabold text-gray-800'style={{fontFamily: 'monospace'}}>Contact US</div>
                    <ul className='flex gap-4'>
                        <li><FaFacebook className='text-2xl' /></li>
                        <li><FaSquareInstagram className='text-2xl' /></li>
                        <li><FaXTwitter className='text-2xl' /></li>
                    </ul>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='text-left'>
                        <p className='font-bold my-2'style={{fontFamily: 'monospace',fontSize: '16px'}}>Email: my.delta.studio@gmail.com</p>
                        <p className='font-bold'style={{fontFamily: 'monospace', fontSize: '16px'}}>Phone: 0995644186</p>
                    </div>
                    <div className='flex-1 sm:max-w-1/2'>
                        <form action="#" className='w-full p-4'>
                            <fieldset className='border-2 border-dark-700 p-4 rounded-sm '>
                                <legend className='bg-gray-800 w-full text-left text-white pl-2 py-2'style={{fontFamily: 'monospace', fontSize: '16px'}}>Subcribe our newsletter</legend>
                                <div className='flex justify-between gap-4'>
                                    <input type="email" placeholder="Enter your email" style={{fontFamily: 'monospace'}} className='sm:flex-1 border border-gray-300 rounded-md focus:outline-none px-2' />
                                    <button className='flex-1 sm:max-w-40 border bg-gray-800 p-1 rounded-lg text-white'style={{fontFamily: 'monospace'}}>Send</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <hr className='border-1 border-black-700' />

                <p className='font-semibold' style={{fontFamily: 'monospace', fontSize: '16px'}}>
                    copyright - © - Delta-Studio ∆
                </p>
            </footer>

        </>
    )
}

