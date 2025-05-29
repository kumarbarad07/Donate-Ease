import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TeamMember = (props) => {
  const location = useLocation();
  const teaminfo = props.Teammembers;

  return (
    <>

{/* team-members section */}
      <section className="teammembers-section">
        <Container className='px-lg-5'>
          <Row className='mt-5 gy-3'>
            {
              teaminfo.map((e) => {
                return (
                  <Col md="6" lg="4">
                    <figure>
                      <img src={e.t_img} className='img-fluid' alt="" />
                      <figcaption className="text-capitalize text-center detail1 bg-white shadow-lg p-2 mx-lg-5 position-relative">
                        <h4 className='news-title fw-bold'>{e.t_name}</h4>
                        <p className="position">{e.t_position}</p>
                      </figcaption>
                    </figure>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
        <div className='text-center my-5'>
          <a href="/contact" className="btn donate-btn ms-3 fw-bold text-capitalizr">join our team <i className="fa-solid fa-arrow-right ms-2"></i></a>
        </div>
      </section>
    </>
  )
}

export default TeamMember
