import React from "react";
import { Link } from "react-router-dom";

const AuthorItems = ({ authorId, authorImage, nftCollections = [] }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nftCollections.map((nftCollection) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={nftCollection.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to={`/author/${authorId}`}>
                    <img className="lazy" src={authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <Link to="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </Link>
                        <Link to="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </Link>
                        <Link to="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link to={`/item-details/${nftCollection.nftId}`}>
                    <img
                      src={nftCollection.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${nftCollection.nftId}`}>
                    <h4>{nftCollection.title}</h4>
                  </Link>
                  <div className="nft__item_price">{nftCollection.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{nftCollection.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
