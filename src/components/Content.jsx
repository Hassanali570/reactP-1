function Content(){
    return(
        <>
          <div className="main container">
            <div className="con-section">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.</p>
                <div className="btn-section">
                    <button >Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shop-on">
                    <p>Also Available On</p>
                    <div className="flipcart">
                        <img src="images\flipkart.png" alt="flipkart image" />
                        <img src="images\amazon.png" alt="amazon image" />
                    </div>

                </div>
            </div>
            <div className="img-section">
                <img src="images\shoe_image.png" alt="Shoe Image" />

            </div>
          </div>
        </>
    );
}
export default Content;