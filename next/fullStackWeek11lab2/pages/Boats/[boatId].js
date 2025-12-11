import { useRouter } from "next/router";

const boatData = {
  "bayliner-vr5": {
    title: "Bayliner VR5 Bowrider",
    image:
      "https://brunswick.scene7.com/is/image/brunswick/Hero-5?$H-2000-2000$&fit=constrain&fmt=webp-alpha",
    length: "20 ft",
    engine: "200 HP",
    seats: "8 Seats",
    price: "$35,000",
    description:
      "A comfortable and stylish bowrider perfect for family outings, watersports, and leisure cruising.",
  },

  "yamaha-ar195": {
    title: "Yamaha AR195",
    image:
      "https://images.boattrader.com/resize/1/56/66/2019-yamaha-boats-ar195-power-9895666-20250804131820349-1.jpg?w=402&ratio=default&t=1754338701000&format=webp&exact",
    length: "19 ft",
    engine: "Jet Drive",
    seats: "8 Seats",
    price: "$29,500",
    description:
      "A sporty jet-driven boat offering excellent performance and maneuverability.",
  },

  "sea-ray-spx210": {
    title: "Sea Ray SPX 210",
    image:
      "https://www.searay.com/content/dam/searay/spx-series/spx-210-ob/sea-ray-spx-210-outboard-floorplan.png",
    length: "21 ft",
    engine: "250 HP",
    seats: "10 Seats",
    price: "$42,000",
    description:
      "A premium, spacious bowrider designed for comfort, cruising, and reliability.",
  },
};

export default function BoatDetailPage() {
  const router = useRouter();
  const { boatId } = router.query;

  if (!boatId) return <p>Loading...</p>;

  const boat = boatData[boatId];

  if (!boat)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Boat Not Found</h1>
      </div>
    );

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "auto" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "1.5rem",
          padding: "0.5rem 1rem",
          background: "#e0e0e0",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <img
          src={boat.image}
          alt={boat.title}
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "450px",
            objectFit: "contain",
          }}
        />

        <div style={{ flex: "1" }}>
          <h1>{boat.title}</h1>
          <div
            style={{
              background: "#0077b6",
              padding: "8px 20px",
              color: "white",
              display: "inline-block",
              borderRadius: "5px",
              marginBottom: "1rem",
            }}
          >
            {boat.price}
          </div>

          <h2>Specifications</h2>
          <ul>
            <li><strong>Length:</strong> {boat.length}</li>
            <li><strong>Engine:</strong> {boat.engine}</li>
            <li><strong>Seating:</strong> {boat.seats}</li>
          </ul>

          <h2>Description</h2>
          <p>{boat.description}</p>

          <button
            style={{
              marginTop: "1rem",
              padding: "0.8rem 1.5rem",
              background: "#0077b6",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Contact Dealer
          </button>
        </div>
      </div>
    </div>
  );
}
