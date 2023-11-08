import React from 'react';
import bgimg from '../Assets/bgnew.png';
import logo from '../Assets/DataVerseLogo.png';
import "./home.css"

const Home = () => {
    const style = {
        backgroundImage: `url(${bgimg})`,
    };

    return (
        <div className="bg-cover bg-center h-screen z-0 opacity-[1]  bg-fixed bg-no-repeat shadow-lg" style={style}>
            {/* <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.5)' }}></div> Dark overlay */}
            <nav className='flex items-center justify-between p-3 z-10 backdrop-blur-[2px] sticky top-0'>
                <div>
                    <img src={logo} className='h-[140px] w-[140px]' alt="Logo" />
                </div>
                <div className='text-white mr-[50px] text-2xl font-Orbitron'>
                    <ul className="flex gap-[2.5rem]">
                        <li>
                            <a href="/" className='hover:text-blue-600'>Home</a>
                        </li>
                        <li>
                            <a href="/about" className='hover:text-blue-600'>About</a>
                        </li>
                        <li>
                            <a href="/contact" className='hover:text-blue-600'>Contact</a>
                        </li>
                        <li>
                            <a href="/team" className='hover:text-blue-600'>Team</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className=' animate-none w-screen max-w-screen-lg text-center font-Orbitron text-5xl font-semibold text-slate-400 mx-auto mt-[12%] z-10'>
                <h1 className='heading'>WELCOME TO</h1>
            </div>
            <div className='w-screen max-w-screen-lg text-center font-Orbitron text-8xl font-semibold backdrop-blur-[0.7px] text-white mx-auto mt-[2%] z-10'>
                <h1 className='heading'>DATAVERSE</h1>
            </div>
        </div>
    );
};

export default Home;
