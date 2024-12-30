import React from "react";

function CommonForm() {
  return (
    <>
      {/* <div className="my-3 border p-3 rounded">
                <div className="mb-2" style={{fontSize : '20px'}}>Company Address</div>
                <div className="row mb-2">
                    <div className="col-12 col-md-6">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select className="form-select form-select-border" id="country">
                            <option value="United States">United States</option>
                            <option value="">- None -</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="address1" className="form-label">Address 1</label>
                        <input type="text" className="form-control" id="address1" placeholder="Address 1" />
                    </div>
                </div>

                <div className='row mb-2'>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="address2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="address2" placeholder="Address 2" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" placeholder="City" />
                    </div>
                </div>

                <div className='row mb-2'>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="state" className="form-label">State</label>
                        <select className="form-select form-select-border" id="state">
                            <option value="">- None -</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California ">California </option>
                        </select>
                    </div>

                    <div className='col-12 col-md-6'>
                        <label htmlFor="zip" className="form-label">ZIP code</label>
                        <input type="text" className="form-control" id="zip" placeholder="ZIP code" />
                    </div>
                </div>
            </div> */}

      <div className="row mb-2">
        <div className="col-12 col-md-6" style={{ margin: "5em 0em 1em 0em" }}>
          <label htmlFor="migrationPrepUtility" className="form-label">
            Migration Prep Utility
          </label>
          <input
            type="text"
            className="form-control"
            id="migrationPrepUtility"
            placeholder="Enter migration details"
          />
        </div>
      </div>

      {/* <div className="my-3 border p-3 rounded">
                <div className="row mb-2">
                    <div className="col-12 col-md-3">
                        <div className="light-gray p-2" style={{ borderRadius: '5px' }}>
                            <label htmlFor="revisionInfo" className="form-label mb-0 d-block">Revision information</label>
                            <div className="form-text">New revision</div>

                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <label htmlFor="revisionDetails" className="form-label">Revision Details</label>
                        <textarea className="form-control" id="revisionDetails" rows="3"></textarea>
                        <div className="form-text">Provide an explanation of the changes you are making. This will help other authors understand your motivations.</div>
                    </div>
                </div>
            </div> */}
    </>
  );
}

export default CommonForm;
