import React from 'react';

const Pagination=({prev, next, onPrevious, onNext})=>{
    const handlePrevious=()=>{
        onPrevious();
    };
    const handleNext=()=>{
        onNext();
    };
    return(
        <nav className='flex justify-center p-11'>
            <ul className='flex flex-row space-x-10'>
                {prev ? (
                    <li className=''>
                    <button type='button' className='w-20 border-4 border-sky-500 rounded-full transition duration-150 ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500' onClick={handlePrevious}>
                        Previous
                    </button>
                    </li>
                ): null}
                {next ? (
                    <li className=''>
                        <button type='button' className='w-20 border-4 border-sky-500 rounded-full transition duration-150 ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500' onClick={handleNext}>
                            Next
                        </button>
                    </li>
                ): null}
            </ul>
        </nav>
    );
};
export default Pagination;