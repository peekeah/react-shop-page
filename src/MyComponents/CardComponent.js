import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CardComponent() {
  return (
    <main>
      <div className="container-fluid bg-dark text-light title-box d-flex flex-column justify-content-center align-items-center ">
        <div className="title" style={{ fontSize: 50, textWeight: "bold" }}>
          Shop in style
        </div>
        <div className="text-secondary">With this shop homepage template</div>
      </div>
      <div className="container d-flex flex-wrap my-5">
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-center"><strong>Fancy Product</strong></h5>
              <p className="card-text text-center">$40.00 - $80.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title text-center"><strong>Special Item</strong></h5>
              <p className="card-text text-center">
                <div>
                  <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                </div>
                <strike>$20.00</strike> $18.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          <div className="text-sale bg-dark text-light col-2 text-center">Sale</div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title text-center"><strong>Sale Item</strong></h5>
              <p className="card-text text-center">
                
              <strike>$50.00</strike> $25.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          <div className="text-sale bg-dark text-light col-2 text-center">Sale</div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title text-center"><strong>Popular Item</strong></h5>
              <p className="card-text text-center">
                <div>
                  <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                </div>
              $40.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          <div className="text-sale bg-dark text-light col-2 text-center">Sale</div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title text-center"><strong>Sale Item</strong></h5>
              <p className="card-text text-center">
                
              <strike>$50.00</strike> $25.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          <div className="text-sale bg-dark text-light col-2 text-center">Sale</div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-center"><strong>Fancy Product</strong></h5>
              <p className="card-text text-center">$120.00 - $280.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title text-center"><strong>Special Item</strong></h5>
              <p className="card-text text-center">
                <div>
                  <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                </div>
                <strike>$20.00</strike> $18.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          <div className="text-sale bg-dark text-light col-2 text-center">Sale</div>
          </div>
        </div>
        <div className="col-3 p-3">
          <div className="card ">
            <img src="https://images.unsplash.com/photo-1504803900752-c2051699d0e8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxsYW5kc2NhcGV8fHx8fHwxNjQ3NjIzNDE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title text-center"><strong>Popular Item</strong></h5>
              <p className="card-text text-center">
                <div>
                  <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                </div>
              $40.00</p>
            </div>
              <div className="d-flex justify-content-center">
                <a href="/" className="btn btn-outline-dark my-4">View Options</a>
              </div>
          <div className="text-sale bg-dark text-light col-2 text-center">Sale</div>
          </div>
        </div>
        
      </div> 
    </main>
  )
}
