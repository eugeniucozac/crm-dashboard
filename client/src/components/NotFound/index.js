import React from "react"
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <section className={styles.error}>
      <div className={styles.wrapper}>
        <FaExclamationTriangle className={styles.alert} />
        <h1>Error 404</h1>
        <h3>Oops! Page Not Found!</h3>
        <p>The link you followed may be broken, or the page has been removed</p>
        <Link to="/dashboard/consultants" className={styles.btn}>
          <FaArrowLeft />
          Back Dashboard
        </Link>
      </div>
    </section>
  )
}
export default NotFound
