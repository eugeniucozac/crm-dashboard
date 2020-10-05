import React from "react"
import styles from "./Loading.module.css"

export const Loading = () => {
  return (
    <section className={styles.preloaderWrap}>
      <div className={styles.spinner}></div>
    </section>
  )
}
