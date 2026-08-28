import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultipleItems.css";

function MultipleItems() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const getNftsData = async () => {
      const response = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
      );
      setNfts(response.data);
    };

    getNftsData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 760,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider key={nfts.length} {...settings}>
        {nfts.map((nft) => (
          <div key={nft.id}>
            <div className="nft-slide">
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nft.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img
                      className="lazy pp-coll"
                      src={nft.authorImage}
                      alt=""
                    />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{nft.title}</h4>
                  </Link>
                  <span>ERC-{nft.code}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
