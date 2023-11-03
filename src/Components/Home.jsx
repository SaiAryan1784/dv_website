import React from 'react';
import bgimg from '../Assets/WholeBG.jpg';
import logo from '../Assets/DataVerseLogo.png';

const Home = () => {
    const style = {
        backgroundImage: `url(${bgimg})`,
    };

    return (
        <div className="bg-cover bg-bottom h-screen z-0 opacity-[1]  bg-fixed bg-no-repeat shadow-lg" style={style}>
            {/* <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.5)' }}></div> Dark overlay */}
            <nav className='flex items-center justify-between p-3 z-10 backdrop-blur-[0.6px]'>
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

            <div className=' w-screen max-w-screen-lg text-center font-Orbitron text-5xl font-semibold text-slate-400 mx-auto mt-[12%] z-10'>
                <h1>WELCOME TO</h1>
            </div>
            <div className='w-screen max-w-screen-lg text-center font-Orbitron text-8xl font-semibold backdrop-blur-[0.7px] text-white mx-auto mt-[2%] z-10'>
                <h1>DATAVERSE</h1>
            </div>
        </div>
    );
};

export default Home;
