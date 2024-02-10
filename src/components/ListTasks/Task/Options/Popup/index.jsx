import React from 'react';
import { deleteTask } from '../../../../../helpers/deleteTask';
const Popup = ({idTask, tasks, setTasks}) => {
    const handleDelete = ( tasks, idTask, e)=>{
        //e.preventdefault()
        console.log(tasks)
        setTasks(deleteTask(tasks, idTask))
    }
    return ( 
      <div className=' bg-gray-700 p-2 rounded relative right-0 top-0 left-0 w-[100px] z-10'>
        <p onClick={e => handleDelete(tasks, idTask, e)}>Delate task</p>
      </div>  
     );
}
 
export default Popup;