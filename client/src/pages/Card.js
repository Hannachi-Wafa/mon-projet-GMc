import React from 'react'

const Card = () => {
    return (
        <div>
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-8">
            {/* Card */}
            <div className="card wish-list mb-3">
              <div className="card-body">
                <h5 className="mb-4">Cart </h5>
                <hr className="mb-4" />
                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample" />
                      <a href="#!">
                        <div className="mask waves-effect waves-light">
                          <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" />
                          <div className="mask rgba-black-slight waves-effect waves-light" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5>Red hoodie</h5>
                          <p className="mb-3 text-muted text-uppercase small">Shirt - red</p>
                          <p className="mb-2 text-muted text-uppercase small">Color: red</p>
                          <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                        </div>
                        <div>
                          <div className="def-number-input number-input safari_only mb-0 w-100">
                            <input className="quantity" value="1" type="number" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i className="fas fa-trash-alt mr-1" /> Remove item </a>
                          <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i className="fas fa-heart mr-1" /> Move to wish list </a>
                        </div>
                        <p className="mb-0"><span><strong>$35.99</strong></span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
       
      
          </div>
        
          <div className="col-lg-4">
            {/* Card */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="mb-3">The total amount of</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>$25.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                     
                    </div>
                    <span><strong>$53.98</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
              </div>
            </div>
           
          </div>
        </div>
    
        </div>
    )
}

export default Card
