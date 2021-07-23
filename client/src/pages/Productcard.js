import React from 'react'
import { getDetails } from '../actions/ProductAction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCommande, addLignecommande } from '../actions/cardAction'

const Productcard = ({product}) => {
  const dispatch = useDispatch()

    return (
        
              <div className="col-lg-3 col-md-4 mb-5">

                <div>
              <div className="view zoom overlay z-depth-2 rounded">
                <img className="img-fluid w-100" src={product.images} alt="Sample" />
                <a href="#!">
                  <div className="mask">
                    <img className="img-fluid w-100" src={product.images} />
                    <div className="mask rgba-black-slight" />
                  </div>
                </a>
              </div>
              <div className="text-center pt-4">
                <h5>{product.title}</h5>
                <p className="mb-2 text-muted text-uppercase small">{product.category_id.name}</p>
            
                <hr />
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                <h6 className="mb-3">{product.price}TND</h6>
                {
                        product.qteStock > 0
                        ? <h6 className="text-success">en stock</h6>
                        : <h6 className="text-danger">hors stock</h6>
                    }
                  </div>
                  <div style={{display:"flex" , justifyContent:"space-around"}}>
                <button type="button" className="btn btn-primary btn-sm mr-1 mb-3"><i className="fas fa-shopping-cart pr-2" />ajouter au panier</button>
                <button onClick={()=> dispatch(getDetails(product._id))} type="button" className="btn btn-light btn-sm mr-1 mb-3"><i className="fas fa-info-circle pr-2" /><Link to={{pathname:`/products/${product._id}`}}> details </Link> </button>
                </div>
              </div>
            </div>
          
                  {/*Card*/}
                  {/*<div className="card" >
                    <div className="view overlay">
                      <img src={product.images} className="card-img-top" alt="" />
                      <a>
                        <div className="mask rgba-white-slight" />
                      </a>
                    </div>
                    <div className="card-body text-center">
                      <a href className="grey-text">
                        <h5>{product.category_id.name}</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href className="dark-grey-text">{product.title}</a>
                        </strong>
                      </h5>
                        <h6 className="mb-3">{product.price}TND</h6>

                     
                    </div>
                    <div className="text-center pt-4">
                    <button type="button" className="btn btn-primary btn-sm mr-1 mb-2"><i className="fas fa-shopping-cart pr-2" />Add to cart</button>
                </div>
                  </div>*/}
                  {/*Card*/}

                </div>
        
    )
}

export default Productcard
