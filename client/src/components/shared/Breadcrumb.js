import React from "react"
import { FaFlask } from "react-icons/fa"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "../../components/Dashboard/Dashboard.module.css"

export const Breadcrumb = () => {
  return (
    <Row>
      <Col>
        <nav>
          <ol className={`${styles.breadcrumb} pl-0`}>
            <li className="breadcrumb-item">
              <a>
                <FaFlask />
                <Link to="/dashboard/projects"> Projects</Link>
              </a>
            </li>
            <li className="breadcrumb-item active">Single</li>
          </ol>
        </nav>
      </Col>
    </Row>
  )
}
