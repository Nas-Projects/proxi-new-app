import Link from "next/link";
import BlurImage from "../blur-image";

export default function OtherProperties({}) {
    return <div className="mb-44 pb-64 main-container w-container">
    <div className="house-button-wrap">
      <h4 className="no-margin ">Other properties</h4>
      <Link href="/properties" className="cta w-button bg-custom-gradient">
        Show all properties
      </Link>
    </div>
    <div className="space-24" />
    <div className="w-dyn-list">
      <div role="list" className="houe-grid w-dyn-items">
        <div role="listitem" className="collection-item w-dyn-item">
          <Link
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/63c93770199def226e7204f3/63c93770199def25cc72052d_property-thumnail%203-min.jpg")'
            }}
            href="/properties/f2f75817-3106-4818-bdbb-b8cbce180c85"
            className="house-card w-inline-block"
          >
            <div className="house-content">
              <div className="house-title">Solhjulet 236</div>
              <div className="house-card-divider" />
              <div className="house-detail-wrap">
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def8171720524_place.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <p className="paragraph-small">Stavanger</p>
                </div>
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defda7c72052e_door_back.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="wrap-detail-value">
                    <p className="paragraph-small">160</p>
                    <p className="paragraph-small">m2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay house" />
          </Link>
        </div>
        <div role="listitem" className="collection-item w-dyn-item">
          <Link
            style={{
              backgroundImage:
                'url("/95251c1ee75b928ea8b4c2fce6bb11fe724495c8-1644x1065.webp")'
            }}
            href="/properties/f2f75817-3106-4818-bdbb-b8cbce180c85"
            className="house-card w-inline-block"
          >
            <div className="house-content">
              <div className="house-title">627 2nd Avenue</div>
              <div className="house-card-divider" />
              <div className="house-detail-wrap">
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def8171720524_place.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <p className="paragraph-small">New York, NY</p>
                </div>
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defda7c72052e_door_back.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="wrap-detail-value">
                    <p className="paragraph-small">1198</p>
                    <p className="paragraph-small">ft2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay house" />
          </Link>
        </div>
        <div role="listitem" className="collection-item w-dyn-item">
          <a
            style={{
              backgroundImage:
                'url("/b435fa2d60b2741f5662128b0843b1e8e7295689-3000x4000.webp")'
            }}
            href="/properties/e9e604ac-5d65-4e14-a444-9c8af98229c1"
            aria-current="page"
            className="house-card w-inline-block w--current"
          >
            <div className="house-content">
              <div className="house-title">110 Lexington Avenue - Restaurant</div>
              <div className="house-card-divider" />
              <div className="house-detail-wrap">
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def8171720524_place.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <p className="paragraph-small">New York NY</p>
                </div>
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                  <BlurImage
                      src="/b435fa2d60b2741f5662128b0843b1e8e7295689-3000x4000.webp"
                      loading="lazy"
                      alt=""
                      className="image"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="wrap-detail-value">
                    <p className="paragraph-small">1300</p>
                    <p className="paragraph-small">ft2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay house" />
          </a>
        </div>
        {/* <div role="listitem" className="collection-item w-dyn-item">
          <a
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/63c93770199def226e7204f3/63d8f368154bae5c01ba73ae_Thumbnail%20-%20Nordi%20Living%20House%201-min.jpg")'
            }}
            href="/properties/toranesgata-120"
            className="house-card w-inline-block"
          >
            <div className="house-content">
              <div className="house-title">Toranesgata 120</div>
              <div className="house-card-divider" />
              <div className="house-detail-wrap">
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def8171720524_place.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <p className="paragraph-small">Ålesund</p>
                </div>
                <div className="detail-block white-block">
                  <div className="icon paragraph-small">
                    <img
                      src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defda7c72052e_door_back.svg"
                      loading="lazy"
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="wrap-detail-value">
                    <p className="paragraph-small">82</p>
                    <p className="paragraph-small">m2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay house" />
          </a>
        </div>*/}
      </div> 
    </div>
  </div>
  
}