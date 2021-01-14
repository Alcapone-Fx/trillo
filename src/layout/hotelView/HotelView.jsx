/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import img1 from '../../assets/img/hotel-1.jpg';
import img2 from '../../assets/img/hotel-2.jpg';
import img3 from '../../assets/img/hotel-3.jpg';
import sprite from '../../assets/img/sprite.svg';
import Detail from '../../components/detail/Detail';
import './HotelView.scss';

function HotelView() {
  const imageArray = [img1, img2, img3];
  const overviewStars = [...Array(5).keys()];

  return (
    <main className="hotel-view">
      <div className="gallery">
        {imageArray.map((image, key) => (
          <figure className="gallery__item" key={key}>
            <img
              src={image}
              alt={`Photo of hotel ${key + 1}`}
              className="gallery__photo"
            />
          </figure>
        ))}
      </div>
      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars">
          {overviewStars.map((star) => (
            <svg className="overview__icon-stars" key={star}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
          ))}
        </div>
        <div className="overview__location">
          <svg className="overview__icon-location">
            <use xlinkHref={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className="button-inline">Albufeira, Portugal</button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">8.5</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
      <Detail />
    </main>
  );
}

export default HotelView;
