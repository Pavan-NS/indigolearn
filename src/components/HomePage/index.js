import './index.css'

const HomePage = () => (
  <>
    <div className="home">
      <div className="container">
        <h1 className="home-heading">Get Ready to be a Global CA</h1>
        <p className="p1">
          Acquire the ACCA qualification to join the league of Global Accounting
          & Finance Professionals
        </p>
        <img
          className="img"
          alt="img"
          src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg"
        />
        <form className="form-container">
          <h1 className="home-heading">
            Aspiring to be an ACCA? Get in touch with us!
          </h1>
          <input className="input" type="text" placeholder="Email ID" />
          <input className="input" type="text" placeholder="Phone Number" />
          <div>
            <button type="submit" className="request-btn">
              Request Call Back
            </button>
          </div>
        </form>
        <div>
          <div className="margin">
            <button type="button" className="request-btn1">
              Download Brochure
            </button>
          </div>
          <div className="card">
            <img
              className="img1"
              alt="img"
              src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
            />
          </div>
        </div>
      </div>
    </div>

    {/* desktop version */}

    <div className="home1">
      <div className="desktop-version">
        <h1 className="heading5">Get Ready to be a Global CA</h1>
        <p className="p3">
          Acquire the ACCA qualification to join the league of Global Accounting
          & Finance Professionals
        </p>
        <div className="margin1">
          <button type="button" className="request-btn2">
            Download Brochure
          </button>
          <img
            className="img-d"
            alt="img"
            src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
          />
        </div>
      </div>
      <form className="form-container">
        <h1 className="home-heading">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>
        <input className="input" type="text" placeholder="Email ID" />
        <input className="input" type="text" placeholder="Phone Number" />
        <div>
          <button type="submit" className="request-btn">
            Request Call Back
          </button>
        </div>
      </form>
    </div>
  </>
)
export default HomePage
