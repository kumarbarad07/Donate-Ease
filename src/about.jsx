import React from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const About = (props) => {
  const location = useLocation();
  const teaminfo = props.Teamdetail;

  return (
    <div>

{/* about section */}
      <section className="about-section">
        <Container>
          <Row className='justify-content-center'>
            <Col sm="11" md="9" lg="7" xl="5" className='ms-xl-5 pe-xl-4'>
              <div>
                <div className="category-container2 mt-5">
                  <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">about us</p>
                  <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> about us</p>
                </div>
                <h3 className='text-capitalize fw-bold display-6'>we help how to improve product marketing</h3>
                <p className='text-secondary'>Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis quasi architecto beatae.</p>
                <ul className='list-unstyled mt-4'>
                  <li className='d-flex gap-3 mb-2'>
                    <div><i className="fa-solid fa-check bg-success p-2 rounded-circle text-white"></i></div> <span><h4 className='text-dark text-capitalize fw-bold'>highest success rates</h4><p className='text-secondary'>Quis autem vel eum iure reprehenderit quin</p></span>
                  </li>
                  <li className='d-flex gap-3 mb-2'>
                    <div><i className="fa-solid fa-check bg-success p-2 rounded-circle text-white"></i></div> <span><h4 className='text-dark text-capitalize fw-bold'>raise funds with crowdfunding</h4><p className='text-secondary'>Voluptate esse quam nihil molestiae consequatur</p></span>
                  </li>
                  <li className='d-flex gap-3'>
                    <div><i className="fa-solid fa-check bg-success p-2 rounded-circle text-white"></i></div> <span><h4 className='text-dark text-capitalize fw-bold'>millions in funding</h4><p className='text-secondary'>Accusan tium dolore dantiumy totam apeam</p></span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="10" lg="8" xl="6" className="position-relative">
              <img
                src="/Images/about-gallery-pattern.png"
                alt="pattern"
                className="position-absolute end-0 pattern-img"
              />

              <img
                src="/Images/about-gallery-1.jpg"
                alt="Smiling Woman"
                className="img-fluid rounded main-img ms-xl-5"
              />

              <img
                src="/Images/about-gallery-2.jpg"
                alt="Boy and Girl"
                className="img-fluid rounded small-img" data-aos="fade-up"
              />
            </Col>
          </Row>
        </Container>
      </section>

{/* features section */}
      <section className='features-section'>
        <div className="category-container2 d-flex justify-content-center">
          <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">features</p>
          <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> what we do</p>
        </div>
        <h2 className='display-6 fw-bold text-center'>Why choose us</h2>
        <Container>
          <Row>
            <Col md="6" lg="4">
              <div className="hover-card-container">
                <div className="hover-card shadow-lg">
                  <div className="icon mb-3">
                    <i className="fa-solid fa-credit-card fa-2xl text-success"></i>
                  </div>
                  <h5 className="fw-bold text-capitalize">fast & easy payouts</h5>
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
                  </p>
                  <div className="arrow-btn mt-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="hover-card-container">
                <div className="hover-card shadow-lg">
                  <div className="icon mb-3">
                    <i className="fa-solid fa-file-invoice-dollar fa-2xl text-success"></i>
                  </div>
                  <h5 className="fw-bold text-capitalize">global payment processing</h5>
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
                  </p>
                  <div className="arrow-btn mt-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="hover-card-container">
                <div className="hover-card shadow-lg">
                  <div className="icon mb-3">
                    <i className="fa-solid fa-money-bill fa-2xl text-success"></i>
                  </div>
                  <h5 className="fw-bold text-capitalize">many payment options</h5>
                  <p className="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
                  </p>
                  <div className="arrow-btn mt-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* members section */}
      <section className="members-section">
        <Container>
          <Row className='align-items-center mx-xl-3'>
            <Col lg="8">
              <div>
                <div className="category-container2">
                  <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">members</p>
                  <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> exclusive team</p>
                </div>
                <h2 className='display-6 fw-bold text-capitalize'>meet professional team</h2>
              </div>
            </Col>
            <Col lg="4" className='text-xl-end'>
              <div>
                <a href="#" className="btn donate-btn ms-3 fw-bold text-capitalizr">join our team <i className="fa-solid fa-arrow-right ms-2"></i></a>
              </div>
            </Col>
          </Row>

          <Row className='mt-5'>
            <div className="carousel-2 owl-carousel owl-theme">
              {
                teaminfo.map((e) => {
                  return(
                    <Col>                      
                      <figure>
                        <img src={e.t_img} className='img-fluid' alt="" />
                        <figcaption className="text-capitalize text-center detail bg-white shadow-sm p-1 position-relative mx-xl-3">
                          <h4 className='news-title fw-bold'>{e.t_name}</h4>
                          <p className="position">{e.t_position}</p>
                        </figcaption>
                      </figure>
                    </Col>
                  )
                })
              }
            </div>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default About
