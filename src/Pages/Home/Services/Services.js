import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div id="services" className="tech-color background-tech">
            <div className="my-5 py-4">
                <div>
                <h4 className="container-fluid mx-auto mb-4">What I'm Doing</h4>
                </div>
                <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 container mx-auto">
                    <div class="col">
                        <div class="card h-100  px-3 py-3 pt-3 border-0 first-card">
                            <div className='d-lg-flex align-items-center my-service-card'>
                                <div className='p-4'>
                                    <i class="my-service-icon fs-1 fas fa-laptop-code"></i>
                                </div>
                                <div>
                                    <h5 className="">Responsive Website</h5>
                                    <p className="">Responsive web design adjusts content to a device's screen. I create responsive Website for all devices. it's very importent for the convenience of the users. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100  px-3 py-3 pt-3 border-0 first-card">
                            <div className='d-lg-flex align-items-center my-service-card'>
                                <div className='p-4'>
                                    <i class="my-service-icon fs-1 fas fa-desktop"></i>
                                </div>
                                <div>
                                    <h5 className="">Front End App</h5>
                                    <p className="">Web development generally fits into distinct concentrations, such as front end web development. I have professional knowledge of front-end development. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100  px-3 py-3 pt-3 border-0 first-card">
                            <div className='d-lg-flex align-items-center my-service-card'>
                                <div className='p-4'>
                                    <i class="my-service-icon fs-1 fab fa-react"></i>
                                </div>
                                <div>
                                    <h5 className="">React App</h5>
                                    <p className="">ReactJS has become highly popular because of its extra simplicity and flexibility. ReactJS is my favourit js library. I enjoy creating the user interface with React.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100  px-3 py-3 pt-3 border-0 first-card">
                            <div className='d-lg-flex align-items-center my-service-card'>
                                <div className='p-4'>
                                    <i class="my-service-icon fs-1 fas fa-code"></i>
                                </div>
                                <div className='text-left'>
                                    <h5 className="">MERN App</h5>
                                    <p className="">React is winning the development stack popularity race, which means MERN is at the leading position among popularity. This stack is one of my favorite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col">
                        <div class="card h-100  px-3 py-3 border-0 shadow-lg text-light second-card">
                            <i class="fas fa-code fs-1 text-center mb-3"></i>
                            <h5 className="text-primary text-center text-warning">Front End <br /> Development</h5>
                            <p className="text-center"> I will create any frontend web application with react js. I will develop a stunning and professional-looking react js website according to your expectation.</p>
                        </div>
                    </div> */}
                    {/* <div class="col">
                        <div class="card h-100 px-3 py-3 pt-3 border-0 shadow-lg third-card text-light">
                            <i class="fas fa-code fs-1 text-center mb-3"></i>
                            <h5 className="text-primary text-center text-warning">MERN Stack <br /> Development</h5>
                            <p className="text-center">I will create simple MERN application using mongodb, express js, react js and node js. I will develop a stunning and professional-looking MERN website according to your expectation.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Services;