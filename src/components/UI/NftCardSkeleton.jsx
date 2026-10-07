import React from "react";

const NftCardSkeleton = () => (
  <div className="nft__item skeleton-card">
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
);

export default NftCardSkeleton;