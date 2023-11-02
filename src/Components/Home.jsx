import React from 'react';
import bgimg from '../Assets/WholeBG.jpg';
import logo from '../Assets/DataVerseLogo.png';

const Home = () => {
    const style = {
        backgroundImage: `url(${bgimg})`,
    };

    return (
        <div className="bg-cover bg-bottom h-screen z-0 opacity-[1]" style={style}>
            {/* <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.5)' }}></div> Dark overlay */}
            <nav className='flex items-center justify-between p-3 z-10'>
                <div>
                    <img src={logo} className='h-[140px] w-[140px]' alt="Logo" />
                </div>
                <div className='text-white mr-[50px] text-3xl font-Orbitron'>
                    <ul className="flex gap-[3rem]">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/team">Team</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className=' w-screen max-w-screen-lg text-center font-Orbitron text-5xl font-semibold text-white mx-auto mt-[12%] z-10'>
                <h1>WELCOME TO</h1>
            </div>
            <div className='w-screen max-w-screen-lg text-center font-Orbitron text-8xl font-semibold text-white mx-auto mt-[2%] z-10'>
                <h1>DATAVERSE</h1>
            </div>

            
        </div>
    );
};

export default Home;
