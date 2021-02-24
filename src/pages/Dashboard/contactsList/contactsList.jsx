import React from "react"
import BootstrapTable from "react-bootstrap-table-next"
import { Card, CardBody, Col, Row } from "reactstrap"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import contactsListColumns from "./contactsListColumns"

const ContactsList = () => {
  const paginationOption = {
    custom: true,
    totalSize: 20,
    sizePerPage: 5,
  }
  const types = []
  return (
    <Card>
      <CardBody>
        <PaginationProvider pagination={paginationFactory(paginationOption)}>
          {({ paginationProps, paginationTableProps }) => (
            <ToolkitProvider
              keyField="id"
              data={types || []}
              columns={contactsListColumns()}
              bootstrap4
              search
            >
              {toolkitProps => (
                <React.Fragment>
                  <Row className="mb-2">
                    <Col sm="4">
                      <div className="search-box mr-2 mb-2 d-inline-block"></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl="12">
                      <div className="table-responsive">
                        <BootstrapTable
                          responsive
                          bordered={false}
                          striped={false}
                          classes={"table table-centered table-nowrap"}
                          headerWrapperClasses={"thead-light"}
                          {...toolkitProps.baseProps}
                          {...paginationTableProps}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-md-center mt-30">
                    <Col className="pagination pagination-rounded justify-content-center mb-2 inner-custom-pagination">
                      <PaginationListStandalone {...paginationProps} />
                    </Col>
                  </Row>
                </React.Fragment>
              )}
            </ToolkitProvider>
          )}
        </PaginationProvider>
      </CardBody>
    </Card>
  )
}

export default ContactsList
