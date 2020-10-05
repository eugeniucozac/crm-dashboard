import React from "react"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Logo from "@assets/images/logo.png"
import { logout } from "@actions/authorization"
import { getUserIsAuthorized } from "@selectors/authorization"
import styles from "./Header.module.css"

const Header = ({ isAuthorized, logout }) => {
  return (
    <header className={styles.header}>
      <Container fluid>
        <Row>
          <Col>
            <h1>
              <Link to="/">
                <Image src={Logo} />
              </Link>
            </h1>
          </Col>
          <Col>
            {isAuthorized && (
              <Button variant="primary" className={styles.logout} onClick={logout}>
                Logout
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthorized: getUserIsAuthorized(state),
})

export default connect(mapStateToProps, { logout })(Header)
