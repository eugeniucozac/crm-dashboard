import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import Accoustics from "@assets/images/accoustics.jpg"
import Header from "@components/Header"
import styles from "../Authorization.module.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className={styles.authorization}>
        <Row>
          <Col>
            <Image src={Accoustics} fluid />
          </Col>
          <Col>
            <div className={styles.formWrapper}>{children}</div>
          </Col>
        </Row>
      </section>
    </>
  )
}
