import logo from '../assets/Logo/Cafe-Logo-Background-PNG-Image.png'

function Preloader() {
  return (
    <div className="preloader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader-content">
        <img src={logo} alt="Coffee logo" className="preloader-logo" />
        <p className="preloader-title">Coffee Shop</p>
        <div className="preloader-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

export default Preloader
