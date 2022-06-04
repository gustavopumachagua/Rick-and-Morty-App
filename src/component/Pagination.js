import React from 'react';

const Pagination=({prev, next, onPrevious, onNext})=>{
    const handlePrevious=()=>{
        onPrevious();
    };
    const handleNext=()=>{
        onNext();
    };
    return(
        <nav className='my-5'>
            <ul className='flex justify-center space-x-4'>
                {prev ? (
                    <li className=''>
                    <button type='button' className='bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-full' onClick={handlePrevious}>
                        Previous
                    </button>
                    </li>
                ): null}
                {next ? (
                    <li className=''>
                        <button type='button' className='bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-full' onClick={handleNext}>
                            Next
                        </button>
                    </li>
                ): null}
            </ul>
        </nav>
    );
};
export default Pagination;