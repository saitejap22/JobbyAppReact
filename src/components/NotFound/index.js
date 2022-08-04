import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notFound-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <div className="nf-content">
        <h1 className="nf-heading">Page Not Found</h1>
        <p className="nf-text">
          we're sorry, the page you requested could not be found
        </p>
      </div>
    </div>
  </>
)
export default NotFound
