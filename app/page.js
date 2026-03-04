export default function Home() {
  return (
    <>
      <nav>
        <a className="logo" href="#">Bitkini</a>
        <a className="contact-link" href="mailto:support@bitkini.com">Contact</a>
      </nav>

      <main>
        <p className="eyebrow">App Service Startup</p>
        <h1>Build something<br /><span>worth using.</span></h1>
        <p className="sub">
          Bitkini crafts mobile and web apps that people actually enjoy.
          Simple products, thoughtful execution, real impact.
        </p>
        <div className="cta-group">
          <a className="btn-primary" href="mailto:support@bitkini.com">Get in touch</a>
          <a className="btn-ghost" href="mailto:support@bitkini.com">support@bitkini.com</a>
        </div>
      </main>

      <section className="features">
        <div className="features-grid">
          <div>
            <p className="feature-label">01</p>
            <p className="feature-title">Product Design</p>
            <p className="feature-desc">Clean interfaces built around how people actually think and interact.</p>
          </div>
          <div>
            <p className="feature-label">02</p>
            <p className="feature-title">Mobile &amp; Web</p>
            <p className="feature-desc">Cross-platform apps shipped fast without cutting corners on quality.</p>
          </div>
          <div>
            <p className="feature-label">03</p>
            <p className="feature-title">Iteration</p>
            <p className="feature-desc">We move quickly, listen to users, and keep improving until it&apos;s right.</p>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Bitkini. All rights reserved.</span>
        <a href="mailto:support@bitkini.com">support@bitkini.com</a>
      </footer>
    </>
  )
}
