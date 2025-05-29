import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';

const newsData = [
  {
    title: 'Live Stream From Awwwards Berlin Showcasing Was Trends Design China Money Dating',
    date: '25 February 2021',
    author: 'Funden',
    image: '/Images/01 (10).jpg',
  },
  {
    title: 'User Memory Design How To Design For Experiences That LastLive Stream From Awwwards',
    date: '25 February 2021',
    author: 'Funden',
    image: '/Images/02 (10).jpg',
  },
  {
    title: 'User Memory Design How To Design For Experiences That LastLive Stream From Awwwards',
    date: '25 February 2021',
    author: 'Funden',
    image: '/Images/03 (9).jpg',
  },
  {
    title: 'Roadmap To Building A Delightful Onboarding Experience For Mobile App Users Patterns Canvas',
    date: '25 February 2021',
    author: 'Funden',
    image: '/Images/03 (10).jpg',
  },
];

const News = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const paginatedData = newsData.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  return (
  <>

{/* news section */}
    <section className="news-section">
      <Container className="py-5">
        <Row className="g-5">          
          <Col lg={8}>
            <Row className="g-5">
              {paginatedData.map((news, index) => (
                <Col lg={12} key={index}>
                  <Card className="border-0 overflow-hidden">
                    <div className="position-relative">
                      <Card.Img variant="top" src={news.image} className="img-fluid" />
                    </div>

                    <div className="bg-white p-4 news-detail position-relative mx-2 mx-md-5 shadow-lg">
                      <div className="d-flex align-items-center gap-3 mb-2 text-muted small">
                        <span>
                          <i className="fa-solid fa-user me-1 text-success"></i> {news.author}
                        </span>
                        <span>
                          <i className="fa-solid fa-calendar-days me-1 text-success"></i> {news.date}
                        </span>
                      </div>

                      <Card.Title className="news-title fw-bold fs-4">
                        {news.title}
                      </Card.Title>
                      <div className="mt-4">
                        <Button className="btn read-more border border-secondary-subtle fw-semibold text-capitalize mt-3 shadow-sm">
                          Read More <i className="fa-solid fa-arrow-right-long"></i>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>

              ))}
            </Row>
          </Col>

          <Col lg={4}>
            <div className="p-3 border rounded bg-light">
              <h4 className="mb-3">Categories</h4>
              <hr />
              <ul className="list-unstyled px-2">
                <li className='d-flex align-items-center justify-content-between'>Business (5) <i className="fa-solid fa-arrow-right"></i></li>
                <li className='d-flex align-items-center justify-content-between'>Construction (7) <i className="fa-solid fa-arrow-right"></i></li>
                <li className='d-flex align-items-center justify-content-between'>Creative (9) <i className="fa-solid fa-arrow-right"></i></li>
                <li className='d-flex align-items-center justify-content-between'>International (2) <i className="fa-solid fa-arrow-right"></i></li>
                <li className='d-flex align-items-center justify-content-between'>Management (5) <i className="fa-solid fa-arrow-right"></i></li>
                <li className='d-flex align-items-center justify-content-between'>Technology (2) <i className="fa-solid fa-arrow-right"></i></li>
                <li className='d-flex align-items-center justify-content-between'>Uncategorized (3) <i className="fa-solid fa-arrow-right"></i></li>
              </ul>
            </div>

            <div className="p-3 border rounded bg-light mt-5 shadow-sm">
              <h4 className="mb-3 text-capitalize">latest news</h4>
              <hr />
              <ul className="list-unstyled px-2">
                <li className='d-flex align-items-center justify-content-lg-between gap-3 mb-3'>
                  <div>
                    <img src="/Images/widget-01.jpg" alt="" />
                  </div>
                  <div className='lh-1'>
                    <p className='text-capitalize fw-semibold'>build seamless spreads imports experience</p>
                    <p><i className="fa-solid fa-calendar-days" style={{ color: "#07AB5F" }}></i> 25 May 2021</p>
                  </div>
                </li>
                <li className='d-flex align-items-center justify-content-lg-between gap-3 mb-3'>
                  <div>
                    <img src="/Images/widget-02.jpg" alt="" />
                  </div>
                  <div className='lh-1'>
                    <p className='text-capitalize fw-semibold'>creating online environ work well older</p>
                    <p><i className="fa-solid fa-calendar-days" style={{ color: "#07AB5F" }}></i> 25 May 2021</p>
                  </div>
                </li>
                <li className='d-flex align-items-center justify-content-lg-between gap-3'>
                  <div>
                    <img src="/Images/widget-03.jpg" alt="" />
                  </div>
                  <div className='lh-1'>
                    <p className='text-capitalize fw-semibold'>signs website feelore haunted house</p>
                    <p><i className="fa-solid fa-calendar-days" style={{ color: "#07AB5F" }}></i> 25 May 2021</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>


        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            {[...Array(totalPages)].map((_, idx) => (
              <Pagination.Item
                key={idx}
                active={idx + 1 === activePage}
                onClick={() => setActivePage(idx + 1)}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>

        <Row>

        </Row>
      </Container>
    </section>
    </>
  );
}

export default News
