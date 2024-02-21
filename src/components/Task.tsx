import { Trash } from 'phosphor-react'
import styles from '../css/Task.module.css'
import { ChangeEvent } from 'react'

export interface TaksType {
  content: string,
  deleteTask: (taskToDelete: string) => void,
  handleNumberOfCompletedTasks: (checked: boolean) => void
}
export function Task({content, deleteTask, handleNumberOfCompletedTasks}:TaksType) {
  function handleDeleteTask() {
    deleteTask(content)
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>){
    handleNumberOfCompletedTasks(event.target.checked)
  }

  return (
    <div className={styles.task}>
      <div className={styles.inputWrapper}>
        <input id={content} type="checkbox" onChange={handleCheckboxChange} />
        <label htmlFor={content}>
          {content} 
        </label>
      </div>
      <Trash className={styles.trash} onClick={handleDeleteTask} />
    </div>
  )
}