import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-rule" />

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark wordmark--footer">
              <span className="wordmark__line">
                CAMBER <span>&amp;</span> CORE
              </span>
              <span className="wordmark__subline">SYSTEMS</span>
            </Link>
            <p>Secure Local Intelligence.</p>
          </div>

          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li><Link href="/services">LiDAR &amp; Remote Sensing</Link></li>
              <li><Link href="/services">GIS &amp; Spatial Analysis</Link></li>
              <li><Link href="/services">NG9-1-1 Readiness</Link></li>
              <li><Link href="/services">Custom Software</Link></li>
              <li><Link href="/services">Data Automation</Link></li>
              <li><Link href="/services">Compliance &amp; QA</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Company</h2>
            <ul>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Contact</h2>
            <ul>
              <li>Victoria, BC</li>
              <li><a href="tel:2502798735">250-279-8735</a></li>
              <li><a href="mailto:john@camberandcore.ca">john@camberandcore.ca</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-rule" />

        <div className="footer-bottom">
          <small>© 2026 Camber &amp; Core Systems Inc.</small>
          <a href="https://cambercore.ca">cambercore.ca</a>
        </div>
      </div>
    </footer>
  );
}
