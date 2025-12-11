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

  const parts = [
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/128/SHE23973.jpg?t=1734404829",
      title: "Minor Repair Kit",
      brand: "Sherwood",
      price: "$405.48",
      rating: 5,
      link: "/Parts/minor-repair-kit",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/117/CEF500164T.jpg?t=1734405076",
      title: "IMPELLER CEF500164T",
      brand: "Impeller",
      price: "$117.07",
      rating: 4,
      link: "/Parts/impeller-cef500164t",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/220/240/detailed/131/RECGM6.2MPI.jpg?t=1732329200",
      title: "Engine Base GM 6.2 MPI",
      brand: "Recmar",
      price: "$14,510.67",
      rating: 5,
      link: "/Parts/engine-base-gm-62",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/151/300.png?t=1734835865",
      title: "MARINE BASE ENGINE 5.7L",
      brand: "Recmar",
      price: "$7,657.29",
      rating: 4,
      link: "/Parts/gm350-vortec",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/127/RECGM350PREVORTEC.jpg?t=1734405162",
      title: "GM 350 Vortec Marine Engine",
      brand: "Recmar",
      price: "$7,595.29",
      rating: 4,
      link: "/Parts/gm350-vortec",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/62/REC22898644.jpg?t=1734404999",
      title: "Dual Prop fits Volvo G4",
      brand: "Recmar",
      price: "$3,427.55",
      rating: 4,
      link: "/Parts/volvo-dual-prop-g4",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/127/REC898253T22.jpg?t=1734490780",
      title: "Mercruiser Distribution Cap Vortec V8 GXI MPI",
      brand: "Recmar",
      price: "$62.52",
      rating: 4,
      link: "/Parts/distribution-cap-vortec",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/44/1_mzga-ix.jpg?t=1734405327",
      title: "Ignition Coil Module V6 & V8 Vortec",
      brand: "Recmar",
      price: "$80.54",
      rating: 4,
      link: "/Parts/ignition-coil-module",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/126/REC875579.jpg?t=1734490852",
      title: "Piston Set for Diesel Engines 0.75mm",
      brand: "Recmar",
      price: "$849.35",
      rating: 5,
      link: "/Parts/diesel-piston-set",
    },
    {
      img: "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/62/REC20739057.jpg?t=1734404998",
      title: "Inlet Valve Diesel D16C-A",
      brand: "Recmar",
      price: "$69.41",
      rating: 4,
      link: "/Parts/diesel-inlet-valve",
    },
  ];

  const parsePrice = (price) => Number(price.replace(/[^0-9.-]+/g, ""));

  let sortedParts = [...parts];

  if (sortMode === "low-high") {
    sortedParts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortMode === "high-low") {
    sortedParts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        background: "linear-gradient(135deg, #e0f3ff, #b4e0ff)",
        minHeight: "100vh",
        paddingBottom: "3rem",
        padding: "2rem",
      }}
    >
      {/* FEATURED PARTS */}
      <section style={{ padding: "2rem", maxWidth: "1300px", margin: "auto" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "#004f7c" }}>
          Featured Parts
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
          {sortedParts.map((p, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(ev) => (ev.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(ev) => (ev.currentTarget.style.transform = "scale(1)")}
            >
              <img src={p.img} alt={p.title} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{p.title}</h3>

              <div style={{ color: "#f4b400", marginBottom: "0.3rem" }}>
                {"⭐".repeat(p.rating)}
              </div>

              <p><strong>Brand:</strong> {p.brand}</p>
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
        <blockquote>
          “My engine arrived damaged and I was able to contact support and was given a brand new
          engine free of charge.” - Joe ⭐⭐⭐⭐⭐
        </blockquote>
        <blockquote>
          “Fast shipping and the parts were exactly what I needed.” - Sarah ⭐⭐⭐⭐⭐
        </blockquote>
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
