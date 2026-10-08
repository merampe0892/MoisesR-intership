import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nfts from "../home/Nfts";
import SkeletonGrid from "../UI/SkeletonGrid";
import NftCardSkeleton from "../UI/NftCardSkeleton";

const ExploreItems = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalNfts, setOriginalNfts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchNftsData = async () => {
      const response = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore",
      );

      setNfts(response.data);
      console.log(response.data)
      setOriginalNfts(response.data);
      setLoading(false);
    };

    fetchNftsData();
  }, []);

  function filterNfts(filter) {
    console.log(filter);
    if (filter === "price_low_to_high") {
      setNfts(nfts.slice().sort((a, b) => a.price - b.price));
    }
    if (filter === "price_high_to_low") {
      setNfts(nfts.slice().sort((a, b) => b.price - a.price));
    }
    if (filter === "likes_high_to_low") {
      setNfts(nfts.slice().sort((a, b) => b.likes - a.likes));
    }
    if (filter === "") {
      setNfts(originalNfts.slice());
    }
    setVisibleCount(8);
  };

  function loadMore() {
    setVisibleCount((prev) => prev + 4)
  }

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => filterNfts(event.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {loading ? (
        <div className="row">
          <SkeletonGrid
            count={8}
            className="col-lg-3 col-md-6"
            component={NftCardSkeleton}
          />
        </div>
      ) : (
        nfts.slice(0, visibleCount).map((nft) => (
          <div
            key={nft.id}
            className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <Nfts
              id={nft.id}
              authorId={nft.authorId}
              authorImage={nft.authorImage}
              expiryDate={nft.expiryDate}
              likes={nft.likes}
              nftId={nft.nftId}
              nftImage={nft.nftImage}
              price={nft.price}
              title={nft.title}
            />
          </div>
        ))
      )}

      {visibleCount < nfts.length && (
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" 
        onClick={(e) => {
          e.preventDefault();
          loadMore();
        }}
        >
          Load more
        </Link>
      </div>
      )}
      
    </>
  );
};

export default ExploreItems;
