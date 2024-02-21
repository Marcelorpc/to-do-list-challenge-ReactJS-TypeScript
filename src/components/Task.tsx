import { Trash } from 'phosphor-react'
import styles from '../css/Task.module.css'
import { ChangeEvent, useState } from 'react'

export interface TaksType {
  content: string,
  deleteTask: (taskToDelete: string, isChecked: boolean) => void,
  handleNumberOfCompletedTasks: (checked: boolean) => void
}
export function Task({content, deleteTask, handleNumberOfCompletedTasks}:TaksType) {
  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask() {
    deleteTask(content, isChecked)
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>){
    handleNumberOfCompletedTasks(event.target.checked)
    setIsChecked(event.target.checked)
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