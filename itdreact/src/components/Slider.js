import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
      <div className="carousel-item ">
          <img src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?ga=GA1.1.481622943.1744909499&semt=ais_hybrid&w=740" className="d-block w-100" alt="Slide 2"  style={{maxHeight:"650px"}}/>
        </div>
        <div className="carousel-item active">
          <img src="https://img.freepik.com/free-psd/modern-sales-banner-template_23-2148995447.jpg?ga=GA1.1.481622943.1744909499&semt=ais_hybrid&w=740" className="d-block w-100" alt="Slide 3"  style={{maxHeight:"650px"}}/>
        </div>
        <div className="carousel-item ">
          <img src="https://img.freepik.com/free-vector/horizontal-banner-template-india-independence-day-celebration_23-2150602622.jpg?ga=GA1.1.481622943.1744909499&semt=ais_hybrid&w=740" className="d-block w-100" alt="Slide 1" style={{maxHeight:"650px"}} />
        </div>
       
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
