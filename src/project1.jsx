import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Project1 = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const data = props.Projects;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>

      {/* Hero Section */}
      <section className='projects-section'>
        <Container>
          <Row className='mx-xl-5 px-xl-2 justify-content-center'>
            {
              data.map((e) => {
                return (
                  <Col md="6" lg="4">
                    <figure className='bg-white'>
                      <img src={e.img1} className='img-fluid' alt="" />
                      <div className='prj-title'>
                        <a className='text-white rounded-1 project-title text-capitalize px-4 py-3 m-5 fw-semibold'>{e.title}</a>
                      </div>
                      <figcaption className='p-5'>
                        <div className='d-flex gap-4 align-items-center'>
                          <div>
                            <img src={e.img2} className='img-fluid rounded-5' alt="" />
                          </div>
                          <p className='fw-bold text-secondary text-capitalize'>{e.name}</p>
                        </div>
                        <p className='mt-3 text-capitalize fw-bold prj-detail'>{e.detail}</p>
                        <p className="d-flex justify-content-between flex-wrap">
                          <span className="fw-semibold text-black"><span className='text-secondary'>Raised of</span> {e.price}</span>
                          <span className="fw-semibold text-black">{e.percentage}</span>
                        </p>
                        <ProgressBar variant="success" now={e.percent} />
                        <p className='mt-3'><i className="fa-solid fa-calendar-days" style={{ color: "#07AB5F" }}></i> <span className='ms-2 fw-semibold'>25 february 2021</span></p>
                      </figcaption>
                    </figure>
                  </Col>
                )
              })
            }
          </Row>

          <div className="text-center mt-5">
            <a href="#" className="btn viewmore-btn border border-secondary-subtle text-capitalize fw-semibold">view more projects <i className="fa-solid fa-arrow-right ms-2"></i></a>
          </div>
        </Container>
      </section>

    </>
  )
}

export default Project1
