import React from "react";

const BoatSalesPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>      

      {/* Featured Boats */}
      <section style={{ padding: "2rem" }}>
        <h2>Featured Engines</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d2uhsaoc6ysewq.cloudfront.net/58726/Engines-Detroit-4-53N-49187922-thumb.jpg" alt="Bayliner VR5 Bowrider" style={{ width: "100%" }} />
            <h3>Detroit 4-53 Engine</h3>
            <p>Manufacturer: Detroit,</p> 
            <p>Model: 4-53N</p>
             <p>Condition: Factory New</p>            
            <p>Engine Type: inboard</p>
            <p>Price: $3,249</p>
            <button onClick={() => window.location.href = "/Engines/detroit-4-53"}>  
              View Details
            </button>

          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://marine.honda.com/-/media/Feature/Outboards/ModelGroups/header-honda-outboard-bf115-140-150v2.png" alt="Yamaha AR195" style={{ width: "100%" }} />
            <h3>Honda BF115-150</h3>
            <p>Horsepower: 150hp</p>
            <p>Manufacuter: Honda</p>
            <p>Model: BF</p>
            <p>Condition: Factory New</p>           
            <p>Engine Type: Outboard</p>
            <p>Price: $12,000</p>
            <button onClick={() => window.location.href = "/Engines/honda-bf115-150"}>
              View Details
            </button>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://www.osmarine.ie/image/cache/catalog/Engines/Yanmar/yanmar-8LV370_inboard-marine-engine-ireland-550x550.jpg" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Yanmar 8lv 320 Marine diesal</h3>
            <p>Horsepower: 320 bhp</p>
            <p>Manufacuter: Yanmar</p>
            <p>Model: 320</p>
            <p>Cylinders: 8</p>
            <p>Condition: Factory New</p>          
            <p>Engine Type: inboard</p>
              <p>Price: $45,420</p>
            <button onClick={() => window.location.href = "/Engines/yanmar-sd60"}>
                View Details
              </button>

          </div>
           <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://www.osmarine.ie/image/cache/catalog/Engines/Yanmar/Yanmar-SailDrive-SD25-Ireland-550x550.jpg" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Yanmar SailDrive SD60</h3>
            <p>Horsepower: 50 </p>
            <p>Manufacuter: Yanmar</p>
            <p>Model: SD60</p>
            <p>Cylinders: 4</p>
            <p>Condition: Factory New</p>          
            <p>Engine Type: Outboard</p>
              <p>Price: $4,980</p>
            <button onClick={() => window.location.href = "/Engines/yanmar-sd60"}>
                View Details
            </button>

          </div>
           <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://www.osmarine.ie/image/cache/catalog/Suzuki/suzuki-marine-outboard-df30at-osmarine-550x550h.jpg" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Suzuki DF30ATL Outboard Long Shaft</h3>
            <p>Horsepower: 30 </p>
            <p>Manufacuter: Suzuki</p>
            <p>Model: SD60</p>
            <p>Cylinders: 3</p>
            <p>Condition: Factory New</p>            
            <p>Engine Type: Outboard</p>
            <p>Price: $6,615</p>
            <button onClick={() => window.location.href = "/Engines/suzuki-df30atl"}>
                View Details
                </button>

           
          </div>
        </div>
      </section>


      {/* Why Buy From Us */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of new Engines</li>
          <li>Competitive financing options</li>
          <li>Expert guidance from boating specialists</li>
          <li>Full-service maintenance & support</li>
        </ul>
      </section>

      {/* Services */}
      <section style={{ padding: "2rem" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Sales: New Engines available for order</li>
          <li>Financing: Flexible payment plans</li>
          <li>Trade-Ins: Upgrade your current boat</li>
          <li>Maintenance: Certified repair & servicing</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f1f1f1", padding: "2rem" }}>
        <h2>Customer Testimonials</h2>
        <blockquote>
          “I Purchased an Engine 6 months ago from AnchorManagement and it has been running flawlessy since my purchase, i am very happy” - Darren ⭐⭐⭐⭐⭐
        </blockquote>
        <blockquote>
          “My Engine arrived damaged and i was able to contact support and be given a brand new enginer free of charge” - Joe ⭐⭐⭐⭐⭐
        </blockquote>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📍 Location: Silicon Dock, Galway</p>
        <p>📞 Phone: 085 253 4566</p>
        <p>📧 Email: CustomerService@anchormanagement.com</p>
        <div>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>Schedule a Visit</button>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>Request a Quote</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0077b6", color: "#fff", textAlign: "center", padding: "1rem" }}>
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>
    </div>
  );
};

export default BoatSalesPage;