import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import SkeletonGrid from "../components/UI/SkeletonGrid";
import NftCardSkeleton from "../components/UI/NftCardSkeleton";
import AuthorSkeleton from "../components/UI/AuthorSkeleton";

const Author = () => {
  const [author, setAuthor] = useState({});
  const { authorId } = useParams();
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchAuthorsData = async () => {
      const response = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`,
      );

      setAuthor(response.data);
      setLoading(false);
    };

    fetchAuthorsData();
  }, [authorId]);

  const handleFollow = () => {
    setIsFollowing((previousIsFollowing) => !previousIsFollowing);
    setAuthor((previousAuthor) => ({
      ...previousAuthor,
      followers: isFollowing
        ? previousAuthor.followers - 1
        : previousAuthor.followers + 1,
    }));
  };

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? (
                <div className="col-md-12">
                  <AuthorSkeleton />
                  <div className="row">
                    <SkeletonGrid
                      count={8}
                      className="col-lg-3 col-md-6"
                      component={NftCardSkeleton}
                    />
                  </div>
                </div>
              ) : (
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={author.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {author.authorName}
                            <span className="profile_username">
                              @{author.tag}
                            </span>
                            <span id="wallet" className="profile_wallet">
                              {author.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {author.followers} followers
                        </div>

                        <button
                          className={`btn-main follow-btn ${isFollowing ? "following" : ""}`}
                          onClick={handleFollow}
                        >
                          {isFollowing ? "Unfollow" : "Follow"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="de_tab tab_simple">
                    <AuthorItems
                      authorImage={author.authorImage}
                      nftCollections={author.nftCollection}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
