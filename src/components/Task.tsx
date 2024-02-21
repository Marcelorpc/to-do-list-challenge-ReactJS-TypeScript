import { Trash } from 'phosphor-react'
import styles from '../css/Task.module.css'

export interface TaksType {
  content: string,
  deleteTask: (taskToDelete: string) => void
}
export function Task({content, deleteTask}:TaksType) {
  function handleDeleteTask() {
    deleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.inputWrapper}>
        <input id={content} type="checkbox" />
        <label htmlFor={content}>
          {content} 
        </label>
      </div>
      <Trash className={styles.trash} onClick={handleDeleteTask} />
    </div>
  )
}