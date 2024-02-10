import React, { useState } from 'react';
import Dots from '../../../icons/Dots';
import Popup from './Popup';

const Options = ({idTask, tasks, setTasks}) => {
    const [open, setOpen] = useState(false)
    const handleOptions =  (e) =>{
        //e.preventdefault()
        setOpen(current=> !current)
    }
    return ( 
        <span onClick={handleOptions}>
            
            <Dots/>
            {open && <Popup idTask={idTask} tasks={tasks} setTasks={setTasks}/>}
        </span>
     );
}
 
export default Options;