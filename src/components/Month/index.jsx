import React from 'react';
import { getMonthTasks } from '../../helpers/getMonthTasks';
const Month = ({tasks}) => {
    console.log( "tasks MOnth; ",tasks)
    const months = getMonthTasks(tasks)
    
    return ( 
        <section className='p-4'>
            {
                months.map(item => (
                    <div  key={item.id} className='border border-black rounded bg-gray-800 p-2 text-left mb-2 flex justify-between gap-2'>
                        <div className=' bg-gray-900 p-1 rounded min-w[78px] text-center h-fit'>
                            <div className='flex justify-center items-center'>
                                <span className='text-4xl'>{item.month}</span>
                            </div>
                        </div>
                        <article className='flex flex-wrap gap-1 justify-end'>
                            {
                                item.tasks.map(tasks=>  (
                                    <span  key= {tasks.id} className="border border-black px-2 rounded bg-gray-800 inline-block h-fit" >{tasks.task}</span>
                                ))
                            }
                            
                            
                        </article>
                    </div>
                ))
            }
            
        </section>
     );
}
 
export default Month;