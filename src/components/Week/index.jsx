import React from 'react';
import { getWeekTasks } from '../../helpers/getWeekTasks';
const Week = ({tasks}) => {
    const weekTasks=getWeekTasks(tasks)
    console.log("WeekTasks: ", weekTasks)
    return ( 
        <section className='p-4'>
            {
                weekTasks.map(item=>(
                    <div key={item.id} className='border border-black rounded bg-gray-800 p-2 text-left mb-2 flex justify-between gap-2'>
                    <div className=' bg-gray-900 p-1 rounded min-w[78px] text-center h-fit'>
                        <span>{item.day}</span>
                        <div className='flex justify-center items-center'>
                            <span className='text-4xl'>{item.numDay}</span>
                            <span style={{writingMode: "vertical-lr"}}className='text-xs font-medium'>{item.month}</span>
                        </div>
                    </div>
                    <article className='flex flex-wrap gap-1 justify-end'>
                        {
                            item.tasks.map(task => (
                                <span  key= {task.id} className="border border-black px-2 rounded bg-gray-800 inline-block h-fit" >{task.task}</span>
                                
                            ))
                            
                        }
                        
                    </article>
                </div>



                ))
            }
           

        </section>
    );
}
 
export default Week;