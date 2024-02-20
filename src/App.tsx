import styles from './css/App.module.css'

import LogoImg from './assets/Logo.svg'
import { PlusCircle, Clipboard } from 'phosphor-react'
import { Task } from './components/Task'
import { ChangeEvent, FormEvent, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    'Integer urna interdum massa libero auctor neque turpis turpis semper.'
  ])

  const [taskContent, setTaskContent] = useState('')

  function inputOnChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()  
    setTasks([...tasks, taskContent])
    setTaskContent('')
  }

  return (
    <div className={styles.app}>
      <header>
        <img src={LogoImg} alt="Logotipo da ToDo" />

        <form onSubmit={handleCreateNewTask}>
          <div className={styles.inputWrapper}>
            <label htmlFor="search">Adicione uma nova tarefa</label>
            <input id='search' onChange={inputOnChange} value={taskContent} type="text" placeholder='Adicione uma nova tarefa'/>
          </div>

          <button type='submit'>
            Criar
            <PlusCircle size={20}/>
          </button>
        </form>
      </header>

      <main>
        <div className={styles.taskListHeader}>
          <strong>Tarefas criadas<span>0</span></strong>
          <strong>Concluídas<span>0</span></strong>
        </div>

        <div className={styles.screenEmptyContent}>
          <Clipboard size={56} className={styles.clipboard}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <div className={styles.taskList}>
          {tasks.map((task) => {
            return <Task key={task} content={task} />
          })}
        </div>
      </main>
    </div>
  )
}

export default App