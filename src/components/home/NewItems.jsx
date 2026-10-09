import React from "react";
import axios from "axios";
import $ from "jquery";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./NewItems.css";
import Nfts from "./Nfts";
import SkeletonGrid from "../UI/SkeletonGrid";
import NftCardSkeleton from "../UI/NftCardSkeleton";

window.$ = $;
window.jQuery = $;

const carouselOptions = {
  className: "owl-theme",
  loop: true,
  nav: true,
  dots: false,
  margin: 10,
  navText: ["<", ">"],
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 },
  },
};

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewItemsData = async () => {
      const response = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
      );
      setItems(response.data);
      setLoading(false);
    };

    fetchNewItemsData();
  }, []);

  const itemCards = items.map((item) => (
    <Nfts
      key={item.id}
      id={item.id}
      authorId={item.authorId}
      authorImage={item.authorImage}
      expiryDate={item.expiryDate}
      likes={item.likes}
      nftId={item.nftId}
      nftImage={item.nftImage}
      price={item.price}
      title={item.title}
    />
  ));

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div className="col-lg-12">
            {loading ? (
              <div className="row">
                <SkeletonGrid
                  count={4}
                  className="col-lg-3 col-md-6"
                  component={NftCardSkeleton}
                />
              </div>
            ) : (
              <OwlCarousel key={items.length} {...carouselOptions}>
                {itemCards}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
