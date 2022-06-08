import React from 'react';

const Characters=({characters=[]})=>{
    return(
        <div className='container mx-auto px-8'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
                {characters.map((item, index)=>(
                    <div key={index} className='flex justify-center'>
                        <div className='space-y-1 '>
                            <img src={item.image} alt="rick-and-morty" className='rounded-lg border-4 border-sky-500'/>
                            <div className='border-2 border-sky-500 rounded-md'>
                            <h5 className='font-mono text-base font-semibold'>{item.name}</h5>
                            <hr/>
                            <p className='font-mono text-sm font-semibold'>species:{item.species}</p>
                            <p className='font-mono text-sm font-semibold'>location:{item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Characters;