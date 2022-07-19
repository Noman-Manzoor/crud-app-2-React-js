import React from 'react'

export default function Modal() {
  return (
    <div>
    <div
      className="modal fade"
      id="exampleModal2"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Enter the details Below
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-12">
                <label htmlFor="inputname8" className="form-label">
                  first Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname8"
                  value={"nomi"}
                />
              </div>
              
              <div className="col-md-12">
                <label htmlFor="inputname4" className="form-label">
                  last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  placeholder=""
                />
              </div>
              <button type="submit" className="btn btn-primary">
              Save Record
            </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
