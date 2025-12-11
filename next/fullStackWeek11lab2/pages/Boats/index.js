import React, { useState } from "react";

const cardStyle = {
  background: "rgba(255,255,255,0.82)",
  backdropFilter: "blur(6px)",
  borderRadius: "15px",
  padding: "1rem",
  width: "300px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const BoatSalesPage = () => {
  const [sortMode, setSortMode] = useState("default");

  const toggleSort = () => {
    if (sortMode === "default") setSortMode("low-high");
    else if (sortMode === "low-high") setSortMode("high-low");
    else setSortMode("default");
  };

  const boats = [
    {
      img: "https://brunswick.scene7.com/is/image/brunswick/Hero-5?$H-2000-2000$&fit=constrain&fmt=webp-alpha",
      title: "Bayliner VR5 Bowrider",
      length: "20 ft",
      engine: "200 HP",
      seats: 8,
      price: "$35,000",
      rating: 5,
      link: "/Boats/bayliner-vr5",
    },
    {
      img: "https://images.boattrader.com/resize/1/56/66/2019-yamaha-boats-ar195-power-9895666-20250804131820349-1.jpg?w=402&ratio=default&t=1754338701000&format=webp&exact",
      title: "Yamaha AR195",
      length: "19 ft",
      engine: "Jet Drive",
      seats: 8,
      price: "$29,500",
      rating: 4,
      link: "/Boats/yamaha-ar195",
    },
    {
      img: "https://www.searay.com/content/dam/searay/spx-series/spx-210-ob/sea-ray-spx-210-outboard-floorplan.png",
      title: "Sea Ray SPX 210",
      length: "21 ft",
      engine: "250 HP",
      seats: 10,
      price: "$42,000",
      rating: 5,
      link: "/Boats/sea-ray-spx210",
    },
  ];

  const parsePrice = (price) => Number(price.replace(/[^0-9.-]+/g, ""));

  let sortedBoats = [...boats];

  if (sortMode === "low-high") {
    sortedBoats.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortMode === "high-low") {
    sortedBoats.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        background: "linear-gradient(135deg, #e0f7ff, #c3e0ff)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* HERO */}
      <header
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "#0077b6",
          color: "#fff",
          borderRadius: "10px",
          maxWidth: "1200px",
          margin: "0 auto 2rem auto",
        }}
      >
        <h1>Find Your Perfect Boat Today</h1>
        <p>New & pre-owned boats, unbeatable prices, trusted service.</p>
        <div>
          <button
            style={{
              margin: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Browse Inventory
          </button>
          <button
            style={{
              margin: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* FEATURED BOATS */}
      <section style={{ padding: "2rem", maxWidth: "1300px", margin: "auto" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "#004f7c" }}>
          Featured Boats
        </h2>

        {/* SORT BUTTON */}
        <button
          onClick={toggleSort}
          style={{
            padding: "0.6rem 1rem",
            background: "#0077b6",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            marginBottom: "1.5rem",
          }}
        >
          Sort by Price (
          {sortMode === "default"
            ? "Default"
            : sortMode === "low-high"
            ? "Low → High"
            : "High → Low"}
          )
        </button>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {sortedBoats.map((b, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(ev) => (ev.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(ev) => (ev.currentTarget.style.transform = "scale(1)")}
            >
              <img src={b.img} alt={b.title} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{b.title}</h3>

              <div style={{ color: "#f4b400", marginBottom: "0.3rem" }}>
                {"⭐".repeat(b.rating)}
              </div>

              <p><strong>Length:</strong> {b.length}</p>
              <p><strong>Engine:</strong> {b.engine}</p>
              <p><strong>Seats:</strong> {b.seats}</p>
              <p>💰 <strong>Price:</strong> {b.price}</p>

              <button
                onClick={() => (window.location.href = b.link)}
                style={{
                  marginTop: "0.5rem",
                  background: "#0077b6",
                  color: "white",
                  padding: "0.6rem 1rem",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BUY */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of new & used boats</li>
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
        <blockquote>“They've got boats alright” - John down the road</blockquote>
        <blockquote>“Wow boy do they have some boats” - Joe</blockquote>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📍 Location: Silicon Dock, Galway</p>
        <p>📞 Phone: 085 253 4566</p>
        <p>📧 Email: CustomerService@anchormanagement.com</p>
        <div>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>
            Schedule a Visit
          </button>
          <button style={{ margin: "0.5rem", padding: "0.75rem 1.5rem" }}>
            Request a Quote
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0077b6",
          color: "#fff",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>
    </div>
  );
};

export default BoatSalesPage;
