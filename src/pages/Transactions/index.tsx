import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row } from 'reactstrap'
import Activities from './Activities'
import cn from 'classnames'

const Transactions = () => {
    const [activeTab, setactiveTab] = useState("all")
    const  [statusChoosen, setStatusChoosen] = useState("Any status")
    const [searchItem, setSearchItem] = useState("Search")
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)

const handleButtonOnClick = () => {
  document.getElementById("dropdownMenu").classList.toggle("show")
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
                        <button onClick={handleButtonOnClick} className='dropbtn' >
                          <i className='icon-Flag' />
                       {statusChoosen}
                          <i className="icon-Arrow-Down"/>
                        </button>
                        <ul id="dropdownMenu" className='dropdown-content'>
                        
                          <li onClick={handleLiOnClick}>Any status</li>
                          <li onClick={handleLiOnClick}>Pending</li>
                          <li onClick={handleLiOnClick}>Overdue</li>
                          <li onClick={handleLiOnClick}>Complete</li>
                          
                        </ul>
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
            
                <Activities activeTab={activeTab} statusChoosen={statusChoosen} searchItem={searchItem}/>
            
            </Col>
          </Row>
        </Container>

           
        </div>
    )
}

export default Transactions
