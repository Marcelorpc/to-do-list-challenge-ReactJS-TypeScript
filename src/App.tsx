import styles from './css/App.module.css'

import LogoImg from './assets/Logo.svg'
import { PlusCircle, Clipboard } from 'phosphor-react'

//import { Task } from './components/Task' 

function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={LogoImg} alt="Logotipo da ToDo" />

        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="search">Adicione uma nova tarefa</label>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
          </div>

          <button>
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
      </main>
    </div>
  )
}

export default App