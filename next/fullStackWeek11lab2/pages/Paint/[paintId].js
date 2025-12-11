import { useRouter } from "next/router";
import { useState } from "react";

const paintData = {
  "epoxy-repair-kit": {
    title: "Epoxy Resin Fiberglass Repair Kit",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/88/65.520.10_New2019.jpg?t=1734405406",
    brand: "OSCULATI",
    price: "$61.38",
    description:
      "A durable epoxy repair system designed for fixing cracks, dents, and fiberglass hull damage. Perfect for quick marine repairs.",
  },

  "six10-epoxy": {
    title: "West System Six10 Thickened Epoxy Adhesive",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/200/apikmfoqn__52294.jpg?t=1738896081",
    brand: "Six10",
    price: "$49.30",
    description:
      "A professional-grade thickened epoxy adhesive ideal for structural bonding, wood repair, and composite work.",
  },

  "glass-fibre": {
    title: "Glass Fibre Sheet",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/155/LNKZ8822.jpg?t=1734404724",
    brand: "Talamex",
    price: "$12.40",
    description:
      "High-strength fiberglass reinforcement sheet used for marine construction, patch repairs, and general lamination.",
  },

  "engine-spray-paint": {
    title: "Engine Spray Paint – Assorted Colours",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/120/GS90004.jpg?t=1735008971",
    brand: "Talamex",
    price: "$16.59",
    description:
      "Heat-resistant spray paint designed for marine engines and high-temperature components.",
  },

  "brilliant-gloss-topcoat": {
    title: "Brilliant Gloss Top Coat",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/162/51f7jY2pbDL._AC_SL1000_.jpg?t=1734404935",
    brand: "Hempel",
    price: "$20.05",
    description:
      "A premium gloss topcoat offering a long-lasting shine and UV protection for hulls and decks.",
  },

  "toplac-plus": {
    title: "International Toplac Plus",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/195/topcoat-plus-rescue-orange-ylk265.jpg?t=1734405176",
    brand: "International",
    price: "$41.11",
    description:
      "A professional marine enamel paint providing exceptional gloss retention and durability.",
  },

  "hempel-varnish": {
    title: "Hempel Classic Varnish",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/220/240/detailed/59/duraSatin.jpg?t=1732329137",
    brand: "Hempel",
    price: "$27.59",
    description:
      "A clear, waterproof varnish ideal for wooden marine surfaces, protecting against saltwater and UV.",
  },

  "owartal-glazing": {
    title: "Owartal Glazing Finish",
    image:
      "https://d3u60hpy3azizo.cloudfront.net/images/thumbnails/600/620/detailed/151/63.0365_w550_h550.jpg?t=1734576756",
    brand: "Owartal",
    price: "$19.50",
    description:
      "A premium glazing finish designed to bring out a high gloss and durable protective layer on wood.",
  },
};

export default function PaintDetailPage() {
  const router = useRouter();
  const { paintId } = router.query;

  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const sellerEmail = "AnchorManagementsales@gmail.com";

  if (!paintId) return <p>Loading...</p>;

  const paint = paintData[paintId];

  if (!paint)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Paint Not Found</h1>
      </div>
    );

  const copyEmail = () => {
    navigator.clipboard.writeText(sellerEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          src={paint.image}
          alt={paint.title}
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "500px",
            objectFit: "contain",
            borderRadius: "8px",
            border: "1px solid #ddd",
            padding: "10px",
            background: "white",
          }}
        />

        <div style={{ flex: "1" }}>
          <h1>{paint.title}</h1>

          <div
            style={{
              background: "#0077b6",
              padding: "8px 20px",
              color: "white",
              display: "inline-block",
              borderRadius: "5px",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            {paint.price}
          </div>

          <h2>Brand</h2>
          <p>{paint.brand}</p>

          <h2>Description</h2>
          <p>{paint.description}</p>

          {/* CONTACT SELLER BUTTON */}
          <button
            onClick={() => setShowEmail(!showEmail)}
            style={{
              marginTop: "1rem",
              padding: "0.8rem 1.5rem",
              background: "#0077b6",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {showEmail ? "Hide Contact Info" : "Contact Seller"}
          </button>

          {/* EMAIL POPUP */}
          {showEmail && (
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                background: "#f1f9ff",
                border: "1px solid #a7d7ff",
                borderRadius: "8px",
                width: "fit-content",
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                📧 <strong>{sellerEmail}</strong>
              </p>
              <button
                onClick={copyEmail}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#0096c7",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Copy Email
              </button>

              {copied && (
                <p style={{ color: "green", marginTop: "0.5rem" }}>
                  ✔ Email copied!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
