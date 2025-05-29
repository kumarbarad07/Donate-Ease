import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Offcanvas, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import Project1 from './Project1';
import Project2 from './Project2';
import Events from './Events';
import News from './News';
import About from './About';
import CompanyOverview from './CompanyOverview';
import TeamMember from './TeamMember';
import Contact from './Contact';
import { useLocation } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Details = [
    {
        img1: '/Images/project-grid-01 (1).jpg',
        title: 'video & movies',
        img2: 'Images/01 (2).jpg',
        name: 'james w. barrows',
        detail: 'best romantic & action english movie release in 2022',
        price: '$59,689',
        percentage: '79%',
        percent: '79'
    },
    {
        img1: '/Images/project-grid-02 (1).jpg',
        title: 'education',
        img2: 'Images/02 (1).jpg',
        name: 'james w. barrows',
        detail: 'needs close up students class in university',
        price: '$59,689',
        percentage: '87%',
        percent: '87'
    },
    {
        img1: '/Images/project-grid-03 (1).jpg',
        title: 'technology',
        img2: 'Images/03 (1).jpg',
        name: 'james w. barrows',
        detail: 'original shinecon vr pro virtual reality 3d classes vrbox',
        price: '$59,689',
        percentage: '85%',
        percent: '85'
    },
    {
        img1: '/Images/project-grid-04 (1).jpg',
        title: 'clothes',
        img2: 'Images/01 (2).jpg',
        name: 'james w. barrows',
        detail: 'fundraising for the people and cause you care about',
        price: '$59,689',
        percentage: '83%',
        percent: '83'
    },
    {
        img1: '/Images/project-grid-05 (1).jpg',
        title: 'covid-19',
        img2: 'Images/02 (1).jpg',
        name: 'james w. barrows',
        detail: 'covid-19 vaccine have already begun introduced countries',
        price: '$59,689',
        percentage: '93%',
        percent: '93'
    },
    {
        img1: '/Images/project-grid-06 (1).jpg',
        title: 'business',
        img2: 'Images/03 (1).jpg',
        name: 'james w. barrows',
        detail: 'mobile first is just not goodies enough meet journey',
        price: '$59,689',
        percentage: '70%',
        percent: '70'
    },
    {
        img1: '/Images/project-grid-07 (1).jpg',
        title: 'technology',
        img2: 'Images/01 (2).jpg',
        name: 'james w. barrows',
        detail: 'best romantic & action english movie release in 2022',
        price: '$59,689',
        percentage: '81%',
        percent: '81'
    },
    {
        img1: '/Images/project-grid-08 (1).jpg',
        title: 'mobile kits',
        img2: 'Images/01 (2).jpg',
        name: 'james w. barrows',
        detail: 'best romantic & action english movie release in 2022',
        price: '$59,689',
        percentage: '73%',
        percent: '73'
    },
    {
        img1: '/Images/project-grid-09 (1).jpg',
        title: 'business',
        img2: 'Images/01 (2).jpg',
        name: 'james w. barrows',
        detail: 'best romantic & action english movie release in 2022',
        price: '$59,689',
        percentage: '75%',
        percent: '75'
    }
]

const Images = [
    {
        image1: '/Images/01.png'
    },
    {
        image1: '/Images/02.png'
    },
    {
        image1: '/Images/03.png'
    },
    {
        image1: '/Images/04.png'
    },
    {
        image1: '/Images/05 (1).png'
    },
    {
        image1: '/Images/06.png'
    },
    {
        image1: '/Images/07.png'
    },
    {
        image1: '/Images/08.png'
    }
]

const Newsblog = [
    {
        imgblog: 'Images/01 (1).jpg',
        info: 'standing out from crowds improving mobile experience'
    },
    {
        imgblog: 'Images/02 (4).jpg',
        info: 'five rules of app localization china money dating and app store'
    },
    {
        imgblog: 'Images/03 (3).jpg',
        info: 'how to use underlined text improve user experience'
    }
]

const Eventcard = [
    {
        ev_img:'/Images/01 (9).jpg',
        ev_category:'music party',
        ev_title:'combining ux design & psychology',
        ev_info:'Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque'
    },
    {
        ev_img:'/Images/02 (9).jpg',
        ev_category:'music party',
        ev_title:'app development hawaiian airlines',
        ev_info:'Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque'
    },
    {
        ev_img:'/Images/03 (8).jpg',
        ev_category:'meetup',
        ev_title:'app development hawaiian airlines',
        ev_info:'Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque'
    },
    {
        ev_img:'/Images/04 (1).jpg',
        ev_category:'meetup',
        ev_title:'combining ux design & psychology',
        ev_info:'Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque'
    },
    {
        ev_img:'/Images/05 (1).jpg',
        ev_category:'meetup',
        ev_title:'app development hawaiian airlines',
        ev_info:'Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque'
    },
    {
        ev_img:'/Images/06 (1).jpg',
        ev_category:'meetup',
        ev_title:'app development hawaiian airlines',
        ev_info:'Sed ut perspiciatis unde omnis iste natus error voluptatem accus laudantium totam rem aperiam eaque'
    }
]

