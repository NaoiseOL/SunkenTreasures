import { useRouter } from "next/router";

const engineData = {
  "detroit-4-53": {
    title: "Detroit 4-53 Engine",
    image: "https://d2uhsaoc6ysewq.cloudfront.net/58726/Engines-Detroit-4-53N-49187922-thumb.jpg",
    manufacturer: "Detroit Diesel",
    model: "4-53N",
    condition: "Factory New",
    type: "Inboard",
    price: "$3,249",
    horsepower: "N/A",
    cylinders: 4,
    description:
      "The Detroit 4-53 is a compact and reliable inboard engine widely used in marine and industrial applications. Known for durability and ease of maintenance.",
  },

  "honda-bf115-150": {
    title: "Honda BF115-150 Outboard",
    image: "https://marine.honda.com/-/media/Feature/Outboards/ModelGroups/header-honda-outboard-bf115-140-150v2.png",
    manufacturer: "Honda",
    model: "BF115-150",
    condition: "Factory New",
    type: "Outboard",
    price: "$12,000",
    horsepower: "150hp",
    cylinders: 4,
    description:
      "A quiet, fuel-efficient Honda outboard engine offering excellent reliability and smooth performance.",
  },

  "yanmar-8lv-320": {
    title: "Yanmar 8LV 320 Marine Diesel",
    image: "https://www.osmarine.ie/image/cache/catalog/Engines/Yanmar/yanmar-8LV370_inboard-marine-engine-ireland-550x550.jpg",
    manufacturer: "Yanmar",
    model: "8LV 320",
    condition: "Factory New",
    type: "Inboard",
    price: "$45,420",
    horsepower: "320 bhp",
    cylinders: 8,
    description:
      "A powerful marine diesel engine with exceptional torque delivery and a lightweight compact design.",
  },

  "yanmar-sd60": {
    title: "Yanmar SailDrive SD60",
    image: "https://www.osmarine.ie/image/cache/catalog/Engines/Yanmar/Yanmar-SailDrive-SD25-Ireland-550x550.jpg",
    manufacturer: "Yanmar",
    model: "SD60",
    condition: "Factory New",
    type: "Outboard",
    price: "$4,980",
    horsepower: "50",
    cylinders: 4,
    description:
      "A premium saildrive system offering smooth, quiet propulsion ideal for sailing vessels.",
  },

  "suzuki-df30atl": {
    title: "Suzuki DF30ATL Outboard",
    image: "https://www.osmarine.ie/image/cache/catalog/Suzuki/suzuki-marine-outboard-df30at-osmarine-550x550h.jpg",
    manufacturer: "Suzuki",
    model: "DF30ATL",
    condition: "Factory New",
    type: "Outboard",
    price: "$6,615",
    horsepower: "30",
    cylinders: 3,
    description:
      "A lightweight, fuel-efficient outboard engine designed for small boats and recreational use.",
  },
};

export default function EngineDetailPage() {
  const router = useRouter();
  const { engineId } = router.query;

  if (!engineId) return <p>Loading...</p>;

  const engine = engineData[engineId];

  if (!engine)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Engine Not Found</h1>
        <p>No product matches ID: {engineId}</p>
        <button
          onClick={() => router.push("/Engines")}
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1.4rem",
            background: "#0077b6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Back to Engines
        </button>
      </div>
    );

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1100px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "1.5rem",
          padding: "0.5rem 1rem",
          background: "#e0e0e0",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Product Layout */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* Left: Large Image */}
        <div style={{ flex: "1 1 450px" }}>
          <img
            src={engine.image}
            alt={engine.title}
            style={{
              width: "100%",
              maxHeight: "600px",
              objectFit: "contain",
              borderRadius: "10px",
              border: "1px solid #ddd",
              padding: "10px",
              background: "white",
            }}
          />
        </div>

        {/* Right: Product Info */}
        <div style={{ flex: "1 1 400px" }}>
          <h1 style={{ marginBottom: "0.5rem" }}>{engine.title}</h1>

          {/* Price Highlight */}
          <div
            style={{
              background: "#0077b6",
              color: "white",
              display: "inline-block",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            {engine.price}
          </div>

          <h2>Specifications</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "1.5rem",
            }}
          >
            <tbody>
              {[
                ["Manufacturer", engine.manufacturer],
                ["Model", engine.model],
                ["Condition", engine.condition],
                ["Type", engine.type],
                ["Horsepower", engine.horsepower],
                ["Cylinders", engine.cylinders],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      borderBottom: "1px solid #ddd",
                      width: "40%",
                    }}
                  >
                    {label}
                  </td>
                  <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Description</h2>
          <p style={{ marginBottom: "1.5rem" }}>{engine.description}</p>

          {/* Contact Button */}
          <button
            style={{
              padding: "0.8rem 1.6rem",
              background: "#0077b6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}
