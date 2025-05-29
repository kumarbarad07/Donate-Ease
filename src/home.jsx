import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Home = (props) => {
    const data = props.Projects1;
    const data1 = props.Partners;
    const data2 = props.Blog;
    const location = useLocation();


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <React.Fragment>

{/* categories section */}
            <section className="category">
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

{/* about-us section */}
            <section className="about-us">
                <Container className="px-lg-5">
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6" >
                            <img src="Images/about-one.jpg" className="img-fluid" alt="" />
                        </Col>
                        <Col md="10" lg="5" className="offset-xl-1 px-xl-5">
                            <div className="category-container2">
                                <p className="shadows-into-light text-secondary fw-semibold category-text">About Us</p>
                                <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> who we are</p>
                            </div>
                            <div>
                                <h3 className="text-capitalize display-5 fw-semibold">why choose us</h3>
                                <p className='fs-5 mt-3 mt-xl-4'>Sedut perspiciatis unde omnis iste natus voluptatem accusantium dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis quasi architecto beatae.</p>
                            </div>
                            <div className='text-white ceo rounded-1 p-4 mt-xl-5 mb-3 me-xl-5'>
                                <ul className='list-unstyled'>
                                    <li className='text-capitalize text-secondary'><i className="fa-solid fa-check me-2"></i> non-profite crowdfunding agency</li>
                                    <li className='text-capitalize text-secondary'><i className="fa-solid fa-check me-2"></i> we're successful institute</li>
                                </ul>
                                <div className='d-flex gap-3 mt-4'>
                                    <div>
                                        <img src="Images/01 (2).jpg" className='img-fluid rounded-5' alt="CEO Image" />
                                    </div>
                                    <div>
                                        <h5 className='text-capitalize'>michael h. heart</h5>
                                        <p>CEO & Founder</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

{/* projects section */}
            <section className="our-projects">
                <div className="category-container2 d-flex justify-content-center">
                    <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">our projects</p>
                    <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> popular projects</p>
                </div>
                <h2 className='text-capitalize text-white text-center display-6 fw-semibold'>explore our projects</h2>
                <Container fluid>

                    <Row className='mt-5'>
                        <div className="carousel owl-carousel owl-theme">
                            {
                                data.map((e) => {
                                    return (
                                        <Col className='me-3'>
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
                        </div>
                    </Row>

                    <Container className='mt-5'>
                        <Row className='project-count pt-4 px-4'>
                            <Col md="6" xl="3" className='p-3'>
                                <div className='d-flex justify-content-center align-items-center gap-3'>
                                    <div>
                                        <img src="Images/icons8-crowdfunding-96.png" className='img-fluid' alt="" />
                                    </div>
                                    <div className='text-white fw-semibold'>
                                        <p className='counter display-6 fw-semibold'>3598+</p>
                                        <p className='text-capitalize'>we've project complete</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xl="3" className='p-3 px-5'>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <div>
                                        <img src="Images/icons8-crowdfunding-96.png" className='img-fluid' alt="" />
                                    </div>
                                    <div className='text-white fw-semibold'>
                                        <p className='display-6 fw-semibold counter'>9634+</p>
                                        <p className='text-capitalize'>global partners</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xl="3" className='p-3'>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <div>
                                        <img src="Images/icons8-crowdfunding-96.png" className='img-fluid' alt="" />
                                    </div>
                                    <div className='text-white fw-semibold'>
                                        <p className='display-6 fw-semibold counter'>8565+</p>
                                        <p className='text-capitalize'>awards winning</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xl="3" className='p-3'>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <div>
                                        <img src="Images/icons8-crowdfunding-96.png" className='img-fluid' alt="" />
                                    </div>
                                    <div className='text-white fw-semibold'>
                                        <p className='display-6 fw-semibold counter'>4756+</p>
                                        <p className='text-capitalize'>active volunteer</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>

{/* testimonials section */}
            <section className="testimonials bg-white">
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col md="8" xl="4">
                            <div>
                                <div className="category-container2 d-flex">
                                    <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">testimonials</p>
                                    <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> clients feedback</p>
                                </div>
                                <h2 className='text-capitalize display-6 fw-semibold'>why choose us</h2>
                                <p className='text-secondary pe-4 mt-3 mt-xl-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperiam eaque ipsa quae abillo inventore verit quasi architecto beatae vitae dicta sunt</p>
                                <a href="#" className="btn donate-btn fw-bold text-capitalize mt-3">view all reviews <i className="fa-solid fa-arrow-right ms-2"></i></a>

                                <div className='mt-5 p-5 border p-3 me-4'>
                                    <h3 className='text-capitalize'>most popular clients</h3>
                                    <div className='mt-3'>
                                        <img src="/Images/01 (2).jpg" className='rounded-5 client-img-1' alt="" />
                                        <img src="/Images/02 (1).jpg" className='rounded-5 client-img-2 border border-white border-3' alt="" />
                                        <img src="/Images/03 (1).jpg" className='rounded-5 client-img-2 border border-white border-3' alt="" />
                                        <img src="/Images/04 (4).jpg" className='rounded-5 client-img-2 border border-white border-3' alt="" />
                                        <img src="/Images/05 (3).jpg" className='rounded-5 client-img-2 border border-white border-3' alt="" />
                                        <a className='btn plus-btn rounded-circle'>+</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl="8">

                            <Row className='gap-3 justify-content-center'>
                                <Col sm="10" md="5" className=''>
                                    <div className='px-3 pe-5 shadow-lg p-4 mb-5'>
                                        <div className='d-flex gap-3 mt-4'>
                                            <div>
                                                <img src="Images/01 (2).jpg" className='img-fluid rounded-5' alt="CEO Image" />
                                            </div>
                                            <div>
                                                <h5 className='text-capitalize'>howard a. guest</h5>
                                                <p className='text-capitalize text-success fw-semibold'>web developer</p>
                                            </div>
                                        </div>
                                        <p className='text-secondary'>Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem</p>
                                        <hr className='mt-4 mb-4' />
                                        <p className='text-capitalize fw-semibold'>rating <span className='ms-3'> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i></span></p>
                                    </div>
                                    <div className='px-3 pe-5 shadow-lg p-4'>
                                        <div className='d-flex gap-3 mt-4'>
                                            <div>
                                                <img src="Images/02 (1).jpg" className='img-fluid rounded-5' alt="CEO Image" />
                                            </div>
                                            <div>
                                                <h5 className='text-capitalize'>howard a. guest</h5>
                                                <p className='text-capitalize text-success fw-semibold'>web developer</p>
                                            </div>
                                        </div>
                                        <p className='text-secondary'>Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem</p>
                                        <hr className='mt-4 mb-4' />
                                        <p className='text-capitalize fw-semibold'>rating <span className='ms-3'> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i></span></p>
                                    </div>
                                </Col>

                                <Col sm="10" md="5" className='mt-5'>
                                    <div className='px-3 pe-5 shadow-lg p-4 mb-5'>
                                        <div className='d-flex gap-3 mt-4'>
                                            <div>
                                                <img src="Images/03 (1).jpg" className='img-fluid rounded-5' alt="CEO Image" />
                                            </div>
                                            <div>
                                                <h5 className='text-capitalize'>howard a. guest</h5>
                                                <p className='text-capitalize text-success fw-semibold'>web developer</p>
                                            </div>
                                        </div>
                                        <p className='text-secondary'>Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem</p>
                                        <hr className='mt-4 mb-4' />
                                        <p className='text-capitalize fw-semibold'>rating <span className='ms-3'> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i></span></p>
                                    </div>

                                    <div className='px-3 pe-5 shadow-lg p-4'>
                                        <div className='d-flex gap-3 mt-4'>
                                            <div>
                                                <img src="Images/04 (4).jpg" className='img-fluid rounded-5' alt="CEO Image" />
                                            </div>
                                            <div>
                                                <h5 className='text-capitalize'>howard a. guest</h5>
                                                <p className='text-capitalize text-success fw-semibold'>web developer</p>
                                            </div>
                                        </div>
                                        <p className='text-secondary'>Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem</p>
                                        <hr className='mt-4 mb-4' />
                                        <p className='text-capitalize fw-semibold'>rating <span className='ms-3'> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFB400' }}></i></span></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

{/* partners section */}
            <section className='partners bg-white'>
                <Container>
                    <div className="category-container">
                        <p className="shadows-into-light text-secondary text-capitalize fw-semibold category-text">partners</p>
                        <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> our partners</p>
                    </div>
                    <h2 className='text-capitalize display-6 fw-semibold'>trusted partners</h2>

                    <Row className='mt-5 justify-content-center'>
                        {
                            data1.map((e) => {
                                return (
                                    <Col md="4" lg="3" className=''>
                                        <div className='px-5 py-3 partner-bg text-center mb-3'>
                                            <img src={e.image1} className='img-fluid' alt="" />
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            <hr />

{/* news section */}
            <section className='news-blog'>
                <Container>
                    <div className="category-container2 d-flex justify-content-center mt-5">
                        <p className="shadows-into-light text-secondary fw-semibold category-text text-capitalize">news blog</p>
                        <p className="text-uppercase fw-bold what-we-do-text"><i className="fa-solid fa-plus"></i> latest news & blog</p>
                    </div>
                    <h2 className='text-capitalize display-6 fw-semibold text-center'>get every single update</h2>
                    <Row className='justify-content-center mx-lg-5 mt-5'>
                        {
                            data2.map((e) => {
                                return(
                                    <Col md="6" lg="4">
                                        <div>
                                            <figure>
                                                <img src={e.imgblog} className='img-fluid' alt="" />
                                                <figcaption className='border me-1 p-4'>
                                                    <p className='mt-3'><i className="fa-solid fa-calendar-days" style={{ color: "#07AB5F" }}></i> <span className='ms-2 fw-semibold'>25 february 2021</span></p>
                                                    <p className='mt-3 text-capitalize fw-bold prj-detail pe-3'>{e.info}</p>
                                                    <a href="#" className="btn read-more border border-secondary-subtle fw-semibold text-capitalize mt-3">read more <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>

        </React.Fragment>
    );
};


export default Home;
