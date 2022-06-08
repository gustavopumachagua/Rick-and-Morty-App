import React from 'react';

export const Navbar=({brand})=>{
    return(
        <nav className='bg-orange-400 p-5'>
            <div className='container mx-auto'>
                <a className='font-mono text-2xl font-bold flex justify-center xl:justify-start' href='/'>
                    {brand}
                </a>
            </div>
        </nav>
    );
};
export default Navbar;