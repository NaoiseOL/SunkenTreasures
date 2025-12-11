import React from "react";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.container}>
      {/* Hero Section */}
      <header className={classes.hero}>
        <div className={classes.overlay}></div>
        <div className={classes.heroContent}>
          <h1>Find Your Perfect Boat Today</h1>
          <p>New & pre-owned boats, unbeatable prices, trusted service.</p>
          <div>
            <button className={classes.heroButton}>Browse Inventory</button>
            <button className={classes.heroButton}>Contact Us</button>
          </div>
        </div>
      </header>

      {/* Featured Boats */}
      <section className={classes.featured}>
        <h2>Featured Boats</h2>
        <div className={classes.boatGrid}>
          <div className={classes.boatCard}>
            <img
              src="https://brunswick.scene7.com/is/image/brunswick/Hero-5?$H-2000-2000$&fit=constrain&fmt=webp-alpha"
              alt="Bayliner VR5 Bowrider"
            />
            <h3>Bayliner VR5 Bowrider</h3>
            <p>20 ft length, 200 HP engine, 8 seats</p>
            <p>Price: $35,000</p>
            <button>View Details</button>
          </div>
          <div className={classes.boatCard}>
            <img
              src="https://images.boattrader.com/resize/1/56/66/2019-yamaha-boats-ar195-power-9895666-20250804131820349-1.jpg?w=402&ratio=default&t=1754338701000&format=webp&exact"
              alt="Yamaha AR195"
            />
            <h3>Yamaha AR195</h3>
            <p>19 ft length, jet drive, 8 seats</p>
            <p>Price: $29,500</p>
            <button>View Details</button>
          </div>
          <div className={classes.boatCard}>
            <img
              src="https://www.searay.com/content/dam/searay/spx-series/spx-210-ob/sea-ray-spx-210-outboard-floorplan.png"
              alt="Sea Ray SPX 210"
            />
            <h3>Sea Ray SPX 210</h3>
            <p>21 ft length, 250 HP engine, 10 seats</p>
            <p>Price: $42,000</p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className={classes.lightSection}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of new & used boats</li>
          <li>Competitive financing options</li>
          <li>Expert guidance from boating specialists</li>
          <li>Full-service maintenance & support</li>
        </ul>
      </section>

      {/* Services */}
      <section className={classes.section}>
        <h2>Our Services</h2>
        <ul>
          <li>Sales: New & pre-owned boats</li>
          <li>Financing: Flexible payment plans</li>
          <li>Trade-Ins: Upgrade your current boat</li>
          <li>Maintenance: Certified repair & servicing</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className={classes.greySection}>
        <h2>Customer Testimonials</h2>
        <div>“They've got boats alright” - John down the road</div>
        <div>“Wow boy do they have some boats” - That fella from the pub</div>
      </section>

      {/* Contact Section */}
      <section className={classes.centerSection}>
        <h2>Contact Us</h2>
        <p>Location: Silicon Dock, Galway</p>
        <p>Phone: 085 253 3038</p>
        <p>Email: CustomerService@anchormanagement.com</p>
        <div>
          <button className={classes.heroButton}>Schedule a Visit</button>
          <button className={classes.heroButton}>Request a Quote</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={classes.footer}>
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>
    </div>
  );
};

export default HomePage;
