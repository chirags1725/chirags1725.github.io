import React, { Component } from "react";

class AdUnit extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div>
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            margin: "20px",
            padding: "6px",
            borderRadius: "12px",
            marginTop: "6px",
            marginBottom: "6px",
            zIndex: "1000",
            boxShadow: "10px 10px 12px -10px rgba(0, 0, 0, .2)",
            background: "rgba(255,255,255,.4)"
          }}
          data-ad-format="fluid"
          data-ad-layout-key="-f9+52+6z-e1+5b"
          data-ad-client="ca-pub-6308049796077270"
          data-ad-slot="5574338884"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

export default AdUnit;
