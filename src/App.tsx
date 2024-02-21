import styles from './css/App.module.css'

import LogoImg from './assets/Logo.svg'
import { PlusCircle, Clipboard } from 'phosphor-react'
import { Task } from './components/Task'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const [numberOfTasks, setNumberOfTasks] = useState(0)

  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)

  const [taskContent, setTaskContent] = useState('')

  function inputOnChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
    event.target.setCustomValidity('')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const taskAlreadyCreated = tasks.filter(task => {
      return task == taskContent
    })

    if (taskAlreadyCreated.length == 0) {
      setTasks([...tasks, taskContent])
      setTaskContent('')
      setNumberOfTasks((state) => state + 1)
    } else {
      alert("Essa tarefa ja foi criada!")
    }
  }

  function handleCreateNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo e obrigatorio!')
  }

  function handleDeleteTaks(taskToDelete: string, isChecked: boolean) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)

    setNumberOfTasks((state) => state - 1)

    if(isChecked){
      setNumberOfCompletedTasks((state) => state - 1)
    }
  }

  function handleNumberOfCompletedTasks(checked: boolean) {
    if (checked) {
      setNumberOfCompletedTasks((state) => state + 1)
    } else {
      setNumberOfCompletedTasks((state) => state - 1)
    }
  }

  return (
    <div className={styles.app}>
      <header>
        <img src={LogoImg} alt="Logotipo da ToDo" />

        <form onSubmit={handleCreateNewTask}>
          <div className={styles.inputWrapper}>
            <label htmlFor="search">Adicione uma nova tarefa</label>
            <input
              id='search'
              onChange={inputOnChange}
              value={taskContent}
              type="text"
              onInvalid={handleCreateNewTaskInvalid}
              placeholder='Adicione uma nova tarefa'
              required
            />
          </div>

          <button type='submit'>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>

      <main>
        <div className={styles.taskListHeader}>
          <strong>Tarefas criadas<span>{numberOfTasks}</span></strong>
          <strong>Concluídas<span>{numberOfCompletedTasks}</span></strong>
        </div>

        {tasks.length === 0 ? (
          <div className={styles.screenEmptyContent}>
            <Clipboard size={56} className={styles.clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className={styles.taskList}>
            {tasks.map((task) => {
              return <Task
                key={task}
                content={task}
                deleteTask={handleDeleteTaks}
                handleNumberOfCompletedTasks={handleNumberOfCompletedTasks}
              />
            })}
          </div>
        )}
      </main>
    </div>
  )
}

export default App