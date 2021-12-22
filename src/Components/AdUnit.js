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
          style = { {display:"block"} }
          data-ad-format="fluid"
          data-ad-layout-key="-f9+52+6z-e1+5b"
          data-ad-client="ca-pub-6308049796077270"
          data-ad-slot="5574338884"
        ></ins>
      </div>
    );
  }
}

export default AdUnit;
