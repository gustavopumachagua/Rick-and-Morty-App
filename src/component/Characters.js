import React from 'react';

const Characters=({characters=[]})=>{
    return(
        <div className='container mx-auto'>
            <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
                {characters.map((item, index)=>(
                    <div key={index} className=''>
                        <div className='' syle={{minWidth:"200px"}}>
                            <img src={item.image} alt="" className='rounded-lg border-2 border-sky-500'/>
                            <div className='bg-slate-400 rounded-lg pl-2'>
                            <h5 className='font-mono text-lg font-semibold'>{item.name}</h5>
                            <hr/>
                            <p className='font-medium'>species:{item.species}</p>
                            <p className='font-medium'>location:{item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Characters;