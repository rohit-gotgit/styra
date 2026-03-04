import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
// internal
import Menus from './header-com/menus';
import useSticky from '@/hooks/use-sticky';
import useCartInfo from '@/hooks/use-cart-info';
import { openCartMini } from '@/redux/features/cartSlice';
import HeaderTopRight from './header-com/header-top-right';
import CartMiniSidebar from '@/components/common/cart-mini-sidebar';
import { CartTwo, Compare, Facebook, Menu, PhoneTwo, Wishlist, Search } from '@/svg';
import useSearchFormSubmit from '@/hooks/use-search-form-submit';
import OffCanvas from '@/components/common/off-canvas';

const HeaderTwo = ({ style_2 = false }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { setSearchText, handleSubmit, searchText } = useSearchFormSubmit();
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className={`tp-header-area tp-header-style-${style_2 ? 'primary' : 'darkRed'} tp-header-height`}>
          <div className="tp-header-top-2 p-relative z-index-11 tp-header-top-border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-header-info d-flex align-items-center">
                    <div className="tp-header-info-item">
                      <a href="#">
                        <span>
                          <Facebook />
                        </span> 75k Followers
                      </a>
                    </div>
                    <div className="tp-header-info-item">
                      <a href="tel:+91-8738913530">
                        <span>
                          <PhoneTwo />
                        </span> +91 8738913530
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-header-top-right tp-header-top-black d-flex align-items-center justify-content-end">
                    <HeaderTopRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="header-sticky"
            className={`tp-header-bottom-2 tp-header-sticky ${sticky ? 'header-sticky' : ''}`}
          >
            <div className="container">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center tp-header-main-row">
                  {/* logo */}
                  <div className="col-xl-3 col-lg-3 col-md-4 col-6 tp-header-logo-col">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/mylogo.svg"
                          alt="Styra logo"
                          width={160}
                          height={50}
                          priority
                          style={{ objectFit: 'contain' }}
                        />
                      </Link>
                    </div>
                  </div>

                  {/* center navigation */}
                  <div className="col-xl-6 col-lg-6 d-none d-lg-block tp-header-nav-col">
                    <div className="main-menu menu-style-2">
                      <nav className="tp-main-menu-content">
                        <Menus />
                      </nav>
                    </div>
                  </div>

                  {/* search + actions */}
                  <div className="col-xl-3 col-lg-3 col-md-8 col-6 tp-header-right-col">
                    <div className="tp-header-bottom-right d-flex align-items-center justify-content-end">
                      <div className="tp-header-search-2 d-none d-sm-block">
                        <form onSubmit={handleSubmit}>
                          <input
                            onChange={(e) => setSearchText(e.target.value)}
                            value={searchText}
                            type="text"
                            placeholder="Search for Products..." />
                          <button type="submit">
                            <Search />
                          </button>
                        </form>
                      </div>
                      <div className="tp-header-action d-flex align-items-center">
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link href="/compare" className="tp-header-action-btn tp-header-icon-btn">
                            <Compare />
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link href="/wishlist" className="tp-header-action-btn tp-header-icon-btn">
                            <Wishlist />
                            <span className="tp-header-action-badge">{wishlist.length}</span>
                          </Link>
                        </div>
                        <div className="tp-header-action-item">
                          <button
                            onClick={() => dispatch(openCartMini())}
                            className="tp-header-action-btn cartmini-open-btn tp-header-icon-btn"
                          >
                            <CartTwo />
                            <span className="tp-header-action-badge">{quantity}</span>
                          </button>
                        </div>
                        <div className="tp-header-action-item tp-header-hamburger d-xl-none">
                          <button
                            onClick={() => setIsCanvasOpen(true)}
                            type="button"
                            className="tp-offcanvas-open-btn tp-header-icon-btn"
                          >
                            <Menu />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="fashion" />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;