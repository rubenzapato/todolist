import React, { useState } from 'react';


const Form = ({dateM,tasks, setTasks}) => {
    const  [val, setVal]= useState("")
    const handleSumbit=(e)=>{
        e.preventDefault()
        const newTask = {
            id: crypto.randomUUID(), 
            date: dateM, 
            task: val,
            done: false
        }
        setTasks([...tasks, newTask])
        setVal("")  
    }
    return (  
        <section className='max-w-[450px] m-auto my-3 px-4'>
            <div className='border border-black rounded bg-gray-800 flex items-center'>
                
                <form className='w-full' onSubmit={handleSumbit}>
                    <input  className="w-full bg-transparent outline-none p-1" type="name" placeholder='Add a task..' val= {val} onChange={e=> setVal(e.target.value)}></input>
                </form>
            </div>
        </section>
        
    );
}
 
export default Form;