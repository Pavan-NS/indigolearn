import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="button35">
          Enrol Now
        </button>
      }
    >
      <form className="form-container">
        <h1 className="home-heading">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>
        <input className="input1" type="text" placeholder="Email ID" />
        <input className="input1" type="text" placeholder="Phone Number" />
        <div>
          <button type="submit" className="request-btn">
            Request Call Back
          </button>
        </div>
      </form>
      s
    </Popup>
  </div>
)
export default ReactPopUp
