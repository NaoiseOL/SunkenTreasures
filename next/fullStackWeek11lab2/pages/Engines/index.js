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

  const engines = [
    {
      img: "https://d2uhsaoc6ysewq.cloudfront.net/58726/Engines-Detroit-4-53N-49187922-thumb.jpg",
      title: "Detroit 4-53 Engine",
      manufacturer: "Detroit Diesel",
      model: "4-53N",
      condition: "Factory New",
      type: "Inboard",
      horsepower: "N/A",
      price: "$3,249",
      rating: 5,
      link: "/Engines/detroit-4-53",
    },
    {
      img: "https://marine.honda.com/-/media/Feature/Outboards/ModelGroups/header-honda-outboard-bf115-140-150v2.png",
      title: "Honda BF115-150",
      manufacturer: "Honda",
      model: "BF115-150",
      condition: "Factory New",
      type: "Outboard",
      horsepower: "150 hp",
      price: "$12,000",
      rating: 5,
      link: "/Engines/honda-bf115-150",
    },
    {
      img: "https://www.osmarine.ie/image/cache/catalog/Engines/Yanmar/yanmar-8LV370_inboard-marine-engine-ireland-550x550.jpg",
      title: "Yanmar 8LV 320 Marine Diesel",
      manufacturer: "Yanmar",
      model: "8LV 320",
      condition: "Factory New",
      type: "Inboard",
      horsepower: "320 bhp",
      price: "$45,420",
      rating: 5,
      link: "/Engines/yanmar-8lv-320",
    },
    {
      img: "https://www.osmarine.ie/image/cache/catalog/Engines/Yanmar/Yanmar-SailDrive-SD25-Ireland-550x550.jpg",
      title: "Yanmar SailDrive SD60",
      manufacturer: "Yanmar",
      model: "SD60",
      condition: "Factory New",
      type: "Outboard",
      horsepower: "50 hp",
      price: "$4,980",
      rating: 4,
      link: "/Engines/yanmar-sd60",
    },
    {
      img: "https://www.osmarine.ie/image/cache/catalog/Suzuki/suzuki-marine-outboard-df30at-osmarine-550x550h.jpg",
      title: "Suzuki DF30ATL Outboard Long Shaft",
      manufacturer: "Suzuki",
      model: "DF30ATL",
      condition: "Factory New",
      type: "Outboard",
      horsepower: "30 hp",
      price: "$6,615",
      rating: 4,
      link: "/Engines/suzuki-df30atl",
    },
  ];

  const parsePrice = (price) => Number(price.replace(/[^0-9.-]+/g, ""));

  let sortedEngines = [...engines];

  if (sortMode === "low-high") {
    sortedEngines.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortMode === "high-low") {
    sortedEngines.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        background: "linear-gradient(135deg, #e0f3ff, #b4e0ff)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* FEATURED ENGINES */}
      <section style={{ padding: "2rem", maxWidth: "1300px", margin: "auto" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "#004f7c" }}>
          Featured Engines
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
          {sortedEngines.map((e, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(ev) => (ev.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(ev) => (ev.currentTarget.style.transform = "scale(1)")}
            >
              <img src={e.img} alt={e.title} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{e.title}</h3>

              <div style={{ color: "#f4b400", marginBottom: "0.3rem" }}>
                {"⭐".repeat(e.rating)}
              </div>

              <p><strong>Manufacturer:</strong> {e.manufacturer}</p>
              <p><strong>Model:</strong> {e.model}</p>
              <p><strong>Engine Type:</strong> {e.type}</p>
              <p><strong>Horsepower:</strong> {e.horsepower}</p>
              <p>💰 <strong>Price:</strong> {e.price}</p>

              <button
                onClick={() => (window.location.href = e.link)}
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
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <h2>Why Buy From Us?</h2>
        <ul>
          <li>Wide selection of new Engines</li>
          <li>Competitive financing options</li>
          <li>Expert guidance from boating specialists</li>
          <li>Full-service maintenance & support</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "2rem" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Sales: New Engines available for order</li>
          <li>Financing: Flexible payment plans</li>
          <li>Trade-Ins: Upgrade your current boat</li>
          <li>Maintenance: Certified repair & servicing</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#f1f1f1", padding: "2rem" }}>
        <h2>Customer Testimonials</h2>
        <blockquote>
          “I purchased an engine 6 months ago from AnchorManagement and it has been running
          flawlessly since. Very happy!” - Darren ⭐⭐⭐⭐⭐
        </blockquote>
        <blockquote>
          “My engine arrived damaged and I was given a brand new one free of charge. Fantastic
          service.” - Joe ⭐⭐⭐⭐⭐
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
