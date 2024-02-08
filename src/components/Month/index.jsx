import React from 'react';
const Month = () => {
    return ( 
        <section className='p-4'>
            <div className='border border-black rounded bg-gray-800 p-2 text-left mb-2 flex justify-between gap-2'>
                <div className=' bg-gray-900 p-1 rounded min-w[78px] text-center h-fit'>
                    
                    <div className='flex justify-center items-center'>
                        <span className='text-4xl'>2024</span>
                    </div>
                </div>
                <article className='flex flex-wrap gap-1 justify-end'>
                    <span className="border border-black px-2 rounded bg-gray-800 inline-block h-fit" >task one</span>
                    <span className="border border-black px-2 rounded bg-gray-800 inline-block h-fit">task two</span>
                    <span className="border border-black px-2 rounded bg-gray-800 inline-block h-fit">task tree</span>

                </article>
            </div>

        </section>
     );
}
 
export default Month;