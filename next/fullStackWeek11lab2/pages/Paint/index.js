import React from "react";

const BoatSalesPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

      {/* ALL PAINT & VARNISH PRODUCTS COMBINED INTO ONE SECTION */}
      <section style={{ padding: "2rem" }}>
        <h2>Paints, Repair Kits & Varnish</h2>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>

          {/* Epoxy Kit */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/88/65.520.10_New2019.jpg?t=1734405406"
              style={{ width: "100%" }}
            />
            <h3>Epoxy Resin Fiberglass Repair Kit</h3>
            <p>Brand: OSCULATI</p>
            <p>Price: $61.38</p>
            <button onClick={() => window.location.href="/Paint/epoxy-repair-kit"}>
              View Details
            </button>
          </div>

          {/* Six10 Adhesive */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/200/apikmfoqn__52294.jpg?t=1738896081"
              style={{ width: "100%" }}
            />
            <h3>West System Six10 Thickened Epoxy Adhesive</h3>
            <p>Brand: Six10</p>
            <p>Price: $49.30</p>
            <button onClick={() => window.location.href="/Paint/six10-epoxy"}>
              View Details
            </button>
          </div>

          {/* Glass Fibre */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/155/LNKZ8822.jpg?t=1734404724"
              style={{ width: "100%" }}
            />
            <h3>Glass Fibre</h3>
            <p>Brand: Talamex</p>
            <p>Price: $12.40</p>
            <button onClick={() => window.location.href="/Paint/glass-fibre"}>
              View Details
            </button>
          </div>

          {/* Engine Spray Paints */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/120/GS90004.jpg?t=1735008971"
              style={{ width: "100%" }}
            />
            <h3>Engine Spray Paints</h3>
            <p>Brand: Talamex</p>
            <p>Price: $16.59</p>
            <button onClick={() => window.location.href="/Paint/engine-spray-paint"}>
              View Details
            </button>
          </div>

          {/* Brilliant Gloss Top Coat */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/162/51f7jY2pbDL._AC_SL1000_.jpg?t=1734404935"
              style={{ width: "100%" }}
            />
            <h3>Brilliant Gloss Top Coat</h3>
            <p>Brand: Hempel</p>
            <p>Price: $20.05</p>
            <button onClick={() => window.location.href="/Paint/brilliant-gloss-topcoat"}>
              View Details
            </button>
          </div>

          {/* Toplac Plus */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/195/topcoat-plus-rescue-orange-ylk265.jpg?t=1734405176"
              style={{ width: "100%" }}
            />
            <h3>International Toplac Plus</h3>
            <p>Brand: International</p>
            <p>Price: $41.11</p>
            <button onClick={() => window.location.href="/Paint/toplac-plus"}>
              View Details
            </button>
          </div>

          {/* Hempel Varnish */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/220/240/detailed/59/duraSatin.jpg?t=1732329137"
              style={{ width: "100%" }}
            />
            <h3>Hempel Classic Varnish</h3>
            <p>Brand: Hempel</p>
            <p>Price: $27.59</p>
            <button onClick={() => window.location.href="/Paint/hempel-varnish"}>
              View Details
            </button>
          </div>

          {/* Owartal Finish */}
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img
              src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/151/63.0365_w550_h550.jpg?t=1734576756"
              style={{ width: "100%" }}
            />
            <h3>Owartal Glazing Finish</h3>
            <p>Brand: Owartal</p>
            <p>Price: $19.50</p>
            <button onClick={() => window.location.href="/Paint/owartal-glazing"}>
              View Details
            </button>
          </div>

        </div>
      </section>

      {/* WHY BUY */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of Paints and Colours</li>
          <li>Competitive financing options</li>
          <li>Expert guidance from boating specialists</li>
          <li>Full-service maintenance & support</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "2rem" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Sales: New & pre-owned boats</li>
          <li>Financing: Flexible payment plans</li>
          <li>Trade-Ins: Upgrade your current boat</li>
          <li>Maintenance: Certified repair & servicing</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#f1f1f1", padding: "2rem" }}>
        <h2>Customer Testimonials</h2>
        <blockquote>
          “I ordered the Hempel varnish and it arrived in 3 days — great service!” ⭐⭐⭐⭐⭐
        </blockquote>
        <blockquote>
          “Paint was ready for pickup the same day. Amazing shop!” ⭐⭐⭐⭐⭐
        </blockquote>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📍 Silicon Dock, Galway</p>
        <p>📞 085 253 4566</p>
        <p>📧 CustomerService@anchormanagement.com</p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0077b6", color: "#fff", textAlign: "center", padding: "1rem" }}>
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>

    </div>
  );
};

export default BoatSalesPage;
