
import React from 'react';
import Dots from '../../icons/Dots';
import { taskDone } from '../../../helpers/taskDone';
import Options from './Options';
import { Checkbox } from './styles';; 

const Task = ({item, tasks, setTasks}) => {
    const handleDone= (e) =>{
        e.preventDefault()
        setTasks(taskDone(item.id, tasks))

    }
    //<input type="checkbox" className='checkbox' onClick={e => handleDone(e)} /> 
    return (
            <div className='flex justify-between gap-4 items-center my-4'>
                <span className='cursor-pointer flex'>
                    <Checkbox type="checkbox" className='checkbox' onClick={e => handleDone(e)}/>
                    
                </span>
                <p className='grow text-left'>{item.task}</p>
                <span className='w-[30px] cursor-pointer'>
                <Options idTask={item.id} tasks={tasks} setTasks={setTasks}/>
                </span>
            </div>
      );
}
 
export default Task;