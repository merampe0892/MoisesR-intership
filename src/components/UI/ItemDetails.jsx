import React from 'react'
import "../../css/styles/itemDetails.css";


function ItemDetails() {
  return (
    <div className="row">
        <div className="col-md-6 text-center">
          <div className="skeleton-box"></div>
        </div>
        <div className="col-md-6">
          <div className="item_info">
            <div className="skeleton-box skeleton-title"></div>
            <div className="item_info-counts">
              <div className="skeleton-box skeleton-likes"></div>
              <div className="skeleton-box skeleton-likes"></div>
            </div>
            <div className="skeleton-box skeleton-description"></div>
            <div className="d-flex flex-row">
              <div className="mr40">
                <h6>Owner</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <div className="skeleton-box skeleton-creator"></div>
                  </div>
                  <div className="author_list_info">
                    <div className="skeleton-box skeleton-name"></div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="de_tab tab_simple">
              <div className="de_tab_content">
                <h6>Creator</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <div className="skeleton-box skeleton-creator"></div>
                  </div>
                  <div className="author_list_info">
                    <div className="skeleton-box skeleton-name"></div>
                  </div>
                </div>
              </div>
              <div className="spacer-40"></div>
              <h6>Price</h6>
              <div className="nft-item-price">
                <div className="skeleton-box skeleton-price"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ItemDetails