import React from "react";

const BoatSalesPage = () => {
  return (
    <div
              style={{
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                background: "linear-gradient(135deg, #e0f3ff, #b4e0ff)",
                minHeight: "100vh",
                paddingBottom: "3rem"
              }}
        >
   

      {/* Featured Boats */}  <section style={{ padding: "2rem" }}>
        <h2>Featured Parts</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/128/SHE23973.jpg?t=1734404829" alt="Bayliner VR5 Bowrider" style={{ width: "100%" }} />
            <h3>Minor repair kit</h3>
            <p>Brand: Sherwood</p>
            <p>Price: $405.48</p>
            <button onClick={() => window.location.href="/Parts/minor-repair-kit"}>
                View Details
              </button>

          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/117/CEF500164T.jpg?t=1734405076" alt="Yamaha AR195" style={{ width: "100%" }} />
            <h3>IMPELLER CEF500164T</h3>
            <p>Brand: impeller</p>
            <p>Price: $117.07</p>
           <button onClick={() => window.location.href="/Parts/impeller-cef500164t"}>
              View Details
            </button>

          </div>
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/220/240/detailed/131/RECGM6.2MPI.jpg?t=1732329200" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Engine Base GM 6.2 MPI</h3>
            <p>Brand: Recmar</p>
            <p>Price: $14,510.67</p>
            <button onClick={() => window.location.href="/Parts/engine-base-gm-62"}>
                View Details
              </button>

          </div>  
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/151/300.png?t=1734835865" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>MARINE BASE ENGINE 5.7L</h3>
            <p>Brand: Recmar</p>
            <p>Price: $7,657.29</p>
            <button onClick={() => window.location.href="/Parts/gm350-vortec"}>
              View Details
            </button>

          </div>  
           <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/127/RECGM350PREVORTEC.jpg?t=1734405162" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3></h3>
            <p>Brand: Recmar</p>
            <p>Price: $7,595.29</p>
            <button onClick={() => window.location.href="/Parts/gm350-vortec"}>
                View Details
            </button>

          </div>      
           <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/62/REC22898644.jpg?t=1734404999" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Duel Prop fits Volvo G4 (22548194, 22754004, 23000185, 22898644)</h3>
            <p>Brand: Recmar</p>
            <p>Price: $3,427.55</p>
            <button onClick={() => window.location.href="/Parts/volvo-dual-prop-g4"}>
                View Details
            </button>


          </div>      
           <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/127/REC898253T22.jpg?t=1734490780" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Mercruiser/ Distribution Cap Late Vortec V8 GXI MPI (3858975, 884792, 898253T22)</h3>
            <p>Brand: Recmar</p>
            <p>Price: $62.52</p>
           <button onClick={() => window.location.href="/Parts/distribution-cap-vortec"}>
              View Details
              </button>

          </div>          
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/44/1_mzga-ix.jpg?t=1734405327" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Ignition Coil Module V6 & V8 Vortec (3858984)</h3>
            <p>Brand: Recmar</p>
            <p>Price: $80.54</p>
           <button onClick={() => window.location.href="/Parts/ignition-coil-module"}>
              View Details
              </button>

          </div>         
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/126/REC875579.jpg?t=1734490852" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>Piston set for diesel engines ( 875497, 875579) 0.75mm</h3>
            <p>Brand: Recmar</p>
            <p>Price: $849.35</p>
           <button onClick={() => window.location.href="/Parts/diesel-piston-set"}>
              View Details
              </button>

          </div>        
          <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
            <img src="https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/62/REC20739057.jpg?t=1734404998" alt="Sea Ray SPX 210" style={{ width: "100%" }} />
            <h3>INLET VALVE Diesel D16C-A MH,-A MG,-B MB,-C MH(20739057)</h3>
            <p>Brand: Recmar</p>
            <p>Price: $69.41</p>
           <button onClick={() => window.location.href="/Parts/diesel-inlet-valve"}>
              View Details
              </button>

          </div>         
        </div>
      </section>      


      
      {/* Why Buy From Us */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of new & used boats</li>
          <li>Competitive financing options</li>
          <li>Expert guidance from boating specialists</li>
          <li>Full-service maintenance & support</li>
        </ul>
      </section>

      {/* Services */}
      <section style={{ padding: "2rem" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Sales: New & pre-owned boats</li>
          <li>Financing: Flexible payment plans</li>
          <li>Trade-Ins: Upgrade your current boat</li>
          <li>Maintenance: Certified repair & servicing</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#f1f1f1", padding: "2rem" }}>
        <h2>Customer Testimonials</h2>
        <blockquote>
           “My Engine arrived damaged and i was able to contact support and be given a brand new enginer free of charge” - Joe ⭐⭐⭐⭐⭐
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