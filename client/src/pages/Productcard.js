import React from 'react'

const Productcard = ({product}) => {
    return (
        
              <div className="col-lg-3 col-md-6 mb-4">
                  {/*Card*/}
                  <div className="card" >
                    {/*Card image*/}
                    <div className="view overlay">
                      <img src={product.images} className="card-img-top" alt="" />
                      <a>
                        <div className="mask rgba-white-slight" />
                      </a>
                    </div>
                    <div className="card-body text-center">
                      {/*Category & Title*/}
                      <a href className="grey-text">
                        <h5>{product.category_id.name}</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href className="dark-grey-text">{product.title}</a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>{product.price}TND</strong>
                      </h4>
                    </div>
                    {/*Card content*/}
                  </div>
                  {/*Card*/}
                </div>
        
    )
}

export default Productcard
