import React from 'react'
import { useSelector } from 'react-redux';
const DetailsProduct = ({match}) => {

    const details = useSelector(state => state.productReducer.Products.find(el=> el._id === match.params.prodId))
    
    return (
       <div>

        <main className="mt-5 pt-4">
        <div className="container dark-grey-text mt-5">
          {/*Grid row*/}
          <div className="row wow fadeIn">
            {/*Grid column*/}

            <div className="col-md-6 mb-4">
              <img src={details.images} className="img-fluid" alt="" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              {/*Content*/}
              <div className="p-4" >
               
                <h4 className="fas">{details.title}</h4>

                <div>
                <h6 >{details.price}TND</h6>
                {
                        details.qteStock > 0
                        ? <h6 className="text-success">{details.etat}</h6>
                        : <h6 className="text-danger">hors stock</h6>
                    }
                  </div>               

                <p className="lead font-weight-bold">Description</p>

                <p>{details.description}</p>
                <form className="d-flex justify-content-left">
                  {/* Default input */}
                  <input type="number" defaultValue={1} aria-label="Search" className="form-control" style={{width: '100px'}} />
                  <button className="btn btn-primary btn-md my-0 p" type="submit">ajouter au panier
                    <i className="fas fa-shopping-cart ml-1" />
                  </button>
                </form>
              </div>
              {/*Content*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
          <hr />
          {/*Grid row*/}
         </div>
      </main>

       </div>
       )
}

export default DetailsProduct
