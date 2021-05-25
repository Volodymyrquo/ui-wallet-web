import React, { useState,FC } from 'react'
import {Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap'
import Activities from './Activities'
import cn from 'classnames'
import { addDays } from 'date-fns';

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
    const [dateRange, setDateRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);

const handleButtonOnClick = () => {
  document.getElementById("dropdownMenu").classList.toggle("show")
}

const handleStatusButtonOnBlur = ()=> {
  document.getElementById("dropdownMenu").classList.remove("show")

}


const handleCalendarOnClick = () => {
  document.getElementById("dropdownDatePicker").classList.toggle("show")
}

const handleCalendarOnBlur = ()=> {
  document.getElementById("dropdownDatePicker").classList.remove("show")

}



const handleLiOnClick = (e) => {
  
  setStatusChoosen(e.target.innerText)
  document.getElementById("dropdownMenu").classList.toggle("show")
}
const handleSearchOnChange = (e) => {
  setSearchItem(e.target.value)

}


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
                        <button onClick={handleButtonOnClick}  className='dropbtn' >
                          <i className='icon-Flag' />
                       {statusChoosen}
                          <i className="icon-Arrow-Down"/>
                        </button>
                        <ul id="dropdownMenu" className='dropdown-content'>
                        
                          <li onClick={handleLiOnClick} onBlur={handleStatusButtonOnBlur}  >Any status</li>
                          <li onClick={handleLiOnClick} onBlur={handleStatusButtonOnBlur}  >Pending</li>
                          <li onClick={handleLiOnClick}  onBlur={handleStatusButtonOnBlur} >Overdue</li>
                          <li onClick={handleLiOnClick}onBlur={handleStatusButtonOnBlur}  >Complete</li>
                          
                        </ul>
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className='dropdown'>
                      <button  className='dropbtn-calendar' onClick={handleCalendarOnClick} >
                          <i className='icon-Calendar' />
            
                        { `${dateRange[0].startDate.toDateString().slice(4)} - ${dateRange[0].endDate.toDateString().slice(4)}`}
                          <i className="icon-Arrow-Down"/>
                                                  </button>

                      </div>
                      <div id='dropdownDatePicker' className='dropdown-content' onBlur={handleCalendarOnBlur} >
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
