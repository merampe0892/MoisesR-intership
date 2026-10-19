import React from "react";
import { Link } from "react-router-dom";

const HeaderExplore = () => {
  return (
    <div className="col-lg-12">
      <div className="items_filter">
        <form
          action="blank.php"
          className="row form-dark"
          id="form_quick_search"
          method="post"
          name="form_quick_search"
        >
          <div className="col text-center">
            <input
              className="form-control"
              id="name_1"
              name="name_1"
              placeholder="search item here..."
              type="text"
            />{" "}
            <Link to="#" id="btn-submit">
              <i className="fa fa-search bg-color-secondary"></i>
            </Link>
            <div className="clearfix"></div>
          </div>
        </form>

        <div id="item_category" className="dropdown">
          <Link to="#" className="btn-selector">
            All categories
          </Link>
          <ul>
            <li className="active">
              <span>All categories</span>
            </li>
            <li>
              <span>Art</span>
            </li>
            <li>
              <span>Music</span>
            </li>
            <li>
              <span>Domain Names</span>
            </li>
            <li>
              <span>Virtual World</span>
            </li>
            <li>
              <span>Trading Cards</span>
            </li>
            <li>
              <span>Collectibles</span>
            </li>
            <li>
              <span>Sports</span>
            </li>
            <li>
              <span>Utility</span>
            </li>
          </ul>
        </div>

        <div id="buy_category" className="dropdown">
          <Link to="#" className="btn-selector">
            Buy Now
          </Link>
          <ul>
            <li className="active">
              <span>Buy Now</span>
            </li>
            <li>
              <span>On Auction</span>
            </li>
            <li>
              <span>Has Offers</span>
            </li>
          </ul>
        </div>

        <div id="items_type" className="dropdown">
          <Link to="#" className="btn-selector">
            All Items
          </Link>
          <ul>
            <li className="active">
              <span>All Items</span>
            </li>
            <li>
              <span>Single Items</span>
            </li>
            <li>
              <span>Bundles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderExplore;
