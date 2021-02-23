import React, {FC, useState} from "react"
import { Card, Form, CardBody, Row, Col } from "reactstrap"
import Dropzone from 'react-dropzone'
import { connect } from "react-redux"

import { Link } from "react-router-dom"

import { setDocuments } from "../../store/uploadDocuments/actions";

type ObjectImageType = {
  preview:string,
  formattedSize:number
}

type PropsType = {
  uploadFiles: (selectedFiles:Array<File>)=>void,
  documents: Array<File>
}

const UploadDocuments:FC<any> = ({uploadFiles,documents}) => {
  const [selectedFiles, setselectedFiles] = useState([])
  const [isArrayEmpty, setToggleArray] = useState(true)

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }
const handleOnClick = ()=> {
  uploadFiles(selectedFiles)
  setselectedFiles([])
  setToggleArray(!isArrayEmpty)



}
  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <Card>
      <CardBody>
        {isArrayEmpty ? <h1>some images be here</h1>:
        
        <Row>
          
          {documents.map((item,idx)=><Col key={idx}  md='2'><Card > <img    
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={item.name}
                                    src={item.preview}
                                  />  </Card>   </Col>
 )}

       

        </Row>}
      
       <Form>
       <Dropzone onDrop={acceptedFiles=>handleAcceptedFiles(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
                        <div className="dropzone">
                        <div
                          className="dz-message needsclick mt-2"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <div className="mb-3">
                            <i className="display-4 text-muted bx bxs-cloud-upload"/>
                          </div>
                          <h4>Drop files here or click to upload.</h4>
                        </div>
                      </div>


  )}
</Dropzone>
<div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        )
                      })}
                    </div>


       </Form>
       <div className="text-center mt-4">
                    <button
                      type="button"
                      className="btn btn-primary waves-effect waves-light"
                      onClick={handleOnClick}
                    >
                      Send Files
                    </button>
                  </div>


      </CardBody>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  documents: state.uploadDocuments.documents
})

const mapDispatchToProps = (dispatch) => ({
  uploadFiles:(files)=> dispatch(setDocuments(files))
})

export default connect(mapStateToProps, mapDispatchToProps) (UploadDocuments)
