import { Trash } from 'phosphor-react'
import styles from '../css/Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.inputWrapper}>
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </label>
      </div>
      <Trash className={styles.trash} />
    </div>
  )
}