import Image from "next/image"
const Slider=()=>(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image
        src="/work.jpg"
        alt="us working"
        width={800}
        height={200}
       
      />
       <div class="carousel-caption d-none d-md-block">
    <h5>Our Engineers</h5>
    <p>Our Engineers are dedicated to deliver within the provided timelines</p>
  </div>
    </div>
    <div className="carousel-item">
    <Image
        src="/work.jpg"
        alt="us working"
        width={800}
        height={200}
        className="d-block w-100" 
       
      />
      
      <h5>Our Products</h5>
    <p>We offer a wide array of high quality products and services</p>
    </div>
    <div className="carousel-item">
    <Image
        src="/work.jpg"
        alt="us working"
        width={800}
        height={200}
        className="d-block w-100" 
       
      />
      
      <h5>Sales</h5>
    <p>Our sales team are always there to offer you the best advice on the products we offer and prices</p>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
)
export default Slider;
