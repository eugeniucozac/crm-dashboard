import React from "react"
import styles from "./Loading.module.css"

export const RectLoading = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
    </div>
  )
}
