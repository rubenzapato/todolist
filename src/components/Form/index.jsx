import React from 'react';
import Text from '../icons/Text.jsx'; 

const Form = () => {
    return (  
        <section className='max-w-[450px] m-auto my-3 px-4'>
            <div className='border border-black rounded bg-gray-800 flex items-center'>
                
                <form className='w-full'>
                    <input  className="w-full bg-transparent outline-none p-1" type="name" placeholder='Add a task..'></input>
                </form>
            </div>
        </section>
        
    );
}
 
export default Form;