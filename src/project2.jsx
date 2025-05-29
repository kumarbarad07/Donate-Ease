import React from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Project2 = (props) => {
  const location = useLocation();
  const data = props.Projects;

  return (
    <>

{/* projects section */}
      <section className='projects-section'>
        <Container>
          <Row className='mx-xl-5 px-xl-2 justify-content-center gap-3'>
            {
              data.map((e) => {
                return (
                  <Col xl="10" className='mb-3'>
                    <div className='d-md-flex'>
                      <div>
                        <img src={e.img1} className='prj-img' alt="" />
                      </div>
                      <div className='p-3 p-md-5 bg-white'>
                        <div className='prj-title mb-5'>
                          <a className='text-white rounded-1 project-title text-capitalize px-4 py-3 fw-semibold'>{e.title}</a>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                          <div>
                            <img src={e.img2} className='img-fluid rounded-5' alt="" />
                          </div>
                          <p className='fw-bold text-secondary text-capitalize'>{e.name}</p>
                        </div>
                        <p className='mt-3 text-capitalize fw-bold prj-detail fs-5'>{e.detail}</p>
                        <p className="d-flex justify-content-between flex-wrap">
                          <span className="fw-semibold text-black"><span className='text-secondary'>Raised of</span> {e.price}</span>
                          <span className="fw-semibold text-black">{e.percentage}</span>
                        </p>
                        <ProgressBar variant="success" now={e.percent} />
                        <p className='mt-3'><i className="fa-solid fa-calendar-days" style={{ color: "#07AB5F" }}></i> <span className='ms-2 fw-semibold'>25 february 2021</span></p>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>

          <div className="text-center mt-5">
            <a href="" className="btn viewmore-btn border border-secondary-subtle text-capitalize fw-semibold">view more projects <i className="fa-solid fa-arrow-right ms-2"></i></a>
          </div>
        </Container>
      </section>

    </>
  )
}

export default Project2
