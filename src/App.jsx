

export default function App() {

  return (
    <>
         {/* Home / Navigation Section */}
        <div id="home" className="parallax-window" data-parallax="scroll" data-image-src="img/portfolio-home-opt3.jpg">
            <nav id="tm-nav" className="fixed w-full">
                <div className="tm-container mx-auto px-2 md:py-6 text-right">
                    <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-purple"></i></button>
                    <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row nav-font">
                        <li className="inline-block mb-4 mx-4"><a href="#home" className="tm-text-purple py-1 md:py-3 px-4">Home</a></li>
                        <li className="inline-block mb-4 mx-4"><a href="#about" className="tm-text-purple py-1 md:py-3 px-4">About</a></li>
                        <li className="inline-block mb-4 mx-4"><a href="#project" className="tm-text-purple py-1 md:py-3 px-4">Project</a></li>
                        <li className="inline-block mb-4 mx-4"><a href="#skills" className="tm-text-purple py-1 md:py-3 px-4">Skills</a></li>
                        <li className="inline-block mb-4 mx-4"><a href="#contact" className="tm-text-purple py-1 md:py-3 px-4">Contact</a></li>
                    </ul>
                </div>            
            </nav>

            {/* Home Section */}
            <section className="home-section">
                <div className="foreground container mx-auto px-2 tm-home-width">
                    <div className="sm:pb-60 sm:pt-48 py-20">
                        <div>
                            <h1 className="text-intro text-left text-white">
                                Hi! <br />
                                I am Jean Rose  <br />
                            </h1>
                            <span className=" text-career tm-text-3xl font-bold py-6 ">FRONTEND WEB DESIGNER</span>
                        </div>

                        <button className="rounded btn btn-outline-primary mt-4">
                            <a href="portfolio-resume.pdf" download={"portfolio-resume.pdf"}>Download CV</a>
                        </button>
                    </div>
                </div>     

            </section>   
        </div>

        {/* About Section */}
        <div id="about" className="parallax-window" data-parallax="scroll" data-image-src="img/portfolio-about-bg-opt2.png"> 
           <div className=" about-container mx-auto tm-container py-24 sm:py-48 flex items-center justify-center mb-16">
                <img src="img/portfolio-profile-opt2.png" className="profile-img rounded-xxl " alt="Image" />
                <div className="about-caption caption m-5 px-12">
                    <p className="section-subtitle up mb-8">Who Am I ?</p>
                    <h2 className="section-title mb-3 middle text-4xl mb-10">About Me</h2>
                    <p className="down">
                        Hi! I am Jean Rose Talen. Currently studying for my Bachelor's degree in Information Systems (BSIS) at La Verdad Christian College. 
                        I'm passionate about front-end web design and aspire to create stunning, user-friendly websites.
                        <br /><br /> During my studies, I've developed strong skills in HTML, CSS, and JavaScript, along with experience in popular framework like React.
                        I've been involved in several projects that have allowed me to hone my skills and showcase my creativity. <br /><br />
                        When I'm not studying, I love to binge-watch movies/series, to sleep , and to read self-help books. 
                        My goal is to combine my technical expertise with my creative passion to build websites that not only look great but also function beautifully. <br /><br />
                        Feel free to connect with me on <a href="www.linkedin.com/in/jean-rose-talen-99795b27a"  target="_blank">LinkedIn</a> or check out <a href="#project">my projects</a>
                    </p>
                </div>

           </div>
        </div>

        {/* Project Section */}
        <div id="project" className="parallax-window bg-opacity-50" data-parallax="scroll" data-image-src="img/portfolio-project-bg-opt3.png">
            <div className=" mx-auto tm-container py-24 sm:py-48">
                <div className="text-center mb-4 project-title">
                    <h2 className=" py-6 px-12 text-4xl font-medium inline-block">
                        <span className="tm-text-brown">What I Did?</span><br />
                        Projects
                    </h2>
                </div>  
                <div className="img-holder ">
                    <div className="img-container">
                        <a href="#" className="portfolio-card cim-img-holder">
                            <img src="img/portfolio-project-cim.png" className="portfolio-card-img cim-img " />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Design</h4>
                                        <p className="font-weight-normal">
                                            <b>Project Description</b>
                                            <br />
                                            This project is about redesigning a website and making it responsive.
                                        </p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="img-container">
                        <a href="#" className="portfolio-card mcgi-img-holder ">
                            <img src="img/portfolio-project-mcgi.png" className="portfolio-card-img mcgi-img " />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Mobile App Design</h4>
                                        <p className="font-weight-normal">
                                            <b>Project Description</b>
                                            <br />
                                            This project is about making a prototype of a mabile app of your choice.
                                        </p>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>        
        </div>

        {/* Skills Section */}
        <div id="skills" className="parallax-window bg-opacity-50" data-parallax="scroll" data-image-src="img/portfolio-skills-bg-opt2.jpg">
            <div className="skill-content mx-auto tm-container py-24 sm:py-48">
                <div className="section-heading text-center">
                    <h2>
                        <span>My Strength ?</span><br />
                        Skills
                    </h2>
                </div>
                <div className="skills-section items-center justify-around ">
                    <div className="col-1">
                        <div className="progress-skills">
                            <span>HTML</span>
                            <div className="progress-bar bg-white" style={{'--width': '97'}}></div>
                            <h3>97%</h3>
                        </div>
                        <div className="progress-skills">
                            <span>CSS</span>
                            <div className="progress-bar bg-white" style={{'--width': '95'}}></div>
                            <h3>95%</h3>
                        </div>
                        <div className="progress-skills">
                            <span>JavaScript</span>
                            <div className="progress-bar bg-white" style={{'--width': '80'}}></div>
                            <h3>80%</h3>
                        </div>
                    </div>  
                    <div className="col-2">
                        <div className="progress-skills">
                            <span>Frontend Development</span>
                            <div className="progress-bar bg-white" style={{'--width': '80'}}></div>
                            <h3>80%</h3>
                        </div>
                        <div className="progress-skills">
                            <span>Frontend Design</span>
                            <div className="progress-bar bg-white" style={{'--width': '90'}}></div>
                            <h3>90%</h3>
                        </div>
                        <div className="progress-skills">
                            <span>Communication</span>
                            <div className="progress-bar bg-white" style={{'--width': '90'}}></div>
                            <h3>90%</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>

		{/*skills end */}


        {/* Contact Section */}
        <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="img/portfolio-contact-bg-opt3.jpg">
            <div className="container mx-auto tm-container pt-24 pb-48 sm:py-48">
                <div className="contact-title text-center">
                    <h2>
                        <span>How can you communicate?</span><br />
                        Contact Me
                    </h2>
                </div>
                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group contact-name" >
                            <input type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group contact-email">
                            <input type="email" className="form-control" placeholder="Enter Email" requried/>
                        </div>
                        <div className="form-group contact-comment">
                            <textarea name="comment" id="comment" rows="6" className="form-control"
                                placeholder="Write Something"></textarea>
                        </div>
                        <div className="form-group contact-btn">
                            <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>


                {/* footer */}
                <footer className="absolute bottom-0 left-0 w-full">
                    <div className="footer footer-container">
                            <p className="mb-0">Copyright 2024
                                 &copy; 
                            </p>

                            <div className="social-links text-right m-auto ">
                                <a href="https://www.facebook.com/jeanrose.talen" target="_blank" className="link"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://m.me/jeanrose.talen" target="_blank" className="link"><i className="fa-brands fa-facebook-messenger"></i></a>
                                <a href="https://www.instagram.com/jeanrose.talen.a3.central?igsh=MXZkamUwdzVnZW9xcg=="  target="_blank" className="link"><i className="fa-brands fa-instagram"></i></a>
                                <a href="www.linkedin.com/in/jean-rose-talen-99795b27a"  target="_blank" className="link"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://github.com/jeanrosetalen"  target="_blank" className="link"><i className="fa-brands fa-github"></i></a>
                            </div>
                    </div>
                    {/* end of page footer */}

                </footer>

            </div>        
        </div>    
      
    </>
  )
}


