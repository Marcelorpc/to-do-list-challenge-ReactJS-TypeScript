import { Trash } from 'phosphor-react'
import styles from '../css/Task.module.css'

export interface TaksType {
  content: string
}
export function Task({content}:TaksType) {
  return (
    <div className={styles.task}>
      <div className={styles.inputWrapper}>
        <input id={content} type="checkbox" />
        <label htmlFor={content}>
          {content} 
        </label>
      </div>
      <Trash className={styles.trash} />
    </div>
  )
}