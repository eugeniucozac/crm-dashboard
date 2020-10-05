import React from "react"
import { Link, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { FaArchive, FaRunning, FaChartLine, FaClipboardCheck, FaFlask, FaFileInvoice } from "react-icons/fa"
import { selectRoleAuthorization } from "@selectors/authorization"
import PropTypes from "prop-types"

const Sidebar = ({ roleName }) => {
  return (
    <aside className="side-nav fixed">
      <ul>
        <li className="menu-item">
          <span>
            <FaArchive />
            My Account
          </span>
          <ul id="form-elements">
            <li>
              <NavLink to="/dashboard/change-password" activeClassName="selected">
                Change Password
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to="/dashboard/consultants">
            <FaRunning />
            Consultants
          </Link>
        </li>
        {(roleName === "technical-manager" || roleName === "admin" || roleName === "director") && (
          <li className="menu-item">
            <span>
              <FaArchive />
              Inventory
            </span>
            <ul id="form-elements">
              <li>
                <NavLink to="/dashboard/inventory-hardware" activeClassName="selected">
                  Hardware
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/inventory-kit" activeClassName="selected">
                  Kit
                </NavLink>
              </li>
              {roleName === "admin" && (
                <>
                  <li>
                    <NavLink to="/dashboard/inventory-manufacture" activeClassName="selected">
                      Manufacture
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/inventory-model" activeClassName="selected">
                      Model
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/inventory-type" activeClassName="selected">
                      Type
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </li>
        )}
        {(roleName === "technical-manager" || roleName === "admin") && (
          <li className="menu-item">
            <NavLink to="/dashboard/issues" activeClassName="selected">
              <FaClipboardCheck />
              Issues
            </NavLink>
          </li>
        )}
        <li className="menu-item">
          <span>
            <FaFlask />
            Project
          </span>
          <ul id="form-elements">
            <li>
              <NavLink to="/dashboard/projects" activeClassName="selected">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/project/add" activeClassName="selected">
                Add New Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/project-services" activeClassName="selected">
                Service Price List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/address-book" activeClassName="selected">
                Address Book
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <span>
            <FaFileInvoice />
            Invoices
          </span>
          <ul id="form-elements">
            <li>
              <NavLink to="/dashboard/invoices" activeClassName="selected">
                View Invoices
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <NavLink to="/dashboard/statistics" activeClassName="selected">
            <FaChartLine />
            Statistics
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

const mapStateToProps = state => ({
  roleName: selectRoleAuthorization(state),
})

Sidebar.propTypes = {
  roleName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Sidebar)
