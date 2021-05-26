import React, { useState,FC } from 'react'
import {Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap'
import Activities from './Activities'
import cn from 'classnames'
import { addDays } from 'date-fns';
import {v4 as uuidv4} from 'uuid'

import { DateRangePicker } from 'react-date-range';

export type DateRangeType = {
  startDate: Date
  endDate: Date
  key: string
}

const Transactions:FC = () => {
    const [activeTab, setactiveTab] = useState("all")
    const  [statusChoosen, setStatusChoosen] = useState("Any status")
    const [searchItem, setSearchItem] = useState("Search")
    const [isOpenStatusMenu,setIsOpenStatusMenu] = useState(false)
    const [isOpenCalendarMenu,setIsOpenCalendarMenu] = useState(false)
    const [dateRange, setDateRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);

const handleButtonOnClick = () => {
  setIsOpenStatusMenu(!isOpenStatusMenu)
}

const handleStatusButtonOnBlur = ()=> {
  setIsOpenStatusMenu(!isOpenStatusMenu)

}


const handleCalendarOnClick = () => {
  setIsOpenCalendarMenu(!isOpenCalendarMenu)
}

const handleCalendarOnBlur = ()=> {
  setIsOpenCalendarMenu(false)

}


const handleLiOnClick = (e) => {
  
  setStatusChoosen(e.target.innerText)
  setIsOpenStatusMenu(!isOpenStatusMenu)
}
const handleSearchOnChange = (e) => {
  setSearchItem(e.target.value)

}

const statusMenu = ['Any status', 'Pending', 'Overdue','Complete']


    return (
        <div className="page-content" >
            <Container fluid style={{paddingTop:'0'}}>
            <Row>
          <Col lg={2} >
          <Nav pills className="table-bg-tab rounded" role="tablist">
              <NavItem style={{width: "65px"}}>
                <NavLink
                  className={cn({ active: activeTab === "all" })}
                  onClick={() => {
                    setactiveTab("all")
                  }}
                 style={{paddingLeft:"25px"}}
                >
                   All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cn({ active: activeTab === "incomes" })}
                  onClick={() => {
                    setactiveTab("incomes")
                  }}
                >
                  Incomes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cn({ active: activeTab === "expenses" })}
                  onClick={() => {
                    setactiveTab("expenses")
                  }}
                >
                  Expenses
                </NavLink>
              </NavItem>
            </Nav>

          </Col>

          <Col lg={2}>
                      <div
                        className='dropdown'
                      >
                        <button onClick={handleButtonOnClick}  className='dropbtn' onBlur={handleStatusButtonOnBlur}  >
                          <i className='icon-Flag' />
                       {statusChoosen}
                          <i className="icon-Arrow-Down"/>
                        </button>
                        <ul id="dropdownMenu"  className={cn('dropdown-content',`${isOpenStatusMenu?'show':null}`)}  >
                          {statusMenu.map(status => <li  key={uuidv4()} onClick={handleLiOnClick} onBlur={handleStatusButtonOnBlur}  >{status}</li>)}
                        </ul>
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className='dropdown'>
                      <button  className='dropbtn-calendar' onClick={handleCalendarOnClick}   >
                          <i className='icon-Calendar' />
                        { `${dateRange[0].startDate.toDateString().slice(4)} - ${dateRange[0].endDate.toDateString().slice(4)}`}
                          <i className="icon-Arrow-Down"/>
                                                  </button>

                      </div>
                      <div id='dropdownDatePicker' className={cn('dropdown-content',`${isOpenCalendarMenu?'show':null}`)} onBlur={handleCalendarOnBlur} >
                      <DateRangePicker
        ranges={dateRange}
        onChange={item => setDateRange([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        direction="horizontal"
      />
                      </div>
                    </Col>
          <Col lg={2}>
            <form>
          <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={searchItem}
                  onChange={handleSearchOnChange}
                />
              </div>
            </form>
          </Col>
          <Col lg={2}>
            <Container className='table-selected-container'>
            <div className='table-selected-item' >
              <span>
                   2
              </span>
              
            </div>
            <span className='table-container-txt '>
            selected

            </span>
            <div className='table-trash'>
            <button >
              <i className='icon-Trash' />
            </button>

            </div>

            </Container>
          </Col>
        </Row>
            <Row>
            <Col lg="12">
            
                <Activities activeTab={activeTab} statusChoosen={statusChoosen} searchItem={searchItem} dateRange={dateRange}/>
            
            </Col>
          </Row>
        </Container>

           
        </div>
    )
}

export default Transactions
