import React from "react";
import axios from "axios";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./NewItems.css";

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
      console.log(response.data);
      setLoading(false);
    };

    fetchNewItemsData();
  }, []);

  const loadingItems = Array.from({ length: 4 }, (_, index) => (
    <div className="skeleton-card" key={index}>
      <div className="nft__item">
        <div className="skeleton-author-wrap">
          <div className="skeleton skeleton-author"></div>
          <i className="fa fa-check skeleton-check"></i>
        </div>

        <div className="skeleton skeleton-countdown"></div>

        <div className="nft__item_wrap">
          <div className="skeleton skeleton-image"></div>
        </div>

        <div className="nft__item_info">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-price"></div>
        </div>
      </div>
    </div>
  ));

  const itemCards = items.map((item) => (
    <div key={item.id}>
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to="/author"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img className="lazy" src={item.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        <div className="de_countdown">5h 30m 32s</div>

        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to="/item-details">
            <img
              src={item.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{item.title}</h4>
          </Link>
          <div className="nft__item_price">{item.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
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
            <OwlCarousel {...carouselOptions}>
              {items.length > 0 ? itemCards : loadingItems}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
