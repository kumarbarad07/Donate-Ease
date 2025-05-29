import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const CompanyOverview = () => {
  const location = useLocation();

  return (
    <div>

{/* whoweare section */}
      <section className="whoweare-section">
        <Container>
          <Row className='justify-content-center gap-3'>
            <Col md="9" lg="5">
              <div>
                <img src="/Images/about-three.jpg" className='img-fluid' alt="" />
              </div>
            </Col>
            <Col md="10" lg="6" className='px-4'>
              <div>
                <div className="category-container2">
                  <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">who we are</p>
                  <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> who we are</p>
                </div>
                <p className='text-capitalize display-5 fw-semibold'>we help how to improve product marketing</p>
                <p className='text-secondary'>Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis quasi architecto beatae.</p>
                <p className='text-secondary'>Unde omnis iste natus voluptatem accusan tium dolore dtiumy totam rem apeam eaqu quaventore veritatis</p>
                <ul className='list-unstyled mt-4'>
                  <li className='d-flex gap-3'>
                    <div><i className="fa-solid fa-check text-success"></i></div> <p className='text-secondary text-capitalize'>highest success rates</p>
                  </li>
                  <li className='d-flex gap-3'>
                    <div><i className="fa-solid fa-check text-success"></i></div> <p className='text-secondary text-capitalize'>raise funds with crowdfunding</p>
                  </li>
                  <li className='d-flex gap-3'>
                    <div><i className="fa-solid fa-check text-success"></i></div> <p className='text-secondary text-capitalize'>millions in funding</p>
                  </li>
                </ul>

                <div className="d-none d-lg-block donate-overlay-button">
                  <a href="#" className="btn donate-btn ms-3 fw-bold text-capitalize">
                    learn more <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

{/* categories section */}
      <section className="category2">
        <Container className="px-5">
          <Row>
            <Col>
              <div className="category-container">
                <p className="shadows-into-light text-secondary fw-semibold category-text">Category</p>
                <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> what we do</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="display-4 fw-bold">Popular Categories</p>
            </Col>
            <Col md="auto">
              <a href="#" className="btn donate-btn fw-bold text-capitalize">
                view all category <i className="fa-solid fa-chevron-right"></i>
              </a>
            </Col>
          </Row>
          <Row className="g-4 pt-4">
            <Col md="6" xl="4" className="category-box" data-aos="fade-up">
              <div className="d-flex gap-4 justify-content-center p-3 bg-white shadow-lg align-items-center">
                <div>
                  <i className="fa-solid fa-book-open-reader text-success fa-2xl"></i>
                </div>
                <div>
                  <h3 className="category-heading">Education</h3>
                  <p>School, college & University</p>
                </div>
              </div>
            </Col>

            <Col md="6" xl="4" className="category-box" data-aos="fade-up" data-aos-duration="1400">
              <div className="d-flex gap-4 justify-content-center p-3 bg-white shadow-lg align-items-center">
                <div>
                  <i className="fa-solid fa-stethoscope text-success fa-2xl"></i>
                </div>
                <div>
                  <h3 className="category-heading">Medical & Health</h3>
                  <p>School, college & University</p>
                </div>
              </div>
            </Col>

            <Col md="6" xl="4" className="category-box" data-aos="fade-up" data-aos-duration="1800">
              <div className="d-flex gap-4 justify-content-center p-3 bg-white shadow-lg align-items-center">
                <div>
                  <i className="fa-solid fa-shirt text-success fa-2xl"></i>
                </div>
                <div>
                  <h3 className="category-heading">Clothes</h3>
                  <p>School, college & University</p>
                </div>
              </div>
            </Col>

            <Col md="6" xl="4" className="category-box" data-aos="fade-up" data-aos-duration="2200">
              <div className="d-flex gap-4 justify-content-center p-3 bg-white shadow-lg align-items-center">
                <div>
                  <i className="fa-solid fa-video text-success fa-2xl"></i>
                </div>
                <div>
                  <h3 className="category-heading">Video & Films</h3>
                  <p>School, college & University</p>
                </div>
              </div>
            </Col>

            <Col md="6" xl="4" className="category-box" data-aos="fade-up" data-aos-duration="2600">
              <div className="d-flex gap-4 justify-content-center p-3 bg-white shadow-lg align-items-center">
                <div>
                  <i className="fa-solid fa-microchip text-success fa-2xl"></i>
                </div>
                <div>
                  <h3 className="category-heading">Technology</h3>
                  <p>School, college & University</p>
                </div>
              </div>
            </Col>

            <Col md="6" xl="4" className="category-box" data-aos="fade-up" data-aos-duration="3000">
              <div className="d-flex gap-4 justify-content-center p-3 bg-white shadow-lg align-items-center">
                <div>
                  <i className="fa-solid fa-leaf text-success fa-2xl"></i>
                </div>
                <div>
                  <h3 className="category-heading">Organic Foods</h3>
                  <p>School, college & University</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

{/* features section */}
      <section className='whatwedo-section'>
        <Container className='px-xl-5'>
          <Row className='justify-content-md-center justify-content-xl-evenly align-items-lg-center'>
            <Col md="10" lg="4">
              <div>
                <div className="category-container">
                  <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">features</p>
                  <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> what we do</p>
                </div>
                <h3 className='text-capitalize display-5 fw-semibold'>why choose us</h3>
                <ul className='list-unstyled mt-5'>
                  <li className='d-flex gap-4 mb-3'>
                    <div>
                      <i className="fa-solid fa-credit-card fa-2xl text-success flip-left-hover"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-capitalize text-dark">fast & easy payouts</h5>
                      <p className="text-muted">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusan doloremque
                      </p>
                    </div>
                  </li>
                  <li className='d-flex gap-4 mb-3'>
                    <div>
                      <i class="fa-solid fa-money-check-dollar fa-2xl text-success flip-left-hover"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-capitalize text-dark">global payment processing</h5>
                      <p className="text-muted">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusan doloremque
                      </p>
                    </div>
                  </li>
                  <li className='d-flex gap-4'>
                    <div>
                      <i className="fa-solid fa-money-bill fa-2xl text-success flip-left-hover"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-capitalize text-dark">many payment options</h5>
                      <p className="text-muted">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusan doloremque
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="10" lg="7">
              <div>
                <img src="/Images/02 (2).jpg" className='img-fluid' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default CompanyOverview
