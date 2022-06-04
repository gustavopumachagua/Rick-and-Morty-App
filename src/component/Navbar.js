import React from 'react';

export const Navbar=({brand})=>{
    return(
        <nav className='bg-orange-600'>
            <div className='container mx-auto'>
                <a className='' href='/'>
                    {brand}
                </a>
            </div>
        </nav>
    );
};
export default Navbar;