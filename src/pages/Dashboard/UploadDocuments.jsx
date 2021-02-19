import React from "react"
import { Card, Form, CardBody } from "reactstrap"

import { Link } from "react-router-dom"

const UploadDocuments = () => {
  return (
    <Card>
      <CardBody>
        <h1>some imagas be here</h1>

        <Form>
          <div className="dropzone">
            <div className="dz-message needsclick mt-2">
              <div className="mb-3">
                <i className="display-4 text-muted bx bxs-cloud-upload" />
              </div>
              <Link to="#">Drop files here or click to upload.</Link>
            </div>
          </div>

          <div className="dropzone-previews mt-3" id="file-previews"></div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default UploadDocuments
