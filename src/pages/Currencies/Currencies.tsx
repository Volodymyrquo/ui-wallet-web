import React from "react"
import { Container } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Currencies = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Exchange" />
        </Container>
      </div>
    </>
  )
}

export default Currencies
