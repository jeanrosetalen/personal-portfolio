
function App() {

  return (
    <> 
      {/* Page Navbar */}
        <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
            <div className="container">
                <a className="logo" href="#">Meyawo</a>
                <ul className="nav">
                    <li className="item">
                        <a className="link" href="#home">Home</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#about">About</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#testmonial">Testmonial</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#blog">Blog</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#contact">Contact</a>
                    </li>
                    <li className="item ml-md-3">
                        <a href="components.html" className="btn btn-primary">Components</a>
                    </li>
                </ul>
                <a href="js/meyawo.js" id="nav-toggle" className="hamburger hamburger--elastic">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </a> {/* there is an error with the hamburger menu */}
            </div>
        </nav>
      {/* End of Page Navbar */}

      {/* page header */}
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am John Doe</span>
                </h1>
                <p className="header-subtitle">FRONTEND WEB DESIGNER</p>

                <button className="btn btn-primary">Visit My Works</button>
            </div>
        </header>
      {/* end of page header */}

      {/* about section */}
        <section className="section pt-0" id="about">
            {/* container */}
            <div className="container text-center">
                {/* about wrapper */}
                <div className="about">
                    <div className="about-img-holder">
                        <img src="assets/imgs/man.png" className="about-img"
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut
                            fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
                            impedit iure nemo a iste
                            <br />culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo
                            esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis
                            culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum
                            expedita aliquid! Debitis, nam!
                        </p>
                        <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                    </div>
                </div>{/* end of about wrapper */}
            </div>{/* end of container */}
        </section> 
      {/* end of about section */}

      {/* service section */}
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Service</h6>
                {/* row */}
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/pencil-case.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                    className="icon" />
                                <h6 className="title">Adipisicing</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                    molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/responsive.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                    className="icon" />
                                <h6 className="title">Sapiente</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                    molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/toolbox.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                    className="icon" />
                                <h6 className="title">Placeat</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                    molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/analytics.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                    className="icon" />
                                <h6 className="title">Iusto</h6>
                                <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                                    molestias dolorem iste quod.</p>
                            </div>
                        </div>
                    </div>
                </div>{/* end of row */}
            </div>
        </section>
      {/* end of service section */}

      {/* portfolio section */}
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                {/* row */}
                <div className="row">
                    <div className="col-md-4">
                        <a href="#" className="portfolio-card">
                            <img src="assets/imgs/folio-1.jpg" className="portfolio-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Designing</h4>
                                        <p className="font-weight-normal">Category: Web Templates</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="portfolio-card">
                            <img className="portfolio-card-img img-responsive rounded" src="assets/imgs/folio-2.jpg"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Designing</h4>
                                        <p className="font-weight-normal">Category: Web Templates</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="portfolio-card">
                            <img className="portfolio-card-img img-responsive rounded" src="assets/imgs/folio-3.jpg" 
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Designing</h4>
                                        <p className="font-weight-normal">Category: Web Templates</p>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>{/* end of row */}
            </div>{/* end of container */}
        </section> 
      {/* end of portfolio section */}

      {/* pricing section */}
        <section className="section" id="pricing">
            <div className="container text-center">
                <p className="section-subtitle">How Much I Charge ?</p>
                <h6 className="section-title mb-6">My Pricing</h6>
                {/* row */}
                <div className="pricing-wrapper">
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <img className="pricing-card-icon" src="assets/imgs/scooter.svg"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                        </div>
                        <div className="pricing-card-body">
                            <h6 className="pricing-card-title">Free</h6>
                            <div className="pricing-card-list">
                                <p>accusamus reprehenderit</p>
                                <p>provident dolorem </p>
                                <p>quos neque</p>
                                <p>fugiat quibusdam</p>
                                <p><i className="ti-close"></i></p>
                                <p><i className="ti-close"></i></p>
                            </div>
                        </div>
                        <div className="pricing-card-footer">
                            <span>$</span>
                            <span>0.00/Month</span>
                        </div>
                        <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                    </div>
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <img className="pricing-card-icon" src="assets/imgs/shipped.svg"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                        </div>
                        <div className="pricing-card-body">
                            <h6 className="pricing-card-title">Basic</h6>
                            <div className="pricing-card-list">
                                <p>accusamus reprehenderit</p>
                                <p>provident dolorem </p>
                                <p>quos neque</p>
                                <p>fugiat quibusdam</p>
                                <p>accusamus laboriosam</p>
                                <p><i className="ti-close"></i></p>
                            </div>
                        </div>
                        <div className="pricing-card-footer">
                            <span>$</span>
                            <span>9.99/Month</span>
                        </div>
                        <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                    </div>
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <img className="pricing-card-icon" src="assets/imgs/startup.svg"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                        </div>
                        <div className="pricing-card-body">
                            <h6 className="pricing-card-title">Premium</h6>
                            <div className="pricing-card-list">
                                <p>accusamus reprehenderit</p>
                                <p>provident dolorem </p>
                                <p>quos neque</p>
                                <p>fugiat quibusdam</p>
                                <p>accusamus laboriosam</p>
                                <p>inventore omnis</p>
                            </div>
                        </div>
                        <div className="pricing-card-footer">
                            <span>$</span>
                            <span>99.9/Month</span>
                        </div>
                        <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                    </div>

                </div>{/* end of pricing wrapper */}
            </div> {/* end of container */}
        </section>
      {/* end of pricing section */}

      {/* section */}
        <section className="section-sm bg-primary">
            {/* container */}
            <div className="container text-center text-sm-left">
                {/* row */}
                <div className="row align-items-center">
                    <div className="col-sm offset-md-1 mb-4 mb-md-0">
                        <h6 className="title text-light">Want to work with me?</h6>
                        <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
                    </div>
                    <div className="col-sm offset-sm-2 offset-md-3">
                        <button className="btn btn-lg my-font btn-light rounded">Hire Me</button>
                    </div>
                </div> {/* end of row */}
            </div> {/* end of container */}
        </section> {/* end of section */}

      {/* testimonial section */}
        <section className="section" id="testmonial">
            <div className="container text-center">
                <p className="section-subtitle">What Think Client About Me ?</p>
                <h6 className="section-title mb-6">Testmonial</h6>

                {/* row */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src="assets/imgs/avatar2.jpg" className="testimonial-card-img"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="testimonial-card-body">
                                <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                                    adipisci nihil.</p>
                                <h6 className="testimonial-card-title">Emily Reb</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src="assets/imgs/avatar3.jpg" className="testimonial-card-img"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="testimonial-card-body">
                                <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                                    adipisci nihil.</p>
                                <h6 className="testimonial-card-title">Emily Reb</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* end of container */}
        </section> 
      {/* end of testimonial section */}

      {/* blog section */}
        <section className="section" id="blog">
            {/* container */}
            <div className="container text-center">
                <p className="section-subtitle">Recent Posts?</p>
                <h6 className="section-title mb-6">Blog</h6>
                {/* blog-wrapper */}
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src="assets/imgs/img-1.jpg" className="blog-card-img"
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="blog-card-body">
                        <h5 className="blog-card-title">Consectetur adipisicing elit</h5>

                            <p className="blog-card-caption">
                                <a href="#">By: Admin</a>
                                <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                                <a href="#"><i className="ti-comment"></i> 123</a>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit
                                delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium
                                neque numquam mollitia modi quasi distinctio.</p>

                            <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b>
                            </p>
                            <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis
                                cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

                            <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                    </div>
                </div>{/* end of blog wrapper */}

                {/* blog-wrapper */}
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src="assets/imgs/img-2.jpg" className="blog-card-img"
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="blog-card-body">
                        <h5 className="blog-card-title">Explicabo illo</h5>

                            <p className="blog-card-caption">
                                <a href="#">By: Admin</a>
                                <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                                <a href="#"><i className="ti-comment"></i> 264</a>
                            </p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim,
                                vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro
                                quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto
                                omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae?
                                Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non
                                dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus
                                eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                            <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                    </div>
                </div>{/* end of blog wrapper */}

            </div>{/* end of container */}
        </section>
      {/* end of blog section */}

      {/* contact section */}
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                {/* contact form */}
                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input type="text" size="50" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="email" className="form-control" placeholder="Enter Email" requried />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea name="comment" id="comment" rows="6" className="form-control"
                                placeholder="Write Something"></textarea>
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>{/* end of contact form */}
            </div>{/* end of container */}
        </section>
      {/* end of contact section */}

      {/* footer */}
        <div className="container">
            <footer className="footer">
                <p className="mb-0">Copyright
                    <script>document.write(new Date().getFullYear())</script> &copy; <a
                        href="http://www.devcrud.com">DevCRUD</a> Distribution <a
                        href="https://themewagon.com">ThemeWagon</a>
                </p>
                <div className="social-links text-right m-auto ml-sm-auto">
                    <a href="javascript:void(0)" className="link"><i className="ti-facebook"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
                </div>
            </footer>
        </div>
      {/* end of page footer */}
    </>
  )
}

export default App
