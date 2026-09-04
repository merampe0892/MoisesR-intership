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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNftsData = async () => {
      const response = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
      );
      setNfts(response.data);
      setIsLoading(false);
    };

    getNftsData();
  }, []);

  const getSlidesToShow = () => {
    if (window.innerWidth < 520) return 1;
    if (window.innerWidth < 760) return 2;
    if (window.innerWidth < 1020) return 3;
    return 4;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const skeletonSlides = Array.from({ length: slidesToShow + 1 }).map(
    (_, i) => (
      <div key={i}>
        <div className="nft-slide">
          <div className="nft_coll">
            <div className="nft_wrap">
              <div className="slide-skeleton nft-image-skeleton"></div>
            </div>
            <div className="nft_coll_pp">
              <div className="slide-skeleton nft-coll-skeleton"></div>
              <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
              <h4 className="slide-skeleton nft-info-skeleton"></h4>
              <span className="slide-skeleton nft-info-skeleton"></span>
            </div>
          </div>
        </div>
      </div>
    ),
  );

  return (
    <div className="slider-container">
      {isLoading ? (
        <Slider {...settings}>{skeletonSlides}</Slider>
      ) : nfts.length > 0 ? (
        <Slider {...settings}>
          {nfts.map((nft) => (
            <div key={nft.id}>
              <div className="nft-slide">
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/item-details">
                      <img
                        src={nft.nftImage}
                        className="lazy img-fluid"
                        alt=""
                      />
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
      ) : null}
    </div>
  );
}

export default MultipleItems;
