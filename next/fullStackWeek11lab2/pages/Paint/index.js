import React from "react";

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
      {/* All Paints */}
      <section style={{ maxWidth: "1300px", margin: "auto" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem", color: "#004f7c" }}>
          Paints, Repair Kits & Varnish
        </h2>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>

          {/* Card Component Template */}
          {[
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
          ].map((p, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={p.img} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{p.title}</h3>

              {/* ⭐ Rating */}
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

      {/* WHY BUY */}
      <section style={{ background: "#f1f1f1", padding: "2rem", marginTop: "2rem", borderRadius: "10px" }}>
        <h2 style={{ color: "#004f7c" }}>Why Buy From Us?</h2>
        <ul>
          <li>⭐ Trusted by thousands of boat owners</li>
          <li>⚡ Fast delivery & premium quality</li>
          <li>🎨 Huge selection of marine paints</li>
          <li>🔧 Expert advice & friendly support</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#ffffff", padding: "2rem", borderRadius: "10px", marginTop: "2rem" }}>
        <h2 style={{ color: "#004f7c" }}>Customer Reviews</h2>
        <blockquote>“Amazing quality paint, my boat looks brand new!” ⭐⭐⭐⭐⭐</blockquote>
        <blockquote>“Friendly staff, fast delivery. Highly recommend!” ⭐⭐⭐⭐⭐</blockquote>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: "2rem", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📍 Silicon Dock, Galway</p>
        <p>📞 085 253 4566</p>
        <p>📧 CustomerService@anchormanagement.com</p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#004f7c",
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