const Teamdata = [
    {
        t_img:'/Images/01 (11).jpg',
        t_name:'allen j. thompson',
        t_position:'ceo & founder'
    },
    {
        t_img:'/Images/02 (11).jpg',
        t_name:'steven e. wenger',
        t_position:'junior manager'
    },
    {
        t_img:'/Images/03 (11).jpg',
        t_name:'dwayne h. johnson',
        t_position:'digitla marketer'
    },
    {
        t_img:'/Images/04 (3).jpg',
        t_name:'steve l. wegnor',
        t_position:'web developer'
    },
    {
        t_img:'/Images/05 (2).jpg',
        t_name:'richard barnes',
        t_position:'web developer'
    },
    {
        t_img:'/Images/06 (2).jpg',
        t_name:'james w. rotriguez',
        t_position:'web designer'
    },
    {
        t_img:'/Images/07 (1).jpg',
        t_name:'tony anderson',
        t_position:'sr. manager'
    },
    {
        t_img:'/Images/08 (1).jpg',
        t_name:'stah wondruff',
        t_position:'app developer'
    },
    {
        t_img:'/Images/09 (1).jpg',
        t_name:'ronald tusker',
        t_position:'web designer'
    }
]

const App = () => {
    const [showProject, setShowProject] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const [showPages, setShowPages] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const location = useLocation();
    const isHome = location.pathname === "/";

    const isActive = (paths) => paths.some(path => location.pathname === path);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // adjust threshold if needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

     const path = location.pathname;

    const getTitle = () => {
        if (path.includes('/project')) return 'Latest Projects';
        if (path.includes('/events')) return 'Events';
        if (path.includes('/news')) return 'News Standard';
        if (path.includes('/about')) return 'About Us';
        if (path.includes('/company')) return 'Company Overview';
        if (path.includes('/teammember')) return 'Team Members';
        if (path.includes('/contact')) return 'Contact Us';
        return 'Page';
    };

    return (
        <>
            {/* first-section */}
            <section className={`first-section position-relative ${!isHome ? 'no-bg' : ''}`}>
                <Container>
                    <Row className="d-none d-md-flex justify-content-between align-items-center py-2 border-bottom">
                        <Col>
                            <ul className="list-unstyled d-flex align-items-center gap-4 mb-0">
                                <li className="d-flex align-items-center">
                                    <i className="fa-solid fa-envelope text-success me-2"></i>
                                    <a href="mailto:support@gmail.com" className="text-decoration-none text-black">support@gmail.com</a>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fa-solid fa-location-dot text-success me-2"></i>
                                    <a href="#" className="text-decoration-none text-black text-capitalize">A-4, 15, Lower Indiranagar, bibwewadi, Pune</a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="text-end">
                            <ul className="list-unstyled d-flex justify-content-end align-items-center gap-3 mb-0">
                                <li><a href="#"><i className="fa-brands fa-twitter text-black"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube text-black"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-behance text-black"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-google-plus-g text-black"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                {/* navbar section */}
                <Container>
                    <hr />
                    <Navbar expand="lg" className={`py-3 ${isSticky ? 'sticky-navbar' : ''}`}>
                        <Container>
                            <Navbar.Brand href="#">
                                <img src="Images/logo.png" alt="Logo" style={{ height: "40px" }} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="d-flex justify-content-center w-100 nav-menu align-items-center">
                                        <Nav.Link as={Link} to="/" className={`nav-link ${isActive(['/']) ? 'active' : ''}`}>Home</Nav.Link>

                                        <NavDropdown
                                            title={<span className={`${isActive(['/project']) ? 'active' : ''}`}>Project <i className="fa-solid fa-angle-down nav-icons ms-1"></i></span>}
                                            id="project-dropdown"
                                            className={`nav-link-dropdown ${location.pathname.startsWith('/project') ? 'active' : ''}`}
                                            show={showProject}
                                            onMouseEnter={() => setShowProject(true)}
                                            onMouseLeave={() => setShowProject(false)}
                                        >
                                            <NavDropdown.Item as={Link} to="/project1">Project One</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/project2">Project Two</NavDropdown.Item>
                                            <NavDropdown.Item href="">Project Three</NavDropdown.Item>
                                            <NavDropdown.Item href="">Project Details</NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link as={Link} to="/events" className={`nav-link ${isActive(['/events']) ? 'active' : ''}`}>Events</Nav.Link>

                                        <NavDropdown
                                            title={<span className={`${isActive(['/news']) ? 'active' : ''}`}>News <i className="fa-solid fa-angle-down nav-icons ms-1"></i></span>}
                                            id="news-dropdown"
                                            className={`nav-link-dropdown ${isActive(['/news']) ? 'active' : ''}`}
                                            show={showNews}
                                            onMouseEnter={() => setShowNews(true)}
                                            onMouseLeave={() => setShowNews(false)}
                                        >
                                            <NavDropdown.Item as={Link} to="/news">Standard News</NavDropdown.Item>
                                            <NavDropdown.Item href="">News Details</NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown
                                            title={<span className={`${isActive(['/about', '/company', '/teammember']) ? 'active' : ''}`}>Pages <i className="fa-solid fa-angle-down nav-icons ms-1"></i></span>}
                                            id="pages-dropdown"
                                            className={`nav-link-dropdown ${isActive(['/about', '/company', '/teammember']) ? 'active' : ''}`}
                                            show={showPages}
                                            onMouseEnter={() => setShowPages(true)}
                                            onMouseLeave={() => setShowPages(false)}
                                        >
                                            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/company">Company Overview</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/teammember">Team Member</NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link as={Link} to="/contact" className={`nav-link ${isActive(['/contact']) ? 'active' : ''}`}>Contact</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>

                            <div className="d-none d-lg-block donate-overlay-button">
                                <a href="#" className="btn donate-btn ms-3 fw-bold">
                                    Donate Now <i className="fa-solid fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </Container>
                    </Navbar>
                    <hr />
                </Container>

{/* hero section */}
                {!isHome && (
                <section className="hero-section position-relative d-flex align-items-center text-white">
                    <Container>
                        <Row className='mx-xl-5 align-items-center'>
                            <Col lg="8">
                                <div>
                                    <h1 className='text-capitalize display-3 fw-semibold'>{getTitle()}</h1>
                                </div>
                            </Col>
                            <Col lg="auto">
                                <div>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/"><span className='text-white'>Home</span></Breadcrumb.Item><i className="fa-solid fa-compass d-flex align-items-center mx-3"></i>
                                        <Breadcrumb.Item href="/project1">
                                            <span className='text-secondary' active> {getTitle()}</span>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                )}

                {isHome && (
                    <Container className="crowdfunding">
                        <p className="d-flex justify-content-center fw-bold fs-5">Crowdfounding Agency</p>
                        <h2 className="d-flex justify-content-center text-center roboto display-1 fw-bold">
                            Raise Hand to Promote<br /> Best Products
                        </h2>
                        <div className="text-center pt-3">
                            <a href="#" className="btn explore-btn border border-secondary-subtle fw-semibold">Explore Projects <i className="fa-solid fa-arrow-right ms-2"></i></a>
                        </div>

                        <Container className="d-none d-md-inline">
                            <Row className="hero-images">
                                <Col md="3" className="circle-image-wrapper">
                                    <div data-aos="fade-right">
                                        <img src="Images/hero-one-small.jpg" className="circle-image" alt="" />
                                    </div>
                                </Col>
                                <Col md="6">
                                    <img src="Images/hero-one-big.jpg" className="img-fluid" alt="" />
                                </Col>
                                <Col md="3" className="circle-image-wrapper">
                                    <div data-aos="fade-left">
                                        <img src="Images/hero-one-small-2.jpg" className="circle-image2" alt="" />
                                    </div>
                                </Col>
                            </Row>

                            <div className="hero-line d-none d-lg-inline">
                                <img src="Images/hero-line.png" className="img-fluid line1" alt="" />
                                <img src="Images/hero-line-2.png" className="img-fluid line2" alt="" />
                                <div className="circle-one"></div>
                                <div className="circle-two"></div>
                            </div>
                        </Container>
                    </Container>
                )}
            </section>

{/* routing */}
            <section>
                <Routes>
                    <Route path="/" element={<Home Projects1={Details} Partners={Images} Blog={Newsblog} />} />
                    <Route path="/project1" element={<Project1 Projects={Details} />} />
                    <Route path="/project2" element={<Project2 Projects={Details} />} />
                    <Route path="/events" element={<Events Eventsinfo={Eventcard} />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About Teamdetail={Teamdata} />} />
                    <Route path="/company" element={<CompanyOverview />} />
                    <Route path="/teammember" element={<TeamMember Teammembers={Teamdata} />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </section>

{/* routing section */}
            <footer className='pt-5 pb-5' data-aos="fade-up">
                <section>
                    <Container>
                        {!isHome && (
                            <Row className='raise-hand justify-content-lg-between justify-content-md-center align-items-center gap-3 py-5 mx-1 mx-md-0 px-md-5'>
                                <Col sm="11" md="8" lg="7" xl="8">
                                    <div className='text-md-center text-lg-start'>
                                        <p className='text-capitalize'>25 years of experience in crowdfunding</p>
                                        <h3 className='display-6 fw-bold text-capitalize'>raise hand to promote best products</h3>
                                    </div>
                                </Col>
                                <Col md="6" lg="auto">
                                    <div className="text-center">
                                        <a href="" className="btn promote-btn border border-secondary-subtle text-capitalize fw-semibold">promote your products <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                    </div>
                                </Col>
                            </Row>
                        )}
                        <Row className='justify-content-between mx-lg-5 gap-4 gap-md-0 mt-5'>
                            <Col md="6" lg="3" className='px-md-4 px-lg-0'>
                                <div>
                                    <img src="Images/logo-white.png" className='img-fluid' alt="" />
                                    <p className='text-white fw-semibold mt-5'>Sed ut perspiciatis unde omn iste natus error sit voluptatem</p>
                                    <p className='text-capitalize text-white fw-semibold fs-5 mt-4'>join newsletters</p>
                                    <form action="">
                                        <input type="email" name="" id="" placeholder='email address' className='btn pe-5 pe-lg-0 pe-xl-5 py-3 ps-0 email-add border border-secondary-subtle fw-semibold text-capitalize text-secondary mt-2' /><button type="submit" className='btn arrow-btn rounded-circle'><i className="fa-solid fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </Col>
                            <Col md="6" lg="2" className='px-md-4 px-lg-0'>
                                <div>
                                    <h4 className='text-white text-capitalize fw-semibold'>our projects</h4>
                                    <ul className='list-unstyled mt-4'>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>medical & health</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>educations</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>technology</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>web development</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>food & clothes</li>
                                        <li className='text-capitalize position-relative hover-angle'>video & movies</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6" lg="2" className='px-md-4'>
                                <div>
                                    <h4 className='text-white text-capitalize fw-semibold'>support</h4>
                                    <ul className='list-unstyled mt-4'>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>privacy policy</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>conditions</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>company</li>
                                        <li className='text-capitalize mb-3 position-relative hover-angle'>faq & terms</li>
                                        <li className='text-capitalize position-relative hover-angle'>contact us</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6" lg="3" className='px-md-4'>
                                <div>
                                    <h4 className='text-white text-capitalize fw-semibold'>contact us</h4>
                                    <ul className='list-unstyled mt-4'>
                                        <li className='d-flex gap-3 mb-4'>
                                            <span>
                                                <p className='phone rounded-circle'><i className="fa-solid fa-phone" style={{ color: "#FFFFFF" }}></i></p>
                                            </span>
                                            <span className='lh-1'>
                                                <p className='text-secondary'>phone number</p>
                                                <a href="tel:+1234567890" className='text-white fs-5 fw-bold'>+012(345) 78 93</a>
                                            </span>
                                        </li>
                                        <li className='d-flex gap-3 mb-4'>
                                            <span>
                                                <p className='phone rounded-circle'><i className="fa-solid fa-envelope-open" style={{ color: "#FFFFFF" }}></i></p>
                                            </span>
                                            <span className='lh-1'>
                                                <p className='text-secondary'>email address</p>
                                                <a href="mailto:teamkrb@gmail.com" className='text-white fs-5 fw-bold'>teamkrb@gmail.com</a>
                                            </span>
                                        </li>
                                        <li className='d-flex gap-3'>
                                            <span>
                                                <p className='phone rounded-circle'><i className="fa-solid fa-location-dot" style={{ color: "#FFFFFF" }}></i></p>
                                            </span>
                                            <span className='lh-sm'>
                                                <p className='text-secondary'>locations</p>
                                                <a href="#" className='text-white fs-5 fw-bold text-capitalize'>59 main street, USA</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>

                        <Row className='rights mx-md-5 flex-md-row-reverse pt-3 px-4 px-md-0 px-lg-4 mt-5'>
                            <Col md="6">
                                <ul className='list-unstyled d-flex justify-content-center justify-content-md-end gap-3'>
                                    <li><a href="#" className='text-reset'><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className='text-reset'><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#" className='text-reset'><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#" className='text-reset'><i className="fa-brands fa-behance"></i></a></li>
                                    <li><a href="#" className='text-reset'><i className="fa-brands fa-google-drive"></i></a></li>
                                </ul>
                            </Col>
                            <Col md="6">
                                <div>
                                    <p className='text-secondary text-capitalize text-center text-lg-start'>&copy; 2025 <a href="#" className='text-capitalize text-success fw-semibold'>funden</a>. all rights reserved</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </footer>

        </>
    )
}

export default App;
