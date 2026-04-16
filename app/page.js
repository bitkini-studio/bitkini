export default function Home() {
  return (
    <>
      <nav>
        <a className="logo" href="/">Bitkini</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a className="contact-link" href="mailto:support@bitkini.com">Contact</a>
        </div>
      </nav>

      <main>
        <p className="eyebrow">App Service Company</p>
        <h1>Build something<br /><span>worth using.</span></h1>
        <p className="sub">
          Bitkini is a software development company specializing in mobile and web applications.
          We design, build, and operate digital products with thoughtful execution and real impact.
        </p>
        <div className="cta-group">
          <a className="btn-primary" href="mailto:support@bitkini.com">Get in touch</a>
          <a className="btn-ghost" href="mailto:support@bitkini.com">support@bitkini.com</a>
        </div>
      </main>

      <section id="about" className="about">
        <div className="about-inner">
          <p className="eyebrow">About Us</p>
          <h2>Who We Are</h2>
          <p className="about-desc">
            Bitkini is a technology company based in Seoul, focused on building mobile and web applications
            that solve real problems. Our team brings expertise in product design, software engineering,
            and user experience to deliver high-quality digital products.
          </p>
          <div className="about-details">
            <div>
              <p className="detail-label">Company</p>
              <p className="detail-value">Bitkini</p>
            </div>
            <div>
              <p className="detail-label">Industry</p>
              <p className="detail-value">Software Development</p>
            </div>
            <div>
              <p className="detail-label">Registration No.</p>
              <p className="detail-value">377-33-01834</p>
            </div>
            <div>
              <p className="detail-label">Address</p>
              <p className="detail-value">101-1001, Seonyuseo-ro 21-gil 19<br />Yeongdeungpo-gu, Seoul, 07278</p>
            </div>
            <div>
              <p className="detail-label">Website</p>
              <p className="detail-value">bitkini.com</p>
            </div>
            <div>
              <p className="detail-label">Contact</p>
              <p className="detail-value">support@bitkini.com</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="features">
        <div className="features-grid">
          <div>
            <p className="feature-label">01</p>
            <p className="feature-title">Product Design</p>
            <p className="feature-desc">Clean interfaces built around how people actually think and interact.</p>
          </div>
          <div>
            <p className="feature-label">02</p>
            <p className="feature-title">Mobile &amp; Web Development</p>
            <p className="feature-desc">Cross-platform apps shipped fast without cutting corners on quality.</p>
          </div>
          <div>
            <p className="feature-label">03</p>
            <p className="feature-title">Continuous Improvement</p>
            <p className="feature-desc">We move quickly, listen to users, and keep improving until it&apos;s right.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">Bitkini</p>
            <p className="footer-tagline">Software development company specializing in mobile and web applications.</p>
          </div>
          <div className="footer-contact">
            <p className="detail-label">Contact</p>
            <a href="mailto:support@bitkini.com">support@bitkini.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Bitkini. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}
