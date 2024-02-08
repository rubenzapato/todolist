import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'

function App() {
  const [tab, setTab] = useState("day")

  return (
    <main>
      <h1 className='text-6xl bg-green'>To do List</h1>
      <section className='bg-gray-900 text-white rounded max-w-[600px] m-auto'>
        <Header tab={tab} setTab={setTab}/>
        {tab === "day" && (
          <>
            <Day/>
            <Form/>
            <ListTasks/>
          </>
        )}
        {tab === "week" && <Week/> }
        {tab === "month" && <Month/>}
        {tab === "year" && <Year/>}
      </section>
    </main>
  )
}

export default App

