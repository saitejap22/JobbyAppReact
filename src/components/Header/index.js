import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome, AiOutlineLogout} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content-mobile">
        <Link to="/" className="link">
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="nav-logo"
          />
        </Link>

        <div className="nav-items">
          <ul className="nav-list-mobile">
            <Link to="/" className="link">
              <li className="nav-item-mobile">
                <button type="button" className="mobile-button">
                  <AiFillHome className="header-icon" />
                </button>
              </li>
            </Link>
            <Link to="/jobs" className="link">
              <li className="nav-item-mobile">
                <button type="button" className="mobile-button">
                  <BsFillBriefcaseFill className="header-icon" />
                </button>
              </li>
            </Link>
            <li className="nav-item-mobile">
              <button
                type="button"
                className="mobile-button"
                onClick={onClickLogout}
              >
                <AiOutlineLogout className="header-icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-large">
        <Link to="/" className="link">
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="nav-logo"
          />
        </Link>
        <div className="nav-large-items">
          <ul className="nav-large-list">
            <li className="nav-item-large">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-item-large">
              <Link to="/jobs" className="link">
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="logout-btn-large"
          type="button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
