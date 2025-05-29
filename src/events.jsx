import React from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Events = (props) => {
  const location = useLocation();
  const eventdetail = props.Eventsinfo;

  return (
    <div>

{/* events section */}
      <section className="events-section mt-5">
        <Container>
          <Row className='justify-content-md-center gap-5'>
            {
              eventdetail.map((e) => {
                return (
                  <Col sm="10" lg="11" xl="10">
                    <Row className='px-2 mx-1 shadow-lg pt-3 pb-5 align-items-center justify-content-lg-evenly'>
                      <Col md="5" lg="2" xl="2" className=''>
                        <div>
                          <img src={e.ev_img} className='img-fluid' alt="" />
                        </div>
                      </Col>
                      <Col md="11" lg="9" xl="9">
                        <Row className='align-items-center ms-lg-1'>
                          <Col md="11" lg="8">
                            <ul className='d-md-flex gap-4 mt-4 mt-xl-0'>
                              <li>
                                <a href="" className='text-white rounded-1 project-title text-capitalize px-3 py-2 fw-semibold'>{e.ev_category}</a>
                              </li>
                              <li className='mt-4 mt-md-0'>
                                <a href="" className='text-secondary'><i className="fa-solid fa-location-dot" ></i> 25 Lokmany Hall, Pune</a>
                              </li>
                            </ul>
                            <div className='mt-4'>
                              <h4 className='text-capitalize'>{e.ev_title}</h4>
                              <p className='text-secondary mt-3'>{e.ev_info}</p>
                            </div>
                          </Col>
                          <Col md="6" lg="4">
                            <div className="text-lg-end mt-4 mt-lg-0">
                              <a href="" className="btn join-btn border border-secondary-subtle text-capitalize fw-semibold">join event <i className="fa-solid fa-arrow-right ms-2"></i></a>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                )
              })
            }

            <div className="text-center mt-5">
              <a href="" className="btn viewmore-btn border border-secondary-subtle text-capitalize fw-semibold">view more events <i className="fa-solid fa-arrow-right ms-2"></i></a>
            </div>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Events
