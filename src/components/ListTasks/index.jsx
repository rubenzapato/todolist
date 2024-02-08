import React from 'react';
import Dots from '../icons/Dots';

const ListTasks = () => {
    return (
        <section className='max-w-[450px] m-auto pb-7 pt-1 px-4'>
            <div className='flex justify-between gap-4 items-center my-4'>
                <span className='cursor-pointer flex'>
                    <input type="checkbox" className='checkbox'/>
                </span>
                <p className='grow text-left'>New Task name</p>
                <span className='w-[30px] cursor-pointer'>
                <Dots/>
                </span>
            </div>
            <div className='flex justify-between gap-4 items-center my-4'>
                <span className='cursor-pointer flex'>
                    <input type="checkbox" className='checkbox'/>
                </span>
                <p className='grow text-left'>New Task name</p>
                <span className='w-[30px] cursor-pointer'>
                <Dots/>
                </span>
            </div>
            <div className='flex justify-between gap-4 items-center my-4'>
                <span className='cursor-pointer flex'>
                    <input type="checkbox" className='checkbox'/>
                </span>
                <p className='grow text-left'>New Task name</p>
                <span className='w-[30px] cursor-pointer'>
                <Dots/>
                </span>
            </div>
        </section>
      );
}
 
export default ListTasks;