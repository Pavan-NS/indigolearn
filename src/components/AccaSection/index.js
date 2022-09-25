import './index.css'
import {GiOpenBook} from 'react-icons/gi'

import {MdAlarmOn, MdLaptopWindows} from 'react-icons/md'

import {AiFillCalendar} from 'react-icons/ai'

const AccaSection = () => (
  <>
    <div className="acca-section">
      <h1 className="cca">What is ACCA?</h1>
      <hr />
      <div className="card1">
        <ul className="ul-items">
          <li className="li-items">
            ACCA (Association of Chartered Certified Accountants) is a globally
            recognized accounting qualification offered by ACCA Global, UK
          </li>
          <li className="li-items">
            It provides unlimited career opportunities with MNCs and Big4s
          </li>
          <li className="li-items">
            A course which you can complete along with your graduation
          </li>
          <li className="li-items">
            It has 2 lakh + members & 5 lakh + students across 180+ countries
          </li>
        </ul>
      </div>
      {/* Desktop */}
      <div className="cards-container1">
        <div className="level-cards">
          <h1 className="level-h">Levels</h1>
          <div className="enter">
            <GiOpenBook />
            <p className="para">Three (13 papers)</p>
          </div>
        </div>
        <div className="level-cards">
          <h1 className="level-h">Duration</h1>
          <div className="enter">
            <MdAlarmOn />
            <p className="para">6-30 months</p>
          </div>
        </div>
        <div className="level-cards col-6">
          <h1 className="level-h">Exams</h1>
          <div className="enter">
            <MdLaptopWindows />
            <p className="para">Quarterly (Online)</p>
          </div>
        </div>
        <div className="level-cards col-6">
          <h1 className="level-h">Exemptions</h1>
          <div className="enter">
            <AiFillCalendar />
            <p className="para">Available</p>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="cards-container-mobile">
        <div className="level-cards1">
          <h1 className="level-h">Levels</h1>
          <div className="enter1">
            <GiOpenBook />
            <p className="para">Three (13 papers)</p>
          </div>
        </div>
        <div className="level-cards1">
          <h1 className="level-h">Duration</h1>
          <div className="enter1">
            <MdAlarmOn />
            <p className="para">6-30 months</p>
          </div>
        </div>
      </div>
      <div className="cards-container-mobile">
        <div className="level-cards1">
          <h1 className="level-h">Exams</h1>
          <div className="enter1">
            <MdLaptopWindows />
            <p className="para">Quarterly (Online)</p>
          </div>
        </div>
        <div className="level-cards1">
          <h1 className="level-h">Exemptions</h1>
          <div className="enter1">
            <AiFillCalendar />
            <p className="para">Available</p>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default AccaSection
