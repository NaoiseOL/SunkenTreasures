import React, { useState } from "react";

const cardStyle = {
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(6px)",
  borderRadius: "15px",
  padding: "1rem",
  width: "300px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

const BoatSalesPage = () => {
  const [sortMode, setSortMode] = useState("default");

  const toggleSort = () => {
    if (sortMode === "default") setSortMode("low-high");
    else if (sortMode === "low-high") setSortMode("high-low");
    else setSortMode("default");
  };

  const products = [
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/88/65.520.10_New2019.jpg?t=1734405406",
      title: "Epoxy Resin Fiberglass Repair Kit",
      brand: "OSCULATI",
      price: "$61.38",
      rating: 5,
      link: "/Paint/epoxy-repair-kit",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/200/apikmfoqn__52294.jpg?t=1738896081",
      title: "Six10 Thickened Epoxy Adhesive",
      brand: "Six10",
      price: "$49.30",
      rating: 4,
      link: "/Paint/six10-epoxy",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/155/LNKZ8822.jpg?t=1734404724",
      title: "Glass Fibre Sheet",
      brand: "Talamex",
      price: "$12.40",
      rating: 4,
      link: "/Paint/glass-fibre",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/120/GS90004.jpg?t=1735008971",
      title: "Engine Spray Paints",
      brand: "Talamex",
      price: "$16.59",
      rating: 5,
      link: "/Paint/engine-spray-paint",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/162/51f7jY2pbDL._AC_SL1000_.jpg?t=1734404935",
      title: "Brilliant Gloss Top Coat",
      brand: "Hempel",
      price: "$20.05",
      rating: 5,
      link: "/Paint/brilliant-gloss-topcoat",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/195/topcoat-plus-rescue-orange-ylk265.jpg?t=1734405176",
      title: "International Toplac Plus",
      brand: "International",
      price: "$41.11",
      rating: 4,
      link: "/Paint/toplac-plus",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/220/240/detailed/59/duraSatin.jpg?t=1732329137",
      title: "Hempel Classic Varnish",
      brand: "Hempel",
      price: "$27.59",
      rating: 5,
      link: "/Paint/hempel-varnish",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/151/63.0365_w550_h550.jpg?t=1734576756",
      title: "Owartal Glazing Finish",
      brand: "Owartal",
      price: "$19.50",
      rating: 4,
      link: "/Paint/owartal-glazing",
    },
  ];

  // Convert "$12.40" → 12.40 for sorting
  const parsePrice = (price) => Number(price.replace(/[^0-9.-]+/g, ""));

  let sortedProducts = [...products];

  if (sortMode === "low-high") {
    sortedProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortMode === "high-low") {
    sortedProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
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
      {/* MAIN SECTION */}
      <section style={{ maxWidth: "1300px", margin: "auto" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "#004f7c" }}>
          Paints, Repair Kits & Varnish
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

        {/* PRODUCT GRID */}
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {sortedProducts.map((p, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={p.img} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{p.title}</h3>

              <div style={{ color: "#f4b400", marginBottom: "0.3rem" }}>
                {"⭐".repeat(p.rating)}
              </div>

              <p>🏷️ <strong>Brand:</strong> {p.brand}</p>
              <p>💰 <strong>Price:</strong> {p.price}</p>

              <button
                onClick={() => (window.location.href = p.link)}
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

      {/* WHY BUY FROM US */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "2rem",
          marginTop: "2rem",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#004f7c" }}>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of Paints and Colours</li>
          <li>Competitive pricing options</li>
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
      <section
        style={{
          background: "#f1f1f1",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
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
        <p>📞 Phone: 085 253 4566</p>
        <p>📧 Email: CustomerService@anchormanagement.com</p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0077b6",
          color: "white",
          textAlign: "center",
          padding: "1rem",
          marginTop: "2rem",
          borderRadius: "8px",
        }}
      >
        <p>Quick Links: Inventory | Financing | Services | Contact</p>
        <p>© {new Date().getFullYear()} AnchorManagement</p>
      </footer>
    </div>
  );
};

export default BoatSalesPage;

