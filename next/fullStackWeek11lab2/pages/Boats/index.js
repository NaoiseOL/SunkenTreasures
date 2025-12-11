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

  // FILTER STATES
  const [brandFilter, setBrandFilter] = useState("all");
  const [lengthFilter, setLengthFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const toggleSort = () => {
    if (sortMode === "default") setSortMode("low-high");
    else if (sortMode === "low-high") setSortMode("high-low");
    else setSortMode("default");
  };

  // BOAT DATA
  const boats = [
    {
      img: "https://brunswick.scene7.com/is/image/brunswick/Hero-5?$H-2000-2000$&fit=constrain&fmt=webp-alpha",
      title: "Bayliner VR5 Bowrider",
      brand: "Bayliner",
      length: 20,
      engine: "200 HP",
      seats: 8,
      price: "$35,000",
      rating: 5,
      link: "/Boats/bayliner-vr5",
    },
    {
      img: "https://images.boattrader.com/resize/1/56/66/2019-yamaha-boats-ar195-power-9895666-20250804131820349-1.jpg?w=402&ratio=default&t=1754338701000&format=webp&exact",
      title: "Yamaha AR195",
      brand: "Yamaha",
      length: 19,
      engine: "Jet Drive",
      seats: 8,
      price: "$29,500",
      rating: 4,
      link: "/Boats/yamaha-ar195",
    },
    {
      img: "https://www.searay.com/content/dam/searay/spx-series/spx-210-ob/sea-ray-spx-210-outboard-floorplan.png",
      title: "Sea Ray SPX 210",
      brand: "Sea Ray",
      length: 21,
      engine: "250 HP",
      seats: 10,
      price: "$42,000",
      rating: 5,
      link: "/Boats/sea-ray-spx210",
    },
   
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqTOx1weK-DrKnY_yQt7VxZy4fXTZpGvwrQ&s",
      title: "Quicksilver Activ 605 Open",
      brand: "Quicksilver",
      length: "20 ft",
      engine: "150 HP Mercury",
      seats: 7,
      price: "$31,900",
      rating: 4,
      link: "/Boats/quicksilver-activ-605",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmHtq17AwuwnJKjgxcoq1rCLVfbFPpEmTSw&s",
      title: "Jeanneau Cap Camarat 7.5 WA",
      brand: "Jeanneau",
      length: "24 ft",
      engine: "300 HP Yamaha",
      seats: 9,
      price: "$59,900",
      rating: 5,
      link: "/Boats/jeanneau-cam-75wa",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_OovdTd-1jw9PlZYHlOojG4qofhd13zrYQ&s",
      title: "Axopar Antares 8",
      brand: "Axopar",
      length: "26 ft",
      engine: "250 HP Suzuki",
      seats: 8,
      price: "$74,500",
      rating: 5,
      link: "/Boats/beneteau-antares-8",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4_7fsYXgV0fCVu3OahYLNm2C510QzVfoWw&s",
      title: "Axopar 28 Cabin",
        brand: "Axopar",
        length: 28,
        engine: "Twin 200 HP Mercury",
        seats: 10,
        price: "$118,000",
        rating: 5,
        link: "/Boats/axopar-28-cabin",
    },
    {
      img: "https://cdn.prod.website-files.com/64e7d056072282acec3352e4/6706e7f523ec020a94e76212_6668e06b1c2a2e0ea0ec7b1c_65a94e7612857cdaf57b82fc_6577f97ca2cf25938ba2f7be_2023-Mastercraft-NXT22-Teal-22%25252527-14-Platinum-840x630.webp",
      title: "MasterCraft NXT22",
      brand: "MasterCraft",
      length: "22 ft",
      engine: "430 HP Ilmor",
      seats: 14,
      price: "$98,500",
      rating: 5,
      link: "/Boats/mastercraft-nxt22",
    },
  ];

  // Convert "$29,500" → 29500
  const parsePrice = (price) => Number(price.replace(/[^0-9.-]+/g, ""));

  // APPLY FILTERS
  let filteredBoats = boats.filter((b) => {
    let ok = true;

    // Filter Brand
    if (brandFilter !== "all" && b.brand !== brandFilter) ok = false;

    // Filter Length
    if (lengthFilter === "short" && b.length >= 20) ok = false;
    if (lengthFilter === "medium" && (b.length < 20 || b.length > 25)) ok = false;
    if (lengthFilter === "long" && b.length <= 25) ok = false;

    // Filter Price
    const price = parsePrice(b.price);
    if (priceFilter === "low" && price > 30000) ok = false;
    if (priceFilter === "mid" && (price < 30000 || price > 60000)) ok = false;
    if (priceFilter === "high" && price < 60000) ok = false;

    return ok;
  });

  // APPLY SORTING
  if (sortMode === "low-high") {
    filteredBoats.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortMode === "high-low") {
    filteredBoats.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
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
      {/* HERO SECTION */}
      <header
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "#0077b6",
          color: "white",
          borderRadius: "10px",
          marginBottom: "2rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1>Find Your Perfect Boat Today</h1>
        <p>New & pre-owned boats, unbeatable prices, trusted service.</p>
      </header>

      {/* FILTER PANEL */}
      <section style={{ maxWidth: "1300px", margin: "auto", marginBottom: "1.5rem" }}>
        <h3>Filter Boats</h3>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          
          {/* BRAND FILTER */}
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            style={{ padding: "0.5rem" }}
          >
            <option value="all">All Brands</option>
            <option value="Bayliner">Bayliner</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Sea Ray">Sea Ray</option>
            <option value="Axopar">Axopar</option>
            <option value="Jeanneau">Jeanneau</option>
            <option value="Quicksilver">Quicksilver</option>
          </select>

          {/* LENGTH FILTER */}
          <select
            value={lengthFilter}
            onChange={(e) => setLengthFilter(e.target.value)}
            style={{ padding: "0.5rem" }}
          >
            <option value="all">All Lengths</option>
            <option value="short">Under 20 ft</option>
            <option value="medium">20–25 ft</option>
            <option value="long">Over 25 ft</option>
          </select>

          {/* PRICE FILTER */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            style={{ padding: "0.5rem" }}
          >
            <option value="all">All Prices</option>
            <option value="low">Under $30,000</option>
            <option value="mid">$30,000–$60,000</option>
            <option value="high">Over $60,000</option>
          </select>

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
        </div>
      </section>

      {/* BOAT CARDS */}
      <section style={{ maxWidth: "1300px", margin: "auto" }}>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {filteredBoats.map((b, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={b.img} alt={b.title} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{b.title}</h3>
              <div style={{ color: "#f4b400", marginBottom: "0.3rem" }}>
                {"⭐".repeat(b.rating)}
              </div>
              <p><strong>Brand:</strong> {b.brand}</p>
              <p><strong>Length:</strong> {b.length} ft</p>
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
    </div>
  );
};

export default BoatSalesPage;
