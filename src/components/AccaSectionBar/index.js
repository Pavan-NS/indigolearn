import './index.css'

import {HiLightBulb, HiOutlineLightBulb, HiUsers, HiClock} from 'react-icons/hi'
import {MdLaptop, MdSecurity, MdContentPaste} from 'react-icons/md'
import {FaWpforms} from 'react-icons/fa'
import {BiUser, BiLockAlt} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import {AiTwotoneLike, AiFillDownSquare} from 'react-icons/ai'
import ReactPopUp from '../ReactPopup'

const AccaSection1 = () => (
  <div>
    <h1 className="cca">Why ACCA @ 1FIN?</h1>
    <hr />
    <div className="main-container">
      <div className="back-container">
        <div className="back1">
          <div className="cards-containers12">
            <HiLightBulb className="icon" />
            <h1>Conceptual</h1>
          </div>
          <div className="ui">
            <MdLaptop className="icons1" />
            <p className="p1">Regular Live Classes</p>
          </div>
          <div className="ui">
            <HiUsers className="icons1" />
            <p className="p1">Expert Faculty</p>
          </div>
          <div className="ui">
            <MdContentPaste className="icons1" />
            <p className="p1">Exam Oriented Content</p>
          </div>
          <div className="ui">
            <FaWpforms className="icons1" />
            <p className="p1">Dedicated Discussions Forms</p>
          </div>
          <div className="ui">
            <BiUser className="icons1" />
            <p className="p1">Continous Support</p>
          </div>
        </div>
      </div>
      <div className="back-container">
        <div className="back1">
          <div className="cards-containers12">
            <HiUsers className="icon" />
            <h1>Comprehensive</h1>
          </div>
          <div className="ui">
            <MdLaptop className="icons1" />
            <p className="p1">Exhaustive Q & A Bank</p>
          </div>
          <div className="ui">
            <MdContentPaste className="icons1" />
            <p className="p1">1000s of MCQs for practice</p>
          </div>
          <div className="ui">
            <HiClock className="icons1" />
            <p className="p1">Tests at regular intervals</p>
          </div>
          <div className="ui">
            <BsFiles className="icons1" />
            <p className="p1">Mock Exams</p>
          </div>
          <div className="ui">
            <HiOutlineLightBulb className="icons1" />
            <p className="p1">Analysis of Answer Sheets</p>
          </div>
        </div>
      </div>
      <div className="back-container">
        <div className="back1">
          <div className="cards-containers12">
            <MdSecurity className="icon" />
            <h1>Career Oriented</h1>
          </div>
          <div className="ui">
            <MdContentPaste className="icons1" />
            <p className="p1">Business Communication</p>
          </div>
          <div className="ui">
            <BiLockAlt className="icons1" />
            <p className="p1">Resume Building</p>
          </div>
          <div className="ui">
            <AiTwotoneLike className="icons1" />
            <p className="p1">Negotiation Skills</p>
          </div>
          <div className="ui">
            <AiFillDownSquare className="icons1" />
            <p className="p1">Mock Interviews</p>
          </div>
          <div className="ui">
            <FaWpforms className="icons1" />
            <p className="p1">Placement Services</p>
          </div>
        </div>
      </div>
    </div>
    <div className="popup-container7">
      <h1 className="live-h">
        Live classes start from late September, 2022.
        <ReactPopUp />
      </h1>
    </div>
    <div className="div-container">
      <img
        className="img5"
        alt="img"
        src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
      />
    </div>
  </div>
)
export default AccaSection1
