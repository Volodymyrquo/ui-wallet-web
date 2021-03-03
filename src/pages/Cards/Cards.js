import React, { useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link, withRouter } from "react-router-dom"
import Preloader from "../../components/Common/Preloader"
import { useDispatch, useSelector } from "react-redux"
import { getCards } from "../../store/actions"

const Cards = () => {
  const dispatch = useDispatch()
  const fields = useSelector(state => state.cardsList.fields)
  const cards = useSelector(state => state.cardsList.cards)
  const isFetching = useSelector(state => state.cardsList.isFetching)

  const paginationOption = {
    custom: true,
    totalSize: cards.length,
    sizePerPage: 10,
  }
  useEffect(() => {
    dispatch(getCards())
  }, [getCards])

  const cardsListColumns = fields.map(item => ({
    dataField: item.key,
    text: item.label,
    sort: true,
  }))
  return (
    <React.Fragment>
      {isFetching ? (
        <Preloader />
      ) : (
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Home" breadcrumbItem="Cards" />
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <div className="text-right">
                      <Link to="/cardorder">
                        <Button
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                        >
                          New card
                        </Button>
                      </Link>
                    </div>

                    <PaginationProvider
                      pagination={paginationFactory(paginationOption)}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={cards || []}
                          columns={cardsListColumns}
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
                                      classes={
                                        "table table-centered table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row className="align-items-md-center mt-30">
                                <Col className="pagination pagination-rounded justify-content-center mb-2 inner-custom-pagination">
                                  <PaginationListStandalone
                                    {...paginationProps}
                                  />
                                </Col>
                              </Row>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </React.Fragment>
  )
}

export default withRouter(Cards)
