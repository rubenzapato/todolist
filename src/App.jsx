import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'

function App() {
  const [dateM, setDateM] = useState(new Date());

  const data = JSON.parse(localStorage.getItem("tasks"))
  const [tasks, setTasks] = useState(data?data:[]);
  const [tab, setTab] = useState("day");

  console.log(tasks)
  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Ejecutar cada vez que cambien los datos de tasks

  return (
    <main>
      <h1 className='text-6xl bg-green'>To do List</h1>
      <section className='bg-gray-900 text-white rounded max-w-[600px] m-auto'>
        <Header tab={tab} setTab={setTab}/>
        {tab === "day" && (
          <>
            <Day dateM={dateM} setDateM={setDateM}/>
            <Form dateM={dateM} tasks={tasks} setTasks={setTasks}/>
            <ListTasks dateM={dateM} tasks={tasks} setTasks={setTasks}/>
          </>
        )}
        {tab === "week" && <Week tasks={tasks}/>}
        {tab === "month" && <Month tasks={tasks}/>}
        {tab === "year" && <Year tasks={tasks}/>}
      </section>
    </main>
  )
}

export default App;